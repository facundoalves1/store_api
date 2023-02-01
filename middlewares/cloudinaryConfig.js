const cloudinary = require('cloudinary').v2;
const upload = require('cloudinary').v2.uploader;
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

module.exports = {cloudinaryConfig,upload};