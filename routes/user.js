const express = require('express'); 
const router = express.Router(); 
const User = require('../models/customer')

router.get("/register", (req, res) =>{
    res.render("register.ejs", {layout: false})
})

router.post("/register", async (req, res) => {
    try {
        const result = await User.find({ email: req.body.inputemail })
        if(result.length > 0){
            res.redirect('/register?e=' + encodeURIComponent('User already exists'));
        }else{
            const result = await User.insertMany({email:req.body.inputemail, password:req.body.inputpassword,userid:req.body.inputuser,firstname:req.body.firstname,secondname:req.body.secondname,city:req.body.inputcity,state:req.body.inputstate,address:req.body.inputaddress,vip:false})
            res.redirect('/register?e=' + encodeURIComponent('Registration done'));
        }
    } catch (error) {

    }
})

/*
router.post("/login", function (req, res) {
    passport.use(new LocalStrategy(
          User.findOne({ email: req.body.email, password: req.body.password })))
});*/

module.exports = router