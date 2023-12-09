import express from "express";
const router = express.Router();
//import products from '../data/products.js';
import {
    authUser,
    regesterUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
} from "../controlers/userControler.js";
import { protect, admin } from '../middleware/authMiddleware.js';


router.route('/').post(regesterUser).get(protect, admin, getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser);

export default router;