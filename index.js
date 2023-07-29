const express = require("express");
const mongoose = require("mongoose");
const config = require("config");

const app = express();
const authRouter = require("./routes/auth.routes");
const PORT = config.get("serverPort");

app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
    try{
        mongoose.connect(config.get("dbURL"))
        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch(e) {

    }
}

start();