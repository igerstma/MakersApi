const express = require("express")
const app = express()
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const people = [];

// GET and POST routes
app.get("/", (req, res) => {
    // console.log("In / route!");
    // res.send("Hello world!");
    res.json(people);
});

// Insert Endpoint
app.post("/insert", (req, res) => {
    const person_name = req.body.person_name;
    people.push(person_name);

    res.sendStatus(200);
});

app.get("/Grace", (req, res) => {
    res.send("Grace True is a poopy butthead");
});

app.listen(port, () => {
    console.log("Example app listening.");
});