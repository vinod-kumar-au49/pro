const mongoose = require("mongoose");
const { Schema } = require('mongoose');

const cakeSchema = new Schema({

    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    manufactor_Date: {
        type: String,

        required: true
    },
    description: {
        type: String,
        required: true
    }

});


const CakeModel = mongoose.model('cakes', cakeSchema);
module.exports = CakeModel