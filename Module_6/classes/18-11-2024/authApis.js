const express = require("express");

const router = express.Router();

// Auth related apis
router.post("/login", (req, res) => {
  res.json({
    success: true,
    message: "Dummy Login API",
  });
});

router.post("/signup", (req, res) => {
  res.json({
    success: true,
    message: "Dummy Signup API",
  });
});

router.post("/forgot-password", (req, res) => {
  res.json({
    success: true,
    message: "Dummy Forgot password API",
  });
});

module.exports = router;
// Router
