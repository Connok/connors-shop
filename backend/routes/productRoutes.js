import express from "express";
const router = express.Router();
//import products from '../data/products.js';
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getTopProducts,
} from "../controlers/productControler.js";
import { protect, admin } from '../middleware/authMiddleware.js';
import checkObjectID from '../middleware/checkObjectId.js';


router.route('/').get(getProducts).post(protect, admin, createProduct);
router.get('/top', getTopProducts);
router.route('/:id').get(checkObjectID, getProductById).put(protect, admin, checkObjectID, updateProduct).delete(protect, admin, checkObjectID, deleteProduct);
router.route('/:id/reviews').post(protect, checkObjectID, createProductReview);


export default router;