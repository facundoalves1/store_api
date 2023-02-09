const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true
    },
    
    role:{
        type: ["user","admin"],
        default: "user"
    }

},{
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('userSchema',UserSchema);