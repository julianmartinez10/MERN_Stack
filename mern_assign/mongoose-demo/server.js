const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());                            //  allows us to use json
app.use(express.urlencoded({extended: true}))       //  parses incoming requests with urlencoded payloads
//  let our application know we're going to use mongoose

// app.get("/api/hello", (req, res)=>{
//     res.json({message:"Hello Quotes API!!!"})
// })

//  REQUIRE OUR OTHER MODULARIZED FILES (routes and config)
require("./server/config/quotes.config")
require("./server/routes/quotes.routes")(app)   //  don't forget (app) which allows us to make requests

app.listen(port, ()=>console.log(`Listening on port ${port}`));
