const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());                            //  allows us to use json
app.use(express.urlencoded({extended: true}))       //  parses incoming requests with urlencoded payloads

// app.get("/api/hello", (req, res)=>{
//     res.json({message:"Hello Jokes API!!!"})
// })




// //  REQUIRE OUR OTHER MODULARIZED FILES (routes and config)
require("./server/config/jokes.config")
require("./server/routes/jokes.routes")(app)
// //  don't forget the (app) at end -> allows us to make requests

//  Could you potentially use your server for multiple projects without having to create multiple servers?




app.listen(port, ()=>console.log(`Listening on port ${port}`));