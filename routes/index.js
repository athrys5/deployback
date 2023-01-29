/*const express = require('express')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const router = express.Router()
const bodyParser = require('body-parser'); // parser middleware
const initializePassport = require('./../passport-config')
const Post = require('../models/Post');

router.use(session({
    secret: 'ciao',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
  }));
  
// Configure Middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(passport.initialize());
router.use(passport.session());

passport.use(Post.createStrategy());

// To use with sessions
passport.serializeUser(Post.serializeUser());
passport.deserializeUser(Post.deserializeUser());



router.get('/login', (req, res) => {
    res.render('login.ejs', {layout: false})
})

module.exports = router*/