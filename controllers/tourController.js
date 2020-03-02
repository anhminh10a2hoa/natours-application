const fs = require('fs');
const Tour = require('./../models/tourModel');

exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
    if (req.params.id * 1 > tours.length) {
        return res.status(404).json({
            status: '404 Not found',
            message: 'Invalid ID'
        });
    }
    next();
}

exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
        return res.status(404).json({
            status: '404 Not found',
            message: 'Missing name or price'
        });
    }
    next();
}

exports.getAllTours = (req, res) => {
    res.status(200).json({
        status: 'success',
        // results: tours.length,
        // data: {
        //     tours: tours
        // }
    });
};

exports.getTour = (req, res) => {
    const id = req.params.id * 1;
    // const tour = tours.find(el => el.id === id);
    // res.status(200).json({
    //     status: 'success',
    //     data: {
    //         tour
    //     }
    // });
};

exports.createTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        // results: tours.length,
        // data: {
        //     tours: tours
        // }
    });
};

exports.updateTour = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            tour: '<Update tour here...'
        }
    });
};

exports.deleteTour = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
};