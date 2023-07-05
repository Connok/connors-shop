import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";


// @desc Auth USer & token
// @route GET /api/users/login
// @access Public 
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }

});

// @desc Regester User
// @route POST /api/users
// @access Public 
const regesterUser = asyncHandler(async (req, res) => {
    res.send('regester user');
});

// @desc Log Out / clear cookie
// @route Post /api/users/logout
// @access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('logout user');
});

// @desc Get USer Profile
// @route GET /api/users/profile
// @access private 
const getUserProfile = asyncHandler(async (req, res) => {
    res.send('user Profile');
});

// @desc Update USer Profile
// @route Put /api/users/profile
// @access Private 
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user Profile');
});

// @desc Get USers
// @route GET /api/users
// @access Private/Admin 
const getUsers = asyncHandler(async (req, res) => {
    res.send('get users');
});

// @desc Get USers by id
// @route GET /api/users/:id
// @access Private/Admin 
const getUserById = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

// @desc Delete USers
// @route DELETE /api/users/:id
// @access Private/Admin 
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete users');
});

// @desc Update USers
// @route Update /api/users/:id
// @access Private/Admin 
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
});

export {
    authUser,
    regesterUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserById,
    updateUser
}