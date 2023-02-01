const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({

    name:{
        type: String
    },
    
    price:{
        type: String
    },

    tags:{
        type: Array
    },

    imageUrl:{
        type: String
    },

    quantity:{
        type: String
    }

},{
    timestamps: true
});

module.exports = mongoose.model('itemsSchema',ItemSchema);