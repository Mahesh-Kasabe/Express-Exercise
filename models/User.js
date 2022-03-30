const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: true,
        min: 6,
        max: 32
    },
    Password: {
        type: String,
        required: true,
        min: 6,
        max: 32

    },
    email:{
        type: String,
        required: true,
        min: 6,
        max: 32
    },
    profilepic: {
        type: String,
        default: ""
    },
    cover: {
        type: String,
        default: ""
    },
    followers: {
        type: Array,
        default: ""
    },
    following:{
        type: Array,
        default: ""
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},
{timestamps:true})

module.exports = mongoose.model("Users", UserSchema);