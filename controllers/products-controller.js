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
      "products.description",
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

const getRelatedProducts = (req, res) => {
  const { id } = req.params;
  const idToNumber = parseInt(id);

  if (idToNumber > 6 || idToNumber <= 0) {
    res.status(500).json({ error: "Product Not Found" });
  } else {
    knex("products")
      .join("related_products", "products.id", "related_products.product_id")
      .where("related_products.product_id", id)
      .select(
        "related_products.product_id",
        "related_products.name",
        "related_products.mobile_url",
        "related_products.tablet_url",
        "related_products.desktop_url"
      )
      .then((data) => {
        // console.log(data.length);
        const getRelatedIds = data.map((item) => {
          return knex("products")
            .where("products.related_name", item.name)
            .select("products.id")
            .then((relatedIds) => {
              console.log("150", relatedIds);
              const updatedData = { ...item, related_id: relatedIds };
              return updatedData;
            });
        });
        return Promise.all(getRelatedIds);
      })
      .then((updatedData) => {
        res.json(updatedData);
      })
      .catch(() => {
        res.status(500).json({ error: "internal server error" });
      });
  }
};

module.exports = {
  getHeadphones,
  getSpeakers,
  getEarphones,
  getProductById,
  getRelatedProducts,
};
