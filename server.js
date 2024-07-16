const express = require("express");
const app = express();

// Enable Cross-Origin Resource Sharing (CORS) middleware
const cors = require("cors");
app.use(cors());

//import dotenv module into the app
// call config method on dotenv module parse the variables and
// add them to the process.env object
require("dotenv").config();
const { PORT } = process.env;

app.use(express.json());

const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");
app.use(express.static("assets"));

app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

// default home route
app.get("/", (req, res) => {
  res.send("Welcome to the audiophile api");
});

app.listen(PORT, (req, res) => {
  console.log("audiophile server running", `${PORT}`);
});
