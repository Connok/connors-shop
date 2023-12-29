import express from "express";
const router = express.Router();
//import products from '../data/products.js';
import { getProducts, getProductById, createProduct } from "../controlers/productControler.js";
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id').get(getProductById);


export default router;