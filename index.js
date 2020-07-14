const express = require("express");
const helmet = require("helmet");
const app = express();
const db = require("./data/connections");

app.use(express.json());
app.use(helmet());

app.get("/api/cars", (req, res) => {
  db.select("*")
    .from("car")
    .then((cars) => {
      res.json({ data: cars });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

app.post("/api/cars", (req, res) => {
  db("car")
    .insert(req.body)
    .then((car) => {
      res.status(201).json({ data: car });
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
