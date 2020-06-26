const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const mongoose = require('mongoose');
const postRoute = require('./routes/posts');
require('dotenv/config');


mongoose.connect('mongodb://localhost/authapi', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB...");
})

app.use(express.json());
app.use("/api/user", authRoute)
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("successfull route");
})

app.listen(3000, () => {
    console.log("Server Started...");
});