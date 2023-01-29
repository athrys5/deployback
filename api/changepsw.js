const express = require('express')
const router = express.Router()
const User = require('../models/customer')

router.get('/changepsw', async (req, res) =>{
    try{  
        const list = await LeaderBoard.find({});
        res.send({ data: list })
    }catch{ }
})

module.exports = router