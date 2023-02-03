const cloudinary = require('cloudinary').v2;

const getData = async(base64)=>{

    let data;
  
    try{
  
        await cloudinary.uploader.upload(base64,{resource_type:'image'},(err,result)=>{
  
            if(!err){
            data = result.secure_url;
            }else{
            console.log(err + ' Cloudinary (Inside)');
            }
    
        });
  
    }catch(err){
  
      console.log(err + " Cloudinary");
  
    }
  
    if(data){
      return data;
    }else{
      console.log("No data");
    }
  
};

module.exports = {getData};