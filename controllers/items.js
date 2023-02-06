const itemSchema = require('../models/items');
const {quantityCalulator} = require('../utils/itemsUtils');

const postItem = async(req,res)=>{
    
    const {size} = req.body;

    //Auto calculate the quantity of the items.
    req.body.quantity = quantityCalulator(size);

    try{
        
        const data = await itemSchema.create(req.body);
        res.status(201).send(data);

    }catch(e){

        console.log(e);
        res.status(400).send(e);

    }
    
};
    

const getItems = async(req,res)=>{

    const {category} = req.query;
    const {subcategory} = req.query;
    const {season} = req.query;
    const {size} = req.query;

    try{
        
        const data = await itemSchema.find({});
        console.log(`${category} ${subcategory} ${season} ${size}`);
        res.status(201).send(data);

    }catch(err){

        res.send({error:err, message: "todo roto amigo"});

    }
    
};


module.exports = {postItem,getItems};