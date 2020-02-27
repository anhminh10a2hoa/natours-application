const express = require('express');
const tourController = require('../controllers/tourController');
const routes = express.Router();

routes.param('id', tourController.checkID);

routes
    .route('/')
    .get(tourController.getAllTours)
    .post(tourController.checkBody, tourController.createTour);
routes
    .route('/:id')
    .get(tourController.getTour)
    .patch(tourController.updateTour)
    .delete(tourController.deleteTour);

module.exports = routes;