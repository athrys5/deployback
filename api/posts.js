const express = require('express')
const router = express.Router()
const Desc = require('../models/description')
var ObjectId = require('mongodb').ObjectId;

router.get('/apipostsGet', async (req, res) =>{
    try{  
        const allDescriptions = await Desc.find({});
        res.send({data: allDescriptions});
    }catch(error){ }
})

router.post('/apipostsPost', async (req, res) =>{
    try{  
        let description;
        const current = new Date();
        const dt = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        if(req.body.useremail == "Anonymous"){
            description = await Desc.insertMany({testo:req.body.desc,email:req.body.useremail,date:dt,vip:false});
        } else {
            description = await Desc.insertMany({testo:req.body.desc,email:req.body.useremail,date: dt,vip: req.body.vipState });
        }
        res.send({success: true, data: description});
    }catch(error){}
})


router.delete('/apipostsDelete', async (req, res) =>{
    try{  
        let id = new ObjectId(req.body.descid);
        const deletedDescription = await Desc.deleteMany({_id:id});
        res.send({success: true, data: deletedDescription});
    }catch(error){ }
})


router.patch('/apipostsPatch', async (req, res) =>{
    try{  
        const updatedDesc = await Desc.updateMany({ email: JSON.parse(localStorage.getItem("auth")).email }, { $set: { vip: true } });
        res.send({success: true, data: updatedDesc});
    }catch(error){ }
})


module.exports = router