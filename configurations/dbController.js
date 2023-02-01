const mongoose = require('mongoose');

const dbConnection = ()=>{

    const DB_URI = process.env.DB_URI;

    mongoose.connect(

        DB_URI,{

            useNewUrlParser : true,
            useUnifiedTopology : true

        },
        (err,res)=>{

            if(err){
                console.log('Connection Error' + ' ' + err);
            }else{
                console.log('Connection Success');
            }

        }
    )
    
};

module.exports = dbConnection;