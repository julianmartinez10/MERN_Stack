const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const port = 8000;
const app = express();


app.use(cors());
//  allows us to use json
app.use(express.json());
//  parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}))
//  let our application know we're going to use mongoose

// app.get("/api/hello", (req, res)=>{
//     res.json({message:"Hello MERN FULLSTACK"})
// })






require("./server/config/prodman.config")
require("./server/routes/prodman.routes")(app)


app.listen(port, ()=>console.log(`Listening on port ${port}`));