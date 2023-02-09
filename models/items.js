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

    cost:{
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

    quantity:{
        type: Number,
        required: true
    },

    size:{
        type: Object,
        required: true,
        validate:{
            validator: (req)=>{
                
                const expectedKeys = ["XXL","XL","L","M","S","XS","36","38","40","42","44","46"];

                const hasExpectedKeys = expectedKeys.every(element=> element in req);

                return (hasExpectedKeys) ? true : false;
            },
            message: "SIZE_KEY_MISSING"
        }
    },

    tags:{
        type: Array
    },

    imageUrl:{
        type: Array,
        required: true
    },

},{
    timestamps: true
});

module.exports = mongoose.model('itemSchema',ItemSchema);