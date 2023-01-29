const express = require('express')
const router = express.Router()
const User = require('../models/customer')

router.get('/dataAccountGet', async (req, res) =>{
    try{  
        const list = await User.find({email: JSON.parse(localStorage.getItem("auth")).email});
        res.send({ data: list })
    }catch{ }
})

router.post('/dataAccountPatch', async(req, res) =>{
    try {
        const updatedAccount = await User.updateOne({ email: JSON.parse(localStorage.getItem("auth")).email }, { $set: { vip: true } });
        res.send({success: true, data: updatedAccount});
    } catch (error) {
        
    }
})

module.exports = router