const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const orderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cakeName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    region:
    {
        type: String,
        required: true
    },
    postalZipcode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
});


const OrderModel = mongoose.model('orders', orderSchema)
module.exports = OrderModel