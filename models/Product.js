const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    stock: { type: Number, required: true, default: 0 },
    variants: [{ size: String, color: String, stock: Number }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Product", productSchema);
