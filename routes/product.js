const express = require('express');
const router = express.Router()
const food = require('../models/food');
const accessory = require('../models/accessory');
const health = require('../models/health');
const bodyParser = require('body-parser');
const vip = require('../models/vip')
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var fs = require('fs')

router.get('/product', (req, res) =>{
  var isAdmin = false
  fs.readFile('./public/out/exist.json', 'utf8', function(err, data) {
      if (err) throw err;
      if(JSON.parse(data).key){
          isAdmin = true
      }else{
          isAdmin = false
      }
    });
    console.log(JSON.parse(data).key)
  res.render('product.ejs', {show: isAdmin})
})

router.post('/food', async (req, res) => { 
  try {
    await food.insertMany({nome: req.body.Name, prezzo: req.body.Price, slug:req.body.Slug, description: req.body.Description , categoria: req.body.Category })
    res.redirect('/product')   
  } catch { console.error() }
  })

router.post('/accessory', async (req, res) => { 
  try {
    await accessory.insertMany({nome: req.body.Name, prezzo: req.body.Price, description: req.body.Description , categoria: req.body.Category, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
  })

router.post('/health', async (req, res) => { 
  try {
    await health.insertMany({nome: req.body.Name, prezzo: req.body.Price, description: req.body.Description , categoria: req.body.Category, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
  })

router.post('/insvip', async (req, res) => { 
  try {
    await vip.insertMany({nome: req.body.Name + '(on Sale)', prezzo: req.body.Price, description: req.body.Description , prezzo_scontato: req.body.Sale, slug:req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
})


router.post('/deletefood', async (req, res) => {
  try{
    await food.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/deleteaccessory', async (req, res) => {
  try{
    await accessory.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/deletehealth', async (req, res) => {
  try{
    await health.deleteMany({slug: req.body.Slug})
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/deletevip', async (req, res) => { 
  try {
    await vip.deleteMany({slug: req.body.Slug})
    res.redirect('/product')   
  } catch { console.error() }
})

router.post('/modifyfood', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        nome: req.body.Name, 
        prezzo: req.body.Price, 
        description: req.body.Description, 
        categoria: req.body.Category
      },
    };
    const result = await food.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyaccessory', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        nome: req.body.Name, 
        prezzo: req.body.Price, 
        description: req.body.Description, 
        categoria: req.body.Category
      },
    };
    const result = await accessory.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyhealth', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        nome: req.body.Name, 
        prezzo: req.body.Price, 
        description: req.body.Description,
        categoria: req.body.Category
      },
    };
    const result = await health.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

router.post('/modifyvip', async (req, res) => {
  try{
    const filter = {slug: req.body.Slug}
    const options = { upsert: false };
    const updateDoc = {
      $set: {
        nome: req.body.Name + '(on Sale)', 
        prezzo: req.body.Price, 
        description: req.body.Description,
        prezzo_scontato: req.body.Sale
      },
    };
    const result = await vip.updateMany(filter, updateDoc, options)
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
    res.redirect('/product')
  }catch{
    console.error()
  }
})

module.exports = router