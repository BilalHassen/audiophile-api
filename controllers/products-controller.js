const products = require("../seed-data/products");

const knex = require("knex")(require("../knexfile"));

const getHeadphones = (req, res) => {
  knex("products")
    .join("products_images", "products.id", "products_images.product_id")
    .where("category", "headphones")
    .where("products_images.type", "categoryImage")
    .select(
      "products.name",
      "products.description",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json({ err: "Internal Server Error" });
    });
};

module.exports = {
  getHeadphones,
};
