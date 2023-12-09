import express from "express";
const router = express.Router();
//import products from '../data/products.js';
import {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
} from "../controlers/orderControler.js";
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').post(protect, addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect, admin, getOrderById);
router.route('/:id/pay').put(protect, updateOrderToPaid);
router.route('/:id/delivered').put(protect, admin, updateOrderToDelivered);


export default router;