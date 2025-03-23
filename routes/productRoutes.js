const express = require("express");
const router = express.Router();

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of products
 *     responses:
 *       200:
 *         description: Successfully retrieved list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: Laptop
 *                   price:
 *                     type: number
 *                     example: 1000
 */
router.get("/products", (req, res) => {
    res.json([{ id: 1, name: "Laptop", price: 1000 }]);
});

module.exports = router;
