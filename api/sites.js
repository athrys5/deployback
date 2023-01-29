const express = require('express');
const router = express.Router()
const Site = require('../models/services')

router.get('/apisitesGet', async (req, res) =>{
    try{  
        const allSites = await Site.find({});
        res.send({data: allSites });
    }catch(error){ }
})

router.post('/apisitesPost', async (req, res) =>{
    try{  
        let reservation;
        if(req.body.type == 'dog') {
            reservation = await Site.updateMany({name:req.body.name},{$push:{[`resDog.${req.body.sitenumber}`]:{"date":req.body.date,"id": JSON.parse(localStorage.getItem("auth")).email}}});
        } else if (req.body.type == 'vet') {
            reservation = await Site.updateMany({name:req.body.name},{$push:{[`resVet.${req.body.sitenumber}`]:{"date":req.body.date,"id": JSON.parse(localStorage.getItem("auth")).email}}});
        }
        res.send({success: true, data: reservation});
    }catch(error){ }
})


module.exports = router