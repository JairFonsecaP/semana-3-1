/*en caso de  hacer uso con el directorio controlador se 
debe importar como se observa en la siguiente linea, con el nombre del archivo js
que contiene la logica */
const express = require("express");
const db = require("./models");
const app = express();
const bodyParser = require("body-parser");
const apiRouter = require("./routes");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/", function (req, res) {
  db.user.findAll().then((users) => res.json(users));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});

module.exports = app;
