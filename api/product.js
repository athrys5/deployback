const express = require('express')
const router = express.Router()
const Cibo = require('../models/food')
const Health = require('../models/health')
const Accessory = require('../models/accessory')
const Vip = require('../models/vip')
const path = require('path')
router.get('/apifoodprod', async (req, res) =>{
    try{  
        const list = await Cibo.find({});
        res.send({ data: list })
    }catch(error){}
})

router.get('/apihealthprod', async (req, res) =>{
    try{  
        const list = await Health.find({});
        res.send({ data: list })
    }catch(error){}
})

router.get('/apiaccessoryprod', async (req, res) =>{
    try{  
        const list = await Accessory.find({});
        res.send({ data: list })
    }catch(error){}
})

router.get('/catfood', async (req, res) =>{
    try{  
        const list = await Cibo.find({categoria:"cat"}).limit(10);
        res.send({ data: list })
    }catch(error){}
})

router.get('/dogfood', async (req, res) =>{
    try{  
        const list = await Cibo.find({categoria:"dog"}).limit(10);
        res.send({ data: list })
    }catch(error){}
})

router.get('/fishacc', async (req, res) =>{
    try{  
        const list = await Accessory.find({categoria:"fish"}).limit(10);
        res.send({ data: list })
    }catch(error){}
})

router.get('/accessoryPaths', async (req, res) =>{
    try {
        const list = await Accessory.find({}).limit(10);
        res.send({ data: list })
    } catch (error) {
        
    }
})

router.post('/apiaccessoriSlug', async (req, res) =>{
    try {
        const allAcc = await Accessory.find({slug: req.body.path});
        res.send({data: allAcc});
    } catch (error) {
        
    }
})

router.post('/apifoodSlug', async (req, res) =>{
    try {
        const allAcc = await Cibo.find({slug: req.body.path});
        res.send({data: allAcc});
    } catch (error) {
        
    }
})

router.post('/apisanSlug', async (req, res) =>{
    try {
        const allAcc = await Health.find({slug: req.body.path});
        res.send({data: allAcc});
    } catch (error) {
        
    }
})

router.post('/apisalSlug', async (req, res) =>{
    try {
        const allAcc = await Vip.find({slug: req.body.path});
        res.send({data: allAcc});
    } catch (error) {
        
    }
})






module.exports = router