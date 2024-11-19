const express = require("express");

const products = require("./products.json");

const app = express();

// Middlewares

const middlewareFn = (req, res, next) => {
    // API Key middleware
    console.log(req.query.apiKey)
    if (req.query.apiKey === "12334-asd234-23fasd3") {
        // Allow the user to call the api
        next();
    } else {
        // Do not allow the user to go forward
        res.status(403).json({
            success: false,
            message: "Please pass apiKey in query parameter to access this resource"
        })
    }
};

// app.use(middlewareFn);

app.use((req, res, next) => {
    console.log("M1");
    // return res.json({
    //     success: true,
    //     message: "Response from M1"
    // })
    next("ERROR FROM m1")
});

app.use((req, res, next) => {
    console.log("M2");
    next();
    // res.json({
    //     success: true,
    //     message: ""
    // })
});

app.use((req, res, next) => {
    console.log("M3");
    next();
    // res.json({
    //     success: true,
    //     message: ""
    // })
});

app.get("/products/:id", (req, res) => {
    console.log("API Middleware");
    // console.log(req.query.id) // Query Param
    console.log(req.params); // URL Params
    // const filteredProducts = products.filter(product => product.id == req.query.id)
    const filteredProducts = products.filter(product => product.id == req.params.id)
    const outputObj = {
        success: true,
        message: "Dummy Products list API",
        results: filteredProducts
    }
    // if (filteredProducts.length === 0) {
    //     return res.status(204).json({})
    // }
    res.json(outputObj);
});

app.use("*", (req, res) => {
    console.log("Not found middleware")
    res.status(404).json({
        success: false,
        message: "Route not found"
    })
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.log("Error middleware", err)
    // fs.appendFile(error.log, "", () => {})
        // next();
    res.status(500).json({
        success: false,
        message: "Message from error middleware"
    })
});



app.listen(8080, () => console.log("Server is up and running at port 8080"));