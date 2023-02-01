const express = require('express');
const router = express.Router()
const description = require('../models/description');
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var fs = require('fs')
router.get('/community', async (req, res) =>{
    try{  
        var isAdmin = false
        fs.readFile('./public/out/exist.json', 'utf8', function(err, data) {
            if (err) throw err;
            if(JSON.parse(data).key){
                isAdmin = true
            }else{
                isAdmin = false
            }
          });
        const list = await description.find({});
        res.render('community', { show: isAdmin })
    }catch{ }
})

router.post('/canceldesc', async(req, res) => {
    try{
        await description.deleteMany({testo: req.body.text})
        res.redirect('/community')
    }catch{
        res.render(404)
    }
})

router.post('/modifydesc', async(req, res) => {
    try{
        const filter = {testo: req.body.text}
        const options = { upsert: false };
        const updateDoc = {
            $set: {
                testo: req.body.modify, 
            },
        };
        await description.updateMany(filter, updateDoc, options)
        res.redirect('/community')
      }catch{
        res.redirect('/error')
        console.error()
      }
})

module.exports = router