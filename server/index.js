// server/index.js

// require("dotenv").config({ path: __dirname + "/.env" });
const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000;

//Here you can add your routes
app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.get("/aboutus", (req, res) => {
    res.send("here is about us");
});

app.get("/services", (req, res) => {
    res.send("here is services");
});

app.listen(PORT, () => {
    console.log(`Server listening on the port  ${PORT}`);
})