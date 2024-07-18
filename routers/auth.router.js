const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

//Auth
//PORT http://localhost:5000/api/v1/signup/
router.post("/signup", authController.signup);

router.post("/signin", authController.signin);

module.exports = router;
