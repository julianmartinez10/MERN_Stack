const QuoteConroller = require("../controllers/quotes.controller");

module.exports = app => {
    app.get("/api/quotes", QuoteConroller.findAllQuotes)
    app.post("/api/quotes/create", QuoteConroller.createQuote)
    app.get("/api/quotes/:id", QuoteConroller.findOneQuote)
    app.put("/api/quotes/update/:id", QuoteConroller.updateOneQuote)
    app.delete("/api/quotes/delete/:id", QuoteConroller.deleteQuote)
}

// module.exports = app => {
//     app.get('/api/users', UserController.findAllUsers);
//     app.get('/api/users/:id', UserController.findOneSingleUser);
//     app.put('/api/users/:id', UserController.updateExistingUser);
//     app.post('/api/users', UserController.createNewUser);
//     app.delete('/api/users/:id', UserController.deleteAnExistingUser);
// }