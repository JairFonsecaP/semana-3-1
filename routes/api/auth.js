const router = require("express").Router();
const { User } = require("../../models");
const controller = require("../../controllers/controller.js");

// Todas las rutas de este archivo tienen el prefijo /api/auth/

router.post("/signin", controller.signin);

module.exports = router;
