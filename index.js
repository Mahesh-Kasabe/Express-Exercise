const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const helmet = require("helmet")
const route = require("./routes/users")
const auth = require("./routes/auth")

dotenv.config()

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
})

app.use(express.json());
app.use(helmet())
app.use(morgan("common"))

app.use("/api/users", route);
app.use("/api/auth", auth)

app.listen(3000, () => {
    console.log("Connected")
})



