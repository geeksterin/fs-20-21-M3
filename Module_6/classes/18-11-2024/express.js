const express = require("express");

const authRoutes = require("./authApis");
const productRoutes = require("./productApis");

const app = express();

app.use(authRoutes);
app.use(productRoutes);

// app.get("/todos", (req, res) => {
//   console.log("Todo request received");
//   const data = [
//     {
//       id: 1,
//       title: "First api",
//     },
//     {
//       id: 2,
//       title: "xyasdja",
//     },
//   ];
//   res.json(data);
//   //   res.end("Todos api");
// });

// app.post("/todos", (req, res) => {
//   res.json({
//     message: "POST API FOR TODOS",
//   });
// });

// app.get("/users", (req, res) => {
//   console.log("Users request received");
//   const data = [
//     {
//       id: 123,
//       name: "Alex",
//     },
//     {
//       id: 456,
//       name: "Mike",
//     },
//   ];
//   res.json(data);
// });

// app.get("/products", (req, res) => {
//   console.log("Products request received");
//   const data = [
//     {
//       id: 1,
//       title: "Mobile phone",
//     },
//     {
//       id: 2,
//       title: "Laptop",
//     },
//   ];
//   res.json(data);
// });

// app.use("*", (req, res) => {
//   res.status(404).json({
//     message: "Route not found",
//   });
// });

app.listen(8080, () =>
  console.log("Express server is up and running at port 8080")
);
