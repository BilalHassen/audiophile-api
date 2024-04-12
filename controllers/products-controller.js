const knex = require("knex")(require("../knexfile"));

const getHeadphones = (req, res) => {
  //   knex("products")
  //     .then((productData) => {
  //       return knex("products_images");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
};

module.exports = {
  getHeadphones,
};
