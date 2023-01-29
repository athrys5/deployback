const express = require('express')
const router = express.Router()
const Animal = require('../models/myanimals')
const Cibo = require('../models/food')
const Accessori = require('../models/accessory')
const ProdSanitari = require('../models/health')

router.get('/animalForAds',  async (req, res) => {
    if(JSON.parse(localStorage.getItem("auth")) !== null){
        const allAnimals = await Animal.find({email: JSON.parse(localStorage.getItem("auth")).email});
        const types = [];
        if(allAnimals.length > 0){
            allAnimals.map(an=>{
                types.push(an.breed);
            })
            const rf = Math.floor(Math.random() * types.length);
            const ra = Math.floor(Math.random() * types.length);
            const rp = Math.floor(Math.random() * types.length);
            const recFood = await Cibo.find({categoria:types[rf].toLowerCase()});
            const recAcc = await Accessori.find({categoria: types[ra].toLowerCase()});
            const recProdSan = await ProdSanitari.find({categoria: types[rp].toLowerCase()});
            const AllRec = recFood.concat(recAcc).concat(recProdSan);
            const size = [];
            for (var i in recFood ) {
                size.push('food');
            }for (var i in recAcc ) {
                size.push('acc');
            }
            for (var i in recProdSan ) {
                size.push('san');
            }
            res.send({data: AllRec, info: size});
        } else {
            const Arr = [];
            res.send({data: Arr})
        }
    }
})

module.exports = router