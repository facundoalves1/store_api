const itemSchema = require('../models/items');

const postItem = async(req,res)=>{
    console.log(req.body.imageUrl);
    try{
        
        const data = await itemSchema.create(req.body);
        res.status(201).send(data);

    }catch(e){

        console.log(e);
        res.send({error:e,message:"Se rompió todo querido :c"})

    }
    
};
    

const getItem = async(req,res)=>{


    try{
        
        const data = await itemSchema.find({});
        res.status(201).send(data);

    }catch(err){

        res.send({error:err, message: "todo roto amigo"});

    }
    
};


module.exports = {postItem,getItem};