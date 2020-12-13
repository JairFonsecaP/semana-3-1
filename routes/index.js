const router = require("express").Router();
const apiRouterAuth = require("./api/auth");
const apiRouterUser = require("./api/users");

router.use("/auth", apiRouterAuth);
router.use("/users", apiRouterUser);

module.exports = router;
