const express = require('express')
const router = express.Router()
const Animals = require('../models/myanimals')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var ObjectId = require('mongodb').ObjectId;

router.post('/animalpost', async (req, res) =>{
    try{ 
        await Animals.insertMany({
            email: req.body.email,
            name: req.body.name,
            gender: req.body.gender,
            breed: req.body.breed,
            height: req.body.height,
            length: req.body.length,
            age: req.body.age,
        });
        res.redirect('/')
    }catch(error) { }
})

router.get('/animalget', async(req, res) =>{
    try {
        const list = await Animals.find({});
        res.send({ data: list })
    } catch (error) {
        console.log("Errore nella query")
    }
})

router.delete('/animaldelete', async(req, res) =>{
    try {
        let id = new ObjectId(req.body.animalid);
        await Animals.deleteOne({id_: id})
        res.redirect('/')
    } catch (error) {
        console.log("Errore nella query")
    }
})


module.exports = router