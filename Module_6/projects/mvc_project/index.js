console.log("MVC Project");

const express = require("express");

const checkoutRoutes = require("./routes/checkout.route");
const productRoutes = require("./routes/product.route");
const userRoutes = require("./routes/user.route");

const app = express(); // Express Server

/**
 * 1. Product Module => Listing APIs for product (Product list api, product detail API), Rate Product, Review Product etc
 * 2. User Module => Login, SignUp, Forgot Password, Reset Password, View Orders, Edit Order, Edit Profile etc
 * 3. Checkout Module => Payments API, Place Order etc
 */

app.use(checkoutRoutes);
app.use(productRoutes);
app.use(userRoutes);

app.listen(8080, () => console.log("eComm App is up and running at port 8080"));