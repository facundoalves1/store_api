const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    
    price:{
        type: String,
        required: true
    },

    tags:{
        type: Array
    },

    imageUrl:{
        type: Array,
        required: true
    },

    quantity:{
        type: String,
        required: true
    },

    category:{
        type: String,
    },

    subcategory:{
        type: String
    },

    season:{
        type: String,
        required: true
    },

    cost:{
        type: String,
        required: true
    },

    size:{
        type: Object,
        required: true
    }

},{
    timestamps: true
});

module.exports = mongoose.model('itemsSchema',ItemSchema);