const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{

    const something = ['Items route'];

    res.send({something});

});

module.exports = router;