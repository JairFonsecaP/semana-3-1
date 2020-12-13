const config = require("../secret/config.js");
const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signin = (req, res) => {
  db.user
    .findOne({
      where: {
        email: req.body.email,
      },
    })
    .then((user) => {
      console.log("Encontró al usuario", user);
      if (!user) {
        return res.status(404).send("El usuario no existe.");
      }
      const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );
      if (!passwordIsValid) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Contraseña inválida",
        });
      }
      const token = jwt.sign(
        { id: user.id, name: user.name, email: user.email },
        config.secret,
        {
          expiresIn: 3600, // expires in 1 hour
        }
      );
      res.status(200).send({ auth: true, accessToken: token });
    })
    .catch((err) => {
      res.status(500).send("Error: " + err);
    });
};
