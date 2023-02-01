const itemSchema = require('../models/items');
const {upload} = require('../middlewares/cloudinaryConfig');
const cloudinary = require('cloudinary').v2;

const postItem = async(req,res)=>{

    //Here goes a multer middleware and upload to clodinary
    const encoded = req.file.buffer.toString('base64');
    const {mimetype} = req.file;
    const format ='data:' + mimetype + '\;base64,' +encoded;
    
    //Upload image to Cloudinary and obtain a response object with the URL of the file
    await cloudinary.uploader.upload(format,{resource_type: 'image'},(err,result)=>{

        if(!err){
            
            req.body.imageUrl = result.secure_url;

        }else{

            res.send({error:err,message:"Se rompio todo querido :c"});

            }
    });

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