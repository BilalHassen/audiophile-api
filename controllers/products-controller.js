const knex = require("knex")(require("../knexfile"));

const getHeadphones = (req, res) => {
  // Query the "products" table
  knex("products")
    // Filter rows where the "category" column equals "headphones"
    .where("category", "headphones")
    // Select specific columns for the result
    .select("name", "description", "url_mobile", "url_tablet", "url_desktop")
    // Handle the result
    .then((productData) => {
      // Send the queried data as JSON response
      res.json(productData);
    })
    // Handle errors, if any
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getHeadphones,
};
