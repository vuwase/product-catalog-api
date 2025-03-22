
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

