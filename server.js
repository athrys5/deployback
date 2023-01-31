const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const InitiateMongoServer = require("./config/db")
const passport = require('passport')
const session = require('express-session')
const User = require("./models/customer");
const path = require('path')
const fs = require('fs');
const exists = './public/out/auth';
const cors = require('cors')
if (typeof localStorage === "undefined" || localStorage === null) {
    var LocalStorage = require('node-localstorage').LocalStorage;
    localStorage = new LocalStorage('./public/out');
}
//routers
const loginRouter = require('./routes/user')
const pagesRouter = require('./routes/pages')
const prodRouter = require('./routes/product')
const descRouter = require('./routes/desc')
const customerRouter = require('./routes/customers')
const animalsRouter = require('./routes/myanimals')
    //const leaderboardRouter = require('./routes/leaderboard')
const servicesRouter = require('./routes/services')
const bookRouter = require('./routes/book')

//apis
const boardApi = require('./api/board')
const animalApi = require('./api/animal')
const adsApi = require('./api/animalads')
const accApi = require('./api/accountData')
const resApi = require('./api/apires')
const orderApi = require('./api/order')
const postsApi = require('./api/posts')
const salesApi = require('./api/sales')
const sitesApi = require('./api/sites')
const prodApi = require('./api/product')
//session
InitiateMongoServer()

app.use(session({
    secret: 'ciao',
    proxy: true,
    resave: true,
    saveUninitialized: true,
}));

 passport.serializeUser(function(user, done) {
    done(null, user);
 });
 passport.deserializeUser(function(user, done) {
    User.findOne(user, function (err, user) {
       done(err, user);
    });
 });


app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);


//dependencies
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use('/moment', express.static(path.join(__dirname, 'node_modules/moment/min/')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap4-datetimepicker/build/css/')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap4-datetimepicker/build/js/')));
app.use('/fa', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/css')));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts')));
app.use(express.static('public')); // js & css
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')

app.use(expressLayouts) //library for common layout

app.use('/', prodRouter)
app.use('/', pagesRouter)
app.use('/', loginRouter)
app.use('/', descRouter)
app.use('/', customerRouter)
app.use('/', animalsRouter)
//app.use('/', leaderboardRouter)
app.use('/', servicesRouter)
app.use('/', bookRouter)
app.use('/', boardApi)
app.use('/', animalApi)
app.use('/', adsApi)
app.use('/', accApi)
app.use('/', resApi)
app.use('/', orderApi)
app.use('/', postsApi)
app.use('/', salesApi)
app.use('/', sitesApi)
app.use('/', prodApi)

app.use('/', express.static(__dirname + '/public/out'))
app.use('/game', express.static(__dirname + '/public/dist'))

app.get('/game', (req, res) => {
    res.sendFile(__dirname + '/public/dist/index.html')
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/out/index.html')
})

app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
    if (!fs.existsSync(exists)) {
      const jsonflag = `{"key": true, "user": {"vip": ${req.user.vip}, "email": "${req.user.email}"}}`
      fs.writeFile(__dirname + '/public/out/exist.json', jsonflag, function writeJSON(err) {
        if (err) return console.log(err);
        console.log(jsonflag);
      });
    }
    localStorage.setItem("auth", JSON.stringify(req.user))
  });

  app.get("/login", (req, res) =>{
    if(req.user !== undefined){
      res.render("login.ejs", {layout: false, isLog:req.user.email})
    } else {
      res.render("login.ejs", {layout: false, isLog:null})
    }
  })

app.post('/logout', function(req, res, next){
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/login');
    if (fs.existsSync(exists)) {
      const jsonflag = '{"key": false}'
      fs.writeFile(__dirname +  '/public/out/exist.json', jsonflag, function writeJSON(err) {
        if (err) return console.log(err);
        console.log(jsonflag);
      });
    }
    localStorage.removeItem("auth")
  });
});

/*app.get('/login', (req, res) => {
    res.render('login.ejs', {layout: false})
})

app.get('/*', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.sendFile(__dirname + '/public/out/index.html')
})

app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),  async function(req, res) {
	console.log(req.user)
	res.redirect('/');
});*/


app.use(cors)
app.listen(3000)