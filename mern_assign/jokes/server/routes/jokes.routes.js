const JokeController = require("../controllers/jokes.controller");

//  app will be called in server.js
//  Is it fair to say that module.exports is MODULarizing our functions?
module.exports=app=>{

    //  GET allJokes
    app.get("/api/jokes", JokeController.findAllJokes)
    //  POST create newJoke
    app.post("/api/jokes/create", JokeController.createJoke)
    //  GET oneJoke
    app.get("/api/jokes/:id", JokeController.findJoke)
    //  PUT updateJoke
    app.put("/api/jokes/update/:id", JokeController.updateJoke)
    //  DELETE oneJoke
    app.delete("/api/jokes/delete/:id", JokeController.deleteJoke)

}