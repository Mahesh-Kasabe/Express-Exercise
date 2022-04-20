const router = require("express").Router();
const User = require("../models/User")


router.get("/register" ,async (req,res) => {
    const user = await new User({
        Username:"john",
        Password: "john,
        email: "john@abc.gmail.com" 
    })
    
    await user.save();
    res.send("OK")
})

module.exports = router
