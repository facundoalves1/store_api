const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const dbConnection = require('./configurations/dbController');
const cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(bodyParser.json());
dotenv.config();

//Connection to MongoDb
dbConnection();


app.use('/api',require('./routes'));



const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{

    console.log(`Server listening on port ${PORT}`);
    
});


