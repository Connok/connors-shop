import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc Creat new Orders
// @route POST /api/orders
// @access Private 
const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        shippingAdress,
        paymentMethod,
        itemPrice,
        taxPrice,
        shippinPrice,
        totalPrice,
    } = req.body
});

// @desc Get logged in user Orders
// @route GET /api/orders/myorders
// @access Private 
const getMyOrders = asyncHandler(async (req, res) => {
    res.send('get my orders');
});

// @desc get Order by id
// @route GET /api/orders/id
// @access Private 
const getOrderById = asyncHandler(async (req, res) => {
    res.send('get order by id');
});

// @desc Update order to paid
// @route GET /api/orders/:id/pay
// @access Private 
const updateOrderToPaid = asyncHandler(async (req, res) => {
    res.send('update to paid');
});

// @desc Update order to delivered
// @route GET /api/orders/:id/deliver
// @access Private/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
    res.send('update to delivered');
});

// @desc Get All Orders
// @route GET /api/orders
// @access Private/Admin
const getOrders = asyncHandler(async (req, res) => {
    res.send('Get all orders');
});

export {
    addOrderItems,
    getMyOrders,
    getOrderById,
    updateOrderToPaid,
    updateOrderToDelivered,
    getOrders
};