const auth = require("express").Router();
const User = require("../models/User")
const bcrypt = require("bcrypt")

auth.post("/register" ,async (req,res) => {
    
    try{
        const salt = await bcrypt.genSalt(10);
        const hashpass = await bcrypt.hash(req.body.Password, salt);

        const user = await new User({
            Username: req.body.Username,
            Password: req.body.Password,
            email: req.body.email 
        })

        const newuser = await user.save();
        res.status(200).json(user);
    }catch(err){
        console.log("error")
    }
})

module.exports = auth