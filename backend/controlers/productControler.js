import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @desc Fetch all Products
// @route GET /api/products
// @access Public 
const getProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

// @desc Fetch a Products
// @route GET /api/products/:id
// @access Public 
const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
        return res.json(product);
    } else {
        res.status(404).json;
        throw new Error('Resource not Found');
    }
});

// @desc Create a Product
// @route POST /api/products
// @access Private/Admin 
const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
        name: 'sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'Sample Discription',
    })
    const createProduct = await product.save();
    res.status(201).json(createProduct);
});
// @desc Update Product
// @route Put /api/products/:9d
// @access Private/Admin 
const updateProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
});

export { getProducts, getProductById, createProduct };