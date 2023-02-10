const userSchema = require('../models/users');
const {encryptPass,comparePass} = require('../utils/userUtils');
const {tokenSign} = require('../utils/jasonWebTokenUtils');

const createUser = async(req,res)=>{

    const {body} = req;
      
    try{

        const password = await encryptPass(req.body.password);
        const newBody = {...body, password};
        const userData = await userSchema.create(newBody);

        //Hide the password property in the response
        userData.set("password",undefined,{strict: false});

        const data = {
            token: await tokenSign(userData),
            user : userData
        };

        res.status(201).send(data);

    }catch(e){
        console.log(e)
        res.status(400).send({error:e, message: "ERROR_REGISTER_USER"});

    }
    

};

const loginUser = async(req,res)=>{

    const {body} = req;

    try{

        const userData = await userSchema.findOne({email: body.email});

        if(!userData){
            res.status(404).send({error: "USER_NOT_FOUND"});
        }

        const hashPass = userData.get("password");

        const checkPass = await comparePass(body.password, hashPass);

        if(!checkPass){
            res.status(401).send({error: "INVALID_PASSWORD"});
        }

        userData.set("password", undefined,{strinct:false});

        const data = {
            token : await tokenSign(userData),
            user : userData
        }

        res.status(200).send(data);

    }catch(e){

        console.log(e);

    }

};

module.exports = {createUser,loginUser};