import express from "express";

import * as productControllers from "../controllers/productControllers.js";

export const router = express.Router();

// GET all products
router.get("/all-products", productControllers.getAllProducts);

// POST new product
router.post("/new-product", productControllers.createProduct);

// GET product by ID
router.get("/product/:id", productControllers.getProductById);

// PUT update product
router.put("/product/:id", productControllers.updateProduct);

// DELETE product
router.delete("/product/:id", productControllers.deleteProduct);

// --- Default Route ---

export default router;
