const express = require('express')
const router = express.Router()
const Users = require('../models/customer')
const bodyParser = require('body-parser');
router.use(bodyParser.json()); // for parsing application/json
router.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
var fs = require('fs')


router.get('/customers', async (req, res) =>{
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
        const list = await Users.find({})
        res.render('customers.ejs', { data: list, show: isAdmin })
    }catch{ }
})

router.post('/deleteuser', async (req,res) =>{
    try {
        await Users.deleteMany({ email: req.body.text})
        res.redirect('/customers')
    } catch  { }
})

router.post('/modifyuser', async(req, res) => {
    try{
        const filter = {email: req.body.email}
        console.log(filter)
        const options = { upsert: false };
        const updateDoc = {
            $set: {
                email: req.body.email,
                password: req.body.password,
                userid: req.body.userid,
                firstname: req.body.firstname,
                secondname: req.body.secondname,
                city: req.body.city,
                state: req.body.state,
                address: req.body.address,
                vip: req.body.vip
            },
        };
        console.log(updateDoc)
        await Users.updateMany(filter, updateDoc, options)
        res.redirect('/customers')
      }catch{
        res.redirect('/error')
        console.error()
      }
})


module.exports = router