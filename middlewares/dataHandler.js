const {quantityCalulator} = require('../utils/itemsUtils');

const dataHandler = (req,res,next)=>{

    //Convert size field to JSON object
    req.body.size = JSON.parse(req.body.size);

    const {size} = req.body;

    //Autocalculate quatity field
    req.body.quantity = quantityCalulator(size);

    next();
    
};


module.exports = {dataHandler};