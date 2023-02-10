const cloudinary = require('cloudinary').v2;

/**
 * Should receive a file in base64 string format to upload to cloudinary
 * @param {*} base64 
 * @returns 
 */
const getData = async(base64)=>{

    let data;
  
    try{
  
        await cloudinary.uploader.upload(base64,{resource_type:'image'},(err,result)=>{
  
            if(!err){
            data = result.secure_url;
            }
            else{

            console.log(err + 'CLOUDINARY_UPLOAD_ERROR');

            }
    
        });
  
    }catch(err){
  
      console.log(err + "CLOUDINARY_UPLOAD_ERROR");
  
    }
  
    return data;

};

module.exports = {getData};