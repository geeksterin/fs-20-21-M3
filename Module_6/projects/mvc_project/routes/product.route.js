const express = require("express");

const productController = require("../controller/product.controller");

const router = express.Router();

router.get("/product/list", productController.productList);

router.get("/product-details", productController.productDetails);

router.get("/product-review", productController.productReview);

router.get("/product-rate", productController.productRate);

module.exports = router;