const express = require('express')
const router = express.Router()
const Order = require('../models/order')

router.post('/apiordersPost', async (req, res) =>{
    try{ 
        const current = new Date();
        const dt = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        const description = await Order.insertMany({order: req.body.order, email: req.body.email, price: req.body.price, date: dt});
        res.send({success: true, data: description});
    }catch(error){ 
        console.log("failed query")
    }
})

router.get('/apiorders', async (req, res) =>{
    try{ 
        const allOrders = await Order.find({email: JSON.parse(localStorage.getItem("auth")).email});
        res.send({data: allOrders});
    }catch(error){ 
        console.log("failed query")
    }
})


module.exports = router