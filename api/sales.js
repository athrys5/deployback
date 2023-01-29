const express = require('express')
const router = express.Router()
const Vip = require('../models/vip')

router.get('/apisales', async (req, res) =>{
    try{  
        const allSales = await Vip.find({});
        res.send({data: allSales});
    }catch(error){ }
})

module.exports = router