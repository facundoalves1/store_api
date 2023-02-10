const itemSchema = require('../models/items');

const postItem = async(req,res)=>{
       
    try{
        
        const data = await itemSchema.create(req.body);
        res.status(201).send(data);

    }catch(e){

        res.status(400).send(e);

    }
    
};
    

const getItems = async(req,res)=>{

    const {query} = req;

    try{
        
        const data = await itemSchema.find(query);
        res.status(200).send(data);

    }catch(e){

        res.status(400).send(e);

    }
    
};

const updateItem = async(req,res)=>{};

const deleteItem = async(req,res)=>{};


module.exports = {postItem,getItems};