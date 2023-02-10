const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});


const multerUploaderSingle = upload.single('image');

//Array of images
const multerUploaderMultiple = upload.array('images');

//Format base64 string to upload to Cloudinary
const formatToBase64 = (req,res,next)=>{

    const {files} = req;
    let arrOfFiles = [];

    if(files){

        files.forEach(element => {

            const encoded = element.buffer.toString('base64');
            const {mimetype} = element;
            
            arrOfFiles.push(`data:${mimetype}\;base64,${encoded}`);

        });

    req.body.base64Format =  arrOfFiles;
    

    }else{

        res.status(400).send("MULTER_FILE_MISSING");

    }
    
    next();

};

module.exports = {multerUploaderMultiple,multerUploaderSingle,formatToBase64};