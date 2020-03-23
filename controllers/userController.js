const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFileds) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if(allowedFileds.includes(el)) newObj[el] = obj[el];
    })
    return newObj;
}

exports.getAllUsers = catchAsync(async (req, res) => {
    const users = await User.find();
    res.status(200).json({
        status: 'success',
        results: users.length,
        data: {
            users
        }
    });
});

exports.updateMe = catchAsync(async(req, res, next) => {
    // 1) Create error if user POST password data
    if(req.body.password || req.body.passwordConfirm){
        return next(new AppError('This route is not for password updates. Please use /updateMyPassword.', 400))
    }
    // 2) Filter out unwanted fields names
    const filteredBody = filterObj(req.body, 'name', 'email');
    // 3) Update user document
    const updateUser = await User.findByIdAndUpdate(req.user.id, filteredBody, { 
        new: true,
        runValidators: true
    });
    res.status(200).json({
        status: 'success',
        data: {
            user: updateUser
        }
    });
});

exports.deleteMe = catchAsync(async(req, res, next) => {
    await User.findByIdAndUpdate(req.user.id, {active: false})

    res.status(204).json({
        status: 'success',
        data: null
    });
});

exports.getUser = (req, res) => {
    res.status(500).json({
        status: '500 Internal Server Error',
        message: 'Can not find user'
    });
};

exports.createUser = (req, res) => {
    res.status(500).json({
        status: '500 Internal Server Error',
        message: 'Can not find user'
    });
};

exports.updateUser = (req, res) => {
    res.status(500).json({
        status: '500 Internal Server Error',
        message: 'Can not find user'
    });
};

exports.deleteUser = (req, res) => {
    res.status(500).json({
        status: '500 Internal Server Error',
        message: 'Can not find user'
    });
};