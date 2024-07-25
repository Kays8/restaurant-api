const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
const { verifySignUp } = require("../middlewares");

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",

    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});
//Auth

//PORT =>  localhost:5000/api/v1/auth/signin/

router.post(
  "/signup",
  [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRoleExisted],
  authController.signup
);

//localhost:5000/api/v1/signin/
http: router.post("/signin", authController.signin);

module.exports = router;
