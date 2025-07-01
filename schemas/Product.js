const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        minlength: 2
    },
    price: {
        type: Number,
        required: true
    },
    categorie: {
        required: true,
        type: String,
        enum: ["alimentaire", "électronique", "vêtement", "ArmeLégendaire"]
    }
})

module.exports = mongoose.model("Product", ProductSchema)