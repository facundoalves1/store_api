//this is a commet to check the github connection
const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const dbConnection = require('./dbcontroller/db');

app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

app.get('/home',(req,res)=>{

    res.send('Home page');

});

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(`Server listening on port ${PORT}`);
    
});

dbConnection();