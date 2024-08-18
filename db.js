require('dotenv').config();
const mongoose = require("mongoose");

const MongoDb_URL = process.env.MONGODB_URL;
// console.log(process.env.MONGODB_URL)

const MongodbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Database connected successfully!")
    })
};

module.exports = MongodbConnection;