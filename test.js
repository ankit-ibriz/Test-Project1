const express = require('express')
const app = express();

var cors =require("cors");

app.use(cors());

app.get('/names', (req, res) => {
    res.send("Aman");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})