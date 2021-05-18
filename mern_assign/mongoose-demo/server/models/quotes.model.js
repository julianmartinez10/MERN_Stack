const mongoose = require('mongoose')

const QuoteSchema = new mongoose.Schema({
    //  each key represents a field
    content:{
        type: String,
        required: [true, "Content is Required!"],
        minLength: [3, "Quote content must be at least 3 chars!"],
        maxLength: [100000000, "Woah, we said quote, not a BOOK!"]
    },

    author:{
        type: String
    },

    quotedOn:{
        type: Date
    }
}, {timestamps:true})


//  have access to CRUD commands with Quote
const Quote = mongoose.model("Quote", QuoteSchema);

module.exports = Quote;         //  will refer to model as Quote // exporting for other files to have access
