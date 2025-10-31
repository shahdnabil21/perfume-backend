import Product from "../models/product.js";

export const getAllProducts = async (res, req) => {
  try {
    const products = await Product.find({});

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error retrieving products",
      error: error.message,
    });
  }
};

export const getProductById = async (id) => {
  try {
    const product = await Product.findOne({ id });
    return product;
  } catch (error) {
    throw new Error("Error retrieving product");
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = req.body;
    const existing = await Product.findOne({ name: data.name });

    if (existing) {
      return res
        .status(409)
        .json({ success: false, message: "Product already exists" });
    }

    data.price = Number(data.price);
    data.stock = Number(data.stock);

    await Product.create(data);
    res.status(201).json({ success: true, product: data });
  } catch (err) {
    console.error("❌ POST error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;

    if (data.price !== undefined) data.price = Number(data.price);
    if (data.stock !== undefined) data.stock = Number(data.stock);

    const result = await Product.updateOne({ _id: id }, { $set: data });

    if (result.matchedCount === 0) {
      return res
        .status(404)
        .json({ success: false, message: `Product ${id} not found` });
    }

    const updatedProduct = await Product.findOne({ _id: id });
    res.status(200).json({
      success: true,
      message: "Product updated",
      data: updatedProduct,
    });
  } catch (err) {
    console.error("❌ Update error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("🗑 Deleting product:", id);
    await Product.deleteOne({ _id: id });
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (err) {
    console.error("❌ DELETE error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};
