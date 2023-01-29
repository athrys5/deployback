const express = require('express')
const router = express.Router()
const LeaderBoard = require('../models/leaderboard')

router.get('/apiboard', async (req, res) =>{
    try{  
        const list = await LeaderBoard.find({});
        res.send({ data: list })
    }catch{ }
})

module.exports = router