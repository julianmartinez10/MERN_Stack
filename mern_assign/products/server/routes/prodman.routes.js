const ProductController = require("../controllers/prodman.controller");

module.exports = app => {
    app.get("/api/products", ProductController.findAllProducts)
    app.post("/api/products/create", ProductController.createProduct)
    app.get("/api/products/:id", ProductController.findOneProduct)
    app.put("/api/products/update/:id", ProductController.updateProduct)
    app.delete("/api/products/delete/:id", ProductController.deleteProduct)
}