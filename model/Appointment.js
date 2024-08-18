const mongoose = require("mongoose");
const { Schema } = mongoose;

const Bookmodel = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    time: {
        type: String,
    }
})

module.exports = mongoose.model("Bookmodel", Bookmodel);