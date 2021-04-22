const express = require("express")
const app = express()
const port = process.env.port || 3000;

// GET and POST routes
app.get("/", (req, res) => {
    console.log("In / route!");
    res.send("Hello world!");
});

app.listen(port, () => {
    console.log("Example app listening.");
});