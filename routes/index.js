const express = require('express')
const router = express.Router()

router.get('/backoffice', (req, res) => {
    res.render('index.ejs')
})

module.exports = router