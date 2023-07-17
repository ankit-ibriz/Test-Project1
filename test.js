const express = require('express')
const app = express();


app.get('/', (req, res) => {
    res.json({
        "Hi": "This is Ankit",
        "Hi2": "This is Ankit2"
    })
})

app.get('/name', (req, res) => {
    res.send("Hey, This is a new tab");
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})