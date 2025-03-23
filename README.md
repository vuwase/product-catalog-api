# Product Catalog API

## Overview
The **Product Catalog API** is a RESTful backend system designed for managing products in an e-commerce platform. It provides endpoints for creating, retrieving, updating, and deleting products, organizing them into categories, searching, filtering, and inventory tracking.

## Learning Objectives
- Apply **Node.js** and **Express.js** to build a RESTful API
- Implement CRUD operations with appropriate HTTP methods
- Design logical data models for complex business requirements
- Create effective search and filtering mechanisms
- Develop proper error handling strategies
- Write clear API documentation

---

## Features
- **Product Management**: Add, update, retrieve, and delete products
- **Category Management**: Organize products into categories
- **Search & Filtering**: Find products by name, description, and attributes
- **Product Variants**: Support different sizes, colors, and options
- **Inventory Tracking**: Keep track of product stock
- **Pricing & Discounts**: Manage product pricing and discounts

---

## Installation & Setup

### Prerequisites
- **Node.js** (v14+ recommended)
- **MongoDB** (if using a database for persistence)
- **Postman / cURL** (for testing API endpoints)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/product-catalog-api.git
   cd product-catalog-api
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create an `.env` file and set up environment variables:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/product_catalog
   ```
4. Start the server:
   ```sh
   npm start
   ```

---

## API Endpoints

### 1. Product Management
#### Create a Product
- **Endpoint:** `POST /api/products`
- **Description:** Add a new product to the catalog.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "description": "Product Description",
    "price": 29.99,
    "category": "Category ID",
    "variants": [{"size": "M", "color": "Red", "stock": 10}]
  }
  ```
- **Response:**
  ```json
  {
    "id": "12345",
    "name": "Product Name",
    "description": "Product Description",
    "price": 29.99,
    "category": "Category ID",
    "variants": [{"size": "M", "color": "Red", "stock": 10}]
  }
  ```

#### Get All Products
- **Endpoint:** `GET /api/products`
- **Description:** Retrieve a list of all products.
- **Response:**
  ```json
  [
    {
      "id": "12345",
      "name": "Product Name",
      "price": 29.99,
      "category": "Category ID"
    }
  ]
  ```

#### Get Product by ID
- **Endpoint:** `GET /api/products/:id`
- **Description:** Retrieve details of a specific product by ID.

#### Update a Product
- **Endpoint:** `PUT /api/products/:id`
- **Description:** Update product details.

#### Delete a Product
- **Endpoint:** `DELETE /api/products/:id`
- **Description:** Remove a product from the catalog.

---

### 2. Category Management
#### Create a Category
- **Endpoint:** `POST /api/categories`
- **Description:** Add a new category.

#### Get Categories
- **Endpoint:** `GET /api/categories`
- **Description:** Retrieve all categories.

#### Get Category by ID
- **Endpoint:** `GET /api/categories/:id`
- **Description:** Retrieve details of a category by ID.

#### Update a Category
- **Endpoint:** `PUT /api/categories/:id`
- **Description:** Update a category.

#### Delete a Category
- **Endpoint:** `DELETE /api/categories/:id`
- **Description:** Remove a category.

---

### 3. Search & Filtering
#### Search Products
- **Endpoint:** `GET /api/products/search?q=keyword`
- **Description:** Search products by name or description.

#### Filter Products by Category
- **Endpoint:** `GET /api/products?category=CategoryID`
- **Description:** Retrieve products under a specific category.

#### Filter by Price Range
- **Endpoint:** `GET /api/products?minPrice=10&maxPrice=50`
- **Description:** Retrieve products within a price range.

---

### 4. Inventory Management
#### Update Product Stock
- **Endpoint:** `PUT /api/products/:id/stock`
- **Description:** Update stock quantity for a product.

#### Get Low Stock Items
- **Endpoint:** `GET /api/products/low-stock`
- **Description:** Retrieve products with low stock.

---

### 5. Basic Reporting
#### Get Low Stock Report
- **Endpoint:** `GET /api/reports/low-stock`
- **Description:** Get a report of low-stock items.

#### Get Sales Report (Future Implementation)
- **Endpoint:** `GET /api/reports/sales`
- **Description:** Get a report of sales data.

---

## Error Handling
All API responses follow a structured error format:
```json
{
  "error": "Invalid request",
  "message": "Product not found"
}
```

---

## Assumptions & Limitations
- Currently, no authentication/authorization is implemented.
- Database used: MongoDB (Can be extended to SQL-based DBs).
- Basic search and filtering; advanced search features can be added.
- No image handling for product photos (can be added in future).

---

## Testing
Use **Postman**, **cURL**, or VS Code REST Client extension to test the endpoints.

Example cURL request:
```sh
curl -X GET http://localhost:5000/api/products
```

---

## Evaluation Criteria
- **Functionality (40%)** - Completeness of API features.
- **Code Quality (25%)** - Clean, efficient, well-structured code.
- **API Design (20%)** - Logical and consistent RESTful API.
- **Error Handling (10%)** - Robust error handling.
- **Documentation (5%)** - Clear and comprehensive documentation.

---

## Future Enhancements
- Authentication & authorization
- Rate limiting
- Persistent storage improvements
- Advanced search features
- Product image uploads
- Performance optimizations

---

## Conclusion
The **Product Catalog API** provides a well-structured backend system for managing an e-commerce platform's product inventory. With scalable design and robust error handling, this API serves as a strong foundation for a real-world e-commerce backend.

Swagger API Docs available at http://localhost:5000/api-docs