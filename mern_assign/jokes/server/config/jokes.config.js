const mongoose = require("mongoose")
const db_name = "jokes_db"

mongoose.connect(`mongodb://localhost/${db_name}`,{
    useNewUrlParser: true,      //  used to get rid of deprecation msgs in terminal
    useUnifiedTopology: true,   //  used to get rid of deprecation msgs in terminal
})
    .then(()=>console.log('Established a connection to the database'))
    .catch(err =>console.log('Something went wrong when connecting to the db', err))