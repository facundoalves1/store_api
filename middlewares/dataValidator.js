const {sizeValidators} = require('../utils/validatorsUtils');

const checkData = (req,res,next)=>{

    //Convert size field to JSON object
    req.body.size = JSON.parse(req.body.size);

    const {size} = req.body;

    //Check if we have all the size keys
    if(!sizeValidators(size)){
        res.status(400).send("Size key missing");
    }else{
        next();
    }

};


module.exports = {checkData};