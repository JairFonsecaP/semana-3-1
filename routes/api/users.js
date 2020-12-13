const router = require("express").Router();
const db = require("../../models");

// Todas las rutas de este archivo tienen el prefijo /api/users

router.get("/", function (req, res) {
  db.user.findAll().then((users) => res.json(users));
});
   
module.exports = router;
