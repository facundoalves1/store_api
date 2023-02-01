const cloudinary = require('cloudinary').v2;
const upload = require('cloudinary').v2.uploader.upload;

const cloudinaryConfig = ()=>{

    const COUD_NAME = process.env.COUD_NAME;
    const API_KEY = process.env.API_KEY;
    const API_SECRET = process.env.API_SECRET;

    cloudinary.config({ 

        cloud_name: COUD_NAME, 
        api_key: API_KEY, 
        api_secret: API_SECRET,
        secure: true

      });

}

module.exports = {cloudinaryConfig,upload};