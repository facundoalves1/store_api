const express = require('express');
const router = express.Router();
const {multerUploaderMultiple, formatToBase64} = require('../middlewares/multerUploader');
const {cloudinaryConfig, cloudinaryUpload} = require('../middlewares/cloudinaryConfig');
const {postItem, getItems} = require('../controllers/items');
const {dataHandler} = require('../middlewares/dataHandler');

//Post item
router.post('/createItem',
    multerUploaderMultiple, //Obtain file with multer
    cloudinaryConfig,       //Cloudinary Connection confing
    formatToBase64,         //Format the file to base64
    cloudinaryUpload,       //Upload the base64 file to Cloudinary
    dataHandler,            //Convert "Size" property to JSON and autocalculate "quantity" property
    postItem);              //Perform database operation.

//Get all Items    
router.get('/getItems',getItems);

module.exports = router;