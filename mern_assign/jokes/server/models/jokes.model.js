const mongoose = require('mongoose')

const JokeSchema = new mongoose.Schema({
    //  each key represents a field
    setup:{
        type: String,
        required: [true, "Joke setup is Required!"],
        minLength: [10, "Joke setup must be at least 10 chars!"],
    },

    punchline:{
        type: String,
        required: [true, "Joke punchline is Required!"],
        minLength: [3, "Joke punchline needs to be at least 3 chars!"]
    },

}, {timestamps:true})   //  {timestamps:true} -> createdAt and updatedAt


//  registering schema
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;         //  will refer to model as Quote // exporting for other files to have access
