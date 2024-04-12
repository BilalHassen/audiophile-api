const knex = require("knex")(require("../knexfile"));

const getHeadphones = (req, res) => {
  knex("products")
    .where("category", "headphones")
    .select("name", "description", "url_mobile", "url_tablet", "url_desktop")
    .then((productData) => {
      res.json(productData);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getHeadphones,
};
