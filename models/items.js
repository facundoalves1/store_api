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
        type: Array
    },

    quantity:{
        type: String,
        required: true
    }

},{
    timestamps: true
});

module.exports = mongoose.model('itemsSchema',ItemSchema);