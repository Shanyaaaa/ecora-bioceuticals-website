  import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModel.js';

// ADD PRODUCT
export const addProduct = async (req, res) => {
  try {
    const {
      name,
      price,
      description,
      category,
      subCategory,
      conditions,
      bestseller,
      sizes,
      additional,
      details,
    } = req.body;

    if (!name || !price || !category || !req.files) {
      return res.status(400).json({
        success: false,
        message: "Missing required product fields",
      });
    }

    // Upload images to Cloudinary
    const images = [
      req.files.image1?.[0],
      req.files.image2?.[0],
      req.files.image3?.[0],
      req.files.image4?.[0],
      req.files.image5?.[0],
    ].filter(Boolean);

    const imageUrls = await Promise.all(
      images.map((img) =>
        cloudinary.uploader.upload(img.path, { resource_type: 'image' })
      )
    );

    const newProduct = new productModel({
      name,
      price: Number(price),
      description,
      category,
      subCategory,
      conditions: Array.isArray(conditions)
        ? conditions
        : conditions
        ? conditions.split(',').map((c) => c.trim())
        : [],
      bestseller: bestseller === 'true',
      image: imageUrls,
      sizes: typeof sizes === 'string' ? JSON.parse(sizes) : sizes,
      additional: typeof additional === 'string' ? JSON.parse(additional) : additional,
      details: typeof details === 'string' ? JSON.parse(details) : details,
      date: Date.now(),
    });

    await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product added",
    });
  } catch (err) {
    console.error('Add product error:', err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// LIST PRODUCTS (public or admin)
export const listProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    return res.status(200).json({
      success: true,
      products,
    });
  } catch (err) {
    console.error('List products error:', err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// REMOVE PRODUCT
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Product ID missing",
      });
    }

    await productModel.findByIdAndDelete(id);
    return res.json({
      success: true,
      message: "Product removed successfully",
    });
  } catch (err) {
    console.error('Remove product error:', err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// SINGLE PRODUCT
export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params; // <-- Get ID from URL parameters

    if (!id) { // <-- Check for the new 'id' variable
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const product = await productModel.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.json({
      success: true,
      product,
    });
  } catch (err) {
    console.error('Single product error:', err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
