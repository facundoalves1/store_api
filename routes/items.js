const express = require('express');
const router = express.Router();
const {multerUploaderMultiple,multerUploaderSingle, format} = require('../middlewares/multerUploader');
const {cloudinaryConfig, cloudinaryUpload} = require('../middlewares/cloudinaryConfig');
const {postItem, getItem} = require('../controllers/items');

router.post('/',
    multerUploaderMultiple,
    cloudinaryConfig,
    format,
    cloudinaryUpload,
    postItem);

router.get('/',getItem);

module.exports = router;