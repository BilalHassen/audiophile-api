const products = require("../seed-data/products");

const knex = require("knex")(require("../knexfile"));

const getHeadphones = (req, res) => {
  knex("products")
    .join("products_images", "products.id", "products_images.product_id")
    .where("category", "headphones")
    .where("products_images.type", "categoryImage")
    .select(
      "products.id",
      "products.name",
      "products.description",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ err: "Internal Server Error" });
    });
};

const getSpeakers = (req, res) => {
  knex("products")
    .join("products_images", "products.id", "products_images.product_id")
    // the category in the products table is = headphones
    .where("category", "speakers")
    .where("products_images.type", "categoryImage")
    .select(
      "products.id",
      "products.name",
      "products.description",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )
    .then((data) => {
      console.log({ data });
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ err: "Internal Server Error" });
    });
};

const getEarphones = (req, res) => {
  knex("products")
    .join("products_images", "products.id", "products_images.product_id")
    .where("category", "earphones")
    .where("products_images.type", "categoryImage")
    .select(
      "products.id",
      "products.name",
      "products.description",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )
    .then((data) => {
      res.json(data);
    })
    .catch(() => {
      res.status(500).json({ error: "Internal Server Error" });
    });
};

const getProductById = (req, res) => {
  let productID = req.params.id;
  let defaultData = null;

  knex("products")
    .where({ "products.id": productID })
    .join("products_details", "products.id", "products_details.product_id")
    .join("products_images", "products.id", "products_images.product_id")
    .where("products_images.type", "categoryImage")
    .select(
      "products.id",
      "products.name",
      "products.description", // Corrected column name
      "products.price",
      "products_details.features",
      "products_details.includes",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )

    .then((data) => {
      defaultData = data;
      if (defaultData.length === 0) {
        throw new Error("Product Not Found");
      }

      return knex("products_images")
        .where({ "products_images.product_id": productID })
        .whereIn("type", ["gallery_first", "gallery_second", "gallery_third"])
        .select(
          "products_images.type",
          "products_images.product_id",
          "products_images.url_mobile",
          "products_images.url_tablet",
          "products_images.url_desktop"
        );
    })
    .then((imageData) => {
      const productData = {
        data: defaultData,
        imageData: imageData,
      };
      res.json(productData);
    })

    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: "internal server error, Product Not Found" });
    });
};

module.exports = {
  getHeadphones,
  getSpeakers,
  getEarphones,
  getProductById,
};
