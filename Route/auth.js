const express = require("express");
const router = express.Router();

const controller = require('../Controller/auth');//Requring Controllers

//Rendring login@Register Page
router.get("/", controller.auth);

//Login Route in /auth
router.post("/login", controller.login);

//Register Route in /auth
router.post("/register", controller.register);

module.exports = router;
