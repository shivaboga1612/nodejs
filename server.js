const express = require('express');
require("dotenv").config()
const { connectToDB }  = require('./dbconfig')
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')

var app = express();
const PORT = process.env.PORT || 3000;

//for connecting to Database
connectToDB();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use((req, res, next) => {

    res.setHeader('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
    res.header('Access-Control-Allow-Credentials', true);
    return next();
  });

app.use("/", userRoutes)

app.get("/", (req,res)=>{
    res.send('Welcome to Project')
})
app.listen(PORT, ()=>{
    console.log(`Server is runnig on ${PORT}`)
})




