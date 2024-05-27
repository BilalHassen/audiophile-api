// Import Knex and initialize it with the configuration from the knexfile.js
const knex = require("knex")(require("../knexfile"));

const addItem = (req, res) => {
  console.log(req.body);
  knex("cart")
    .insert({
      created_at: new Date(),
    })
    .then(() => {
      res.status(201).json({ message: "item added" });
    })
    .catch((error) => {
      console.error("Error adding item to cart:", error);
      res.status(500).json({ error: "Internal server error" });
    });
};

module.exports = {
  addItem,
};
