const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json()); // Middleware to parse JSON requests

// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product Catalog API",
      version: "1.0.0",
      description: "API for managing a product catalog",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
    paths: {
      "/api/products": {
        get: {
          summary: "Get all products",
          description: "Retrieve a list of products",
          parameters: [
            {
              name: "category",
              in: "query",
              description: "Filter products by category",
              schema: { type: "string" },
            },
            {
              name: "price_min",
              in: "query",
              description: "Minimum price filter",
              schema: { type: "number" },
            },
            {
              name: "price_max",
              in: "query",
              description: "Maximum price filter",
              schema: { type: "number" },
            },
          ],
          responses: {
            200: { description: "Successfully retrieved list of products" },
          },
        },
        post: {
          summary: "Create a new product",
          description: "Add a new product to the catalog",
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    price: { type: "number" },
                    category: { type: "string" },
                  },
                  required: ["name", "price"],
                },
              },
            },
          },
          responses: { 201: { description: "Product created successfully" } },
        },
      },
      "/api/products/{id}": {
        get: {
          summary: "Get a product by ID",
          description: "Retrieve a single product",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Product ID",
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Successfully retrieved product" } },
        },
        put: {
          summary: "Update a product",
          description: "Modify an existing product",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Product ID",
              schema: { type: "integer" },
            },
          ],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    name: { type: "string" },
                    price: { type: "number" },
                    category: { type: "string" },
                  },
                },
              },
            },
          },
          responses: { 200: { description: "Product updated successfully" } },
        },
        delete: {
          summary: "Delete a product",
          description: "Remove a product from the catalog",
          parameters: [
            {
              name: "id",
              in: "path",
              required: true,
              description: "Product ID",
              schema: { type: "integer" },
            },
          ],
          responses: { 200: { description: "Product deleted successfully" } },
        },
      },
    },
  },
  apis: [],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Dummy data for products
let products = [
  { id: 1, name: "Laptop", price: 1000, category: "Electronics" },
  { id: 2, name: "Phone", price: 500, category: "Electronics" },
  { id: 3, name: "Shoes", price: 100, category: "Fashion" },
];

// GET /api/products - Retrieve all products (with filtering)
app.get("/api/products", (req, res) => {
  let { category, price_min, price_max } = req.query;
  let filteredProducts = products;

  if (category) {
    filteredProducts = filteredProducts.filter((p) => p.category.toLowerCase() === category.toLowerCase());
  }
  if (price_min) {
    filteredProducts = filteredProducts.filter((p) => p.price >= parseFloat(price_min));
  }
  if (price_max) {
    filteredProducts = filteredProducts.filter((p) => p.price <= parseFloat(price_max));
  }

  res.json(filteredProducts);
});

// GET /api/products/:id - Retrieve a product by ID
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

// POST /api/products - Create a new product
app.post("/api/products", (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price) {
    return res.status(400).json({ message: "Name and price are required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category: category || "Uncategorized",
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT /api/products/:id - Update a product
app.put("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });

  const { name, price, category } = req.body;
  if (name) product.name = name;
  if (price) product.price = price;
  if (category) product.category = category;

  res.json({ message: "Product updated successfully", product });
});

// DELETE /api/products/:id - Delete a product
app.delete("/api/products/:id", (req, res) => {
  const productIndex = products.findIndex((p) => p.id === parseInt(req.params.id));
  if (productIndex === -1) return res.status(404).json({ message: "Product not found" });

  products.splice(productIndex, 1);
  res.json({ message: "Product deleted successfully" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger API Docs available at http://localhost:${PORT}/api-docs`);
});
