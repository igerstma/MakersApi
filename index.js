const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

// GET and POST routes
app.get("/", (req, res) => {
    console.log("In / route!");
    res.send("Hello world!");
});

app.get("/Grace", (req, res) => {
    res.send("Grace True is a poopy butthead");
});

app.listen(port, () => {
    console.log("Example app listening.");
});