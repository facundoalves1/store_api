const {itemSchema} = require('../models/items');
const {upload} = require('../middlewares/cloudinaryConfig');
const cloudinary = require('cloudinary').v2;

const postItem = (req,res)=>{

    //Here goes a multer middleware and upload to clodinary
    const encoded = req.file.buffer.toString('base64');
    const {mimetype} = req.file;
    const format ='data:' + mimetype + '\;base64,' +encoded;
    const {file} = req;
      
    cloudinary.uploader.upload(format,{resource_type: 'image'},(err,result)=>{

        if(!err){
            res.send({result});
        }else{
            res.send({error:err,message:"Error querido"});
            }
        });

    };
    

const getItem = (req,res)=>{

    const content = ['OK'];

    res.send({content});

}
module.exports = {postItem,getItem};