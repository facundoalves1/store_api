const express = require('express');
const router = express.Router();
const {multerUploaderMultiple, format} = require('../middlewares/multerUploader');
const {cloudinaryConfig, cloudinaryUpload} = require('../middlewares/cloudinaryConfig');
const {postItem, getItems} = require('../controllers/items');
const {dataHandler} = require('../middlewares/dataHandler');

//Post item
router.post('/',
    multerUploaderMultiple, //Obtain file with multer
    cloudinaryConfig,       //Cloudinary Connection confing
    format,                 //Format the file to base64
    cloudinaryUpload,       //Upload the base64 file to Cloudinary
    dataHandler,            //Convert "Size" property to JSON and autocalculate "quantity" property
    postItem);              //Perform database operation.

//Get all Items    
router.get('/',getItems);

module.exports = router;