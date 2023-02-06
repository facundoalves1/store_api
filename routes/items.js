const express = require('express');
const router = express.Router();
const {multerUploaderMultiple,multerUploaderSingle, format} = require('../middlewares/multerUploader');
const {cloudinaryConfig, cloudinaryUpload} = require('../middlewares/cloudinaryConfig');
const {postItem, getItems} = require('../controllers/items');
const {checkData} = require('../middlewares/dataValidator');

//Post item
router.post('/',
    multerUploaderMultiple,
    cloudinaryConfig,
    format,
    checkData,
    cloudinaryUpload,
    postItem);

//Get all Items    
router.get('/',getItems);

module.exports = router;