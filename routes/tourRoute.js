const express = require('express');
const tourController = require('../controllers/tourController');

const routes = express.Router();

// routes.param('id', tourController.checkID);

routes.route('/top-5-cheap').get(tourController.aliasTopTours, tourController.getAllTours)

routes
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.createTour);
routes
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = routes;