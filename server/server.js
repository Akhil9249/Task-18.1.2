const express = require("express")
const app = express()
const cors = require("cors")
const connectDb = require("./config/db");
const Movie = require("./models/movieModel");

connectDb()

app.use(cors())



app.get("/", async(req,res)=>{

    const getData = await Movie.find()
    if(!getData){
        return res.json({
            message:"This colloction not exist"
        })
    }

    res.json(getData)
})

app.listen(5000,()=> console.log("server started 5000"))