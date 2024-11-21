const express = require("express");

const checkoutController = require("../controller/checkout.controller");

const router = express.Router(); // Initialize / creating an object / instantiation

router.post("/checkout/place-order", checkoutController.placeOrder);

router.get("/checkout/payments", checkoutController.makePayment);

module.exports = router;