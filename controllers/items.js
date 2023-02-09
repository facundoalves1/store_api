const itemSchema = require('../models/items');

const postItem = async(req,res)=>{
       
    try{
        
        const data = await itemSchema.create(req.body);
        res.status(201).send(data);

    }catch(e){

        console.log(e);
        res.status(400).send(e);

    }
    
};
    

const getItems = async(req,res)=>{

    const {query} = req;

    try{
        
        const data = await itemSchema.find(query);
        console.log(query)
        res.status(200).send(data);

    }catch(err){

        res.status(400).send(err);

    }
    
};


module.exports = {postItem,getItems};