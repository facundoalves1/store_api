const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({storage});


const multerUploaderSingle = upload.single('image');

//Array of images
const multerUploaderMultiple = upload.array('images');

//Format base64 string to upload to Cloudinary
const format = (req,res,next)=>{

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

        res.send("There is no file, error in multerUploader file");

    }
    
    next();

};

module.exports = {multerUploaderMultiple,multerUploaderSingle,format};