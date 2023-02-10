const dotenv = require('dotenv');
const cloudinary = require('cloudinary').v2;
const {getData} = require('../utils/cloudinaryUtils');

dotenv.config();

const cloudinaryConfig = (req,res,next)=>{

    const CLOUD_NAME = process.env.CLOUD_NAME;
    const API_KEY = process.env.API_KEY;
    const API_SECRET = process.env.API_SECRET;

    cloudinary.config({ 

        cloud_name: CLOUD_NAME, 
        api_key: API_KEY, 
        api_secret: API_SECRET,
        secure: true

      });

      next();

}

const cloudinaryUpload = async(req,res,next)=>{
   
  const {base64Format} = req.body

  req.body.imageUrl = [];

  //Upload each one of the images to cloudinary and populate the urlImage field
  async function populateImageUrl(){

    for(let i=0; i < base64Format.length; i++){
      req.body.imageUrl.push(await getData(base64Format[i]));
    }

  }

  await populateImageUrl();


 /*
 try{

  await cloudinary.uploader.upload(base64Format[0],{resource_type:'image'},(err,result)=>{

    if(!err){
  
      req.body.imageUrl = result.secure_url;
  
    }else{
  
      console.log(err);
  
    };
  
  });

 }catch(err){

  console.log(err);

 }
 */
  next();
 
};


module.exports = {cloudinaryConfig, cloudinaryUpload};