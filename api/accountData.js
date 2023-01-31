const express = require('express')
const router = express.Router()
const User = require('../models/customer')

router.get('/dataAccountGet', async (req, res) =>{
    try{  
        const list = await User.find({email: JSON.parse(localStorage.getItem("auth")).email});
        res.send({ data: list })
    }catch(error){ }
})

router.post('/dataAccountPatch', async(req, res) =>{
    try {
        const updatedAccount = await User.updateMany({ email: JSON.parse(localStorage.getItem("auth")).email }, { $set: { vip: true } });
        res.send({success: true, data: updatedAccount});
    } catch (error) {
    }
})

router.patch('/apichangepassword', async(req, res) =>{
    try {
        if (req.method !== 'PATCH') {
            return;
          }
        
          const userEmail = JSON.parse(localStorage.getItem("auth")).email;
          const oldPassword = req.body.oldPassword;
          const newPassword = req.body.newPassword;
          
          if(newPassword.trim().length<7){
            res.status(422).json({
              message:
                'Invalid input - password should also be at least 7 characters long.',
            });
            return;
          }

          const user = await User.find({ email: userEmail });
          if (!user[0]) {
            res.status(404).json({ message: 'User not found.' });
            //client.close();
            return;
          }
          
          const currentPassword = user[0].password;
          if (oldPassword != currentPassword) {
            res.status(403).json({ message: 'Invalid password.' });
            //client.close();
            return;
          }
        
          const result = await User.updateMany(
            { email: userEmail },
            { $set: { password: newPassword } }
          );
        
          //client.close();
          res.status(200).json({ message: 'Password updated!' });
    } catch (error) {
    }
})

module.exports = router