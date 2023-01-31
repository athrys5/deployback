const express = require('express')
const router = express.Router()
const LeaderBoard = require('../models/leaderboard')
const User = require('../models/customer')

router.get('/apiboard', async (req, res) =>{
    try{  
        const list = await LeaderBoard.find({});
        res.send({ data: list })
    }catch{ }
})

router.post('/apisendLead', async (req, res) =>{
    try {
        console.log("sono dentro")
        const query = await User
        .find({
            email: req.body.email,
            password: req.body.pw
        });
        console.log(query.length)
        if(query.length > 0) {
            const result = await LeaderBoard.insertMany({
                email: req.body.email,
                name: req.body.name,
                location: req.body.location,
                score: req.body.score,
                dt: req.body.dt ,
            })
            console.log(result)
        } 
        res.send({ success: true });
    } catch(error) { }
})

module.exports = router