const express = require("express")
const sequelize = require("sequelize")
const app = express()

require('dotenv').config()


app.use(express.json());

const PORT = process.env.PORT || 5000;

//routes
const user = require("./src/routes/user/user");


app.use("/api/user", user);

app.listen(PORT, ()=>{
    console.log(`Server started on PORT: ${PORT}` )
})