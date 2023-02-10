const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

/**
 * Should receive user object to sing the token
 * @param {*} user 
 */
const tokenSign = async(user)=>{

    const sing = jwt.sign({

        _id: user._id,
        role: user.role

    },
    
        JWT_SECRET,

    {

        expiresIn: "8h"

    });

    return sing;

};

/**
 * Should receive the token of the user
 * @param {*} token 
 * @returns 
 */
const tokenVerify = (token)=>{

    try{

        return jwt.verify(token,JWT_SECRET);

    }
    catch(e){

        return null;

    }

};

module.exports = {tokenSign,tokenVerify};