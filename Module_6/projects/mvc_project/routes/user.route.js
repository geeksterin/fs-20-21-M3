const express = require("express");

const userController = require("../controller/user.controller");

const router = express.Router();

router.post("/user/login", userController.login);

router.get("/user/logout", userController.logout);

router.get("/user/forgot-password", userController.forgotPassword);

router.get("/user/reset-password", userController.resetPassword);

router.get("/user/signup", userController.singup);

module.exports = router;