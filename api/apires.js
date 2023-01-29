const express = require('express')
const router = express.Router()
const Site = require('../models/services')

router.get('/apimyres', async (req, res) =>{
    try{  
        const list = await Site.find({});
        res.send({ data: list })
    }catch{ }
})

module.exports = router