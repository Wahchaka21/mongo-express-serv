//marque num proprio

const mongoose = require("mongoose")

const MaillotSchema = new mongoose.Schema({
    marque: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    proprio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Player"
    }
})

module.exports = mongoose.model("Maillot", MaillotSchema)