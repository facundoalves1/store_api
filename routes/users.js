const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    const respo = ["Users Route"];

    res.send({respo});

});

module.exports = router;