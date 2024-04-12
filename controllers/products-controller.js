const knex = require("knex")(require("../knexfile"));

const getImages = (req, res) => {
  knex("products_images")
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getImages,
};
