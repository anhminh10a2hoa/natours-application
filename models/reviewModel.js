// review /rating /createAt / ref to tour / ref to user
const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
    review: {
        type: String,
        required: [true, 'Review can not be empty'],
    },
    rating: {
        type: Number,
        default: 4.5,
        min: [1, 'Rating must be above 1'],
        max: [5, 'Rating must be below 5']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    tour: {
        type: mongoose.Schema.ObjectId,
        ref: 'Tour',
        required: [true, 'Review must belong to a tour']
    },
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required: [true, 'Review must belong to a user']
    }
},
{
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    }
});

const Review = mongoose.model('Review', reviewModel);

module.exports = Review;