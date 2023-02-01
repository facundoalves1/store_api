const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});

const multerUploader = upload.single('image');

module.exports = {multerUploader};