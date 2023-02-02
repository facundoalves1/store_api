const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');

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
  /*
  const getData = async()=>{

    let url = [];
    const {base64Format} = req.body;

    base64Format.forEach(element => {
      cloudinary.uploader.upload(element,{resource_type:'image'},(err,result)=>{
        if(!err){
          url.push(result.secure_url);
        }else{
          console.log(err);
        };
      });
    });
    return url;
  }; 

  req.body.imageUrl = await getData();
  await next();
  */
 const {base64Format} = req.body

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

 next();
 
};


module.exports = {cloudinaryConfig, cloudinaryUpload};