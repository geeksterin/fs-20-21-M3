const express = require("express");
const responseTime = require("response-time");

const app = express();

app.use(express.static("images")); // Built in middleware
app.use(express.json()); // req.body => Req body will be available in json format
app.use(express.urlencoded({})); // req.body => url encoded form data
app.use(responseTime());

// (req, res, next) => {
//     // mobile.jpg, tshirt.jpg, resume.pdf, data.doc
//     if(files.includes(req.url)) {
//         // send file as response
//     } else {
//         next();
//     }
// }

const products = [
    {
        id: 1,
        title: "Mobile",
        image: "http://localhost:8080/mobile.jpg" // ?
    }
]

app.get("/products", (req, res) => {
    res.json({
        success: true,
        message: "Dummy products list api",
        results: products
    })
});

app.post("/login", (req, res) => {
    console.log(req.body);

    setTimeout(() => {
        res.json({
            success: true,
            message: "Dummy login api"
        })
    }, 2000)

});

app.listen(8080, () => console.log("Server is up and running at port 8080"))