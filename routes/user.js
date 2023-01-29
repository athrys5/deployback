const express = require('express'); 
const router = express.Router(); 

router.get("/login", (req, res) =>{
    res.render("login.ejs", {layout: false})
})
/*
router.post("/login", function (req, res) {
    passport.use(new LocalStrategy(
          User.findOne({ email: req.body.email, password: req.body.password })))
});*/

module.exports = router