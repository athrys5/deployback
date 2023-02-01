const express = require('express')
const router = express.Router()
const path = require('path')


router.get('/Leaderboard', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Leaderboard.html'));
})

router.get('/Food', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Food.html'));
})

router.get('/Forum', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Forum.html'));
})

router.get('/Health', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Health.html'));
})

router.get('/profile', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'profile.html'));
})

router.get('/Sales', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Sales.html'));
})

router.get('/Cart', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Cart.html'));
})

router.get('/Services', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Services.html'));
})

router.get('/Accessory', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/', 'Accessory.html'));
})

router.get('/DynamicServices/DogSitter', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/DynamicServices', 'DogSitter.html'));
})

router.get('/DynamicServices/Veterinarian', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public/out/DynamicServices', 'Veterinarian.html'));    
})

router.get('/ProductSales/:id', (req, res) => {
    res.redirect('/Sales')
})

router.get('/Sites/:id', (req, res) => {
    res.redirect('/Services')
})

router.get('/products/productAccess/:id', (req, res) => {
    res.redirect('/Accessory')
})

router.get('/products/productHealth/:id', (req, res) => {
    res.redirect('/Health')
})

router.get('/products/productFood/:id', (req, res) => {
    res.redirect('/Food')
})




module.exports = router