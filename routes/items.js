const express = require('express');
const router = express.Router();
const {multerUploader, dataUri} = require('../middlewares/multerUploader');
const {cloudinaryConfig} = require('../middlewares/cloudinaryConfig');
const {postItem, getItem} = require('../controllers/items');

router.post('/',multerUploader,cloudinaryConfig,postItem);

router.get('/',getItem);

module.exports = router;