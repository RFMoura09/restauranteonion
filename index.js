const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(cors());

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
});

app.get("/api", (req,res) => {
    res.json([
        {nome:"Rafael", idade: 25},
        {nome:"Rita", idade: 32},
        {nome:"Francisco", idade: 58},
        {nome:"Joselia", idade: 58},
    ])
})

app.listen(3000, () => console.log("listening on port 3000"));