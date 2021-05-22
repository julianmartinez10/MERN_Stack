const mongoose = require('mongoose')
// const Double = require('@mongoosejs/double');

const ProductSchema = new mongoose.Schema({
    //  each key represents a field
    title:{
        type: String,
        required:[true, "Product Title is Required!"],
        minLength:[3, "Product Title must be at least 3 chars!"]
    },

    description:{
        type: String,
        required:[true, "Description Required for Products!"]
    },

    price:{
        type: String,
        required:[true, "Price Required for Products!"]
        // type: Schema.Types.Decimal128,

    }
}, {timestamps:true})


const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;