const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    name:{
        type: String
    },
    
    price:{
        type: Number
    },

    tags:{
        type: Array
    },

    imageUrl:{
        type: String
    },

    quantity:{
        type: Number
    }

},{
    timestamps: true
});

module.exports = mongoose.model('items',itemSchema);