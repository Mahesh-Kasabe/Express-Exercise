const router = require("express").Router();
const User = require("../models/User")


router.get("/register" ,async (req,res) => {
    const user = await new User({
        Username:"john",
        Password: "@mahesh62",
        email: "mahi@gmail.com" 
    })
    
    await user.save();
    res.send("OK")
})

module.exports = router