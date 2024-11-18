const express = require("express");

const router = express.Router();

// Product related apis
router.get("/products", (req, res) => {
  res.json({
    success: true,
    message: "Dummy Get Products API",
  });
});

router.post("/products", (req, res) => {
  res.json({
    success: true,
    message: "Dummy POST Products API",
  });
});

module.exports = router;