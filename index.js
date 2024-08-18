require('dotenv').config();
const express = require("express");
const cors = require("cors")
const MongodbConnection = require("./db")

const app = express();
app.use(cors());
app.use(express.json());
const port = 5000 || process.env.PORT;
MongodbConnection();

app.use("/api/auth", require("./routes/User"));
app.use("/api/payment", require("./routes/Stripe"));
app.use("/api", require("./routes/Saloon"));
app.use("/api", require("./routes/Bookappointment"));

app.get("", (req, res)=>{
    res.send("hi, server is running fine 😋")
})

app.listen(port, ()=>{
    console.log(`Server running fine on http://localhost:${port}`)
})