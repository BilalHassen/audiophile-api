// Import Knex and initialize it with the configuration from the knexfile.js
const knex = require("knex")(require("../knexfile"));

const addItem = (req, res) => {
  // destruct the req.body contents
  const { id, product_id, quantity, price, cart_id, name } = req.body;

  // console.log({ quantity });
  // query the cart table to see if the cart exists
  knex("cart")
    .where({ id: cart_id })
    // select the first row returned even if it returns multiple rows
    .first()
    // handle the returned promise from the above query
    .then((exisitngCart) => {
      // console.log(exisitngCart);
      // if the cart table doesnt have the cart_id insert it
      // this code will only run if the cart_id isnt in the cart table
      if (!exisitngCart) {
        return knex("cart").insert({ id: cart_id });
      }
    })
    .then(() => {
      // check if the cart_items related to the cart_id exists
      return knex("cart_items")
        .where({
          cart_id: cart_id,
          product_id: product_id,
        })
        .first();
    })
    // exisitngItem is object returned from above promise
    .then((existingItem) => {
      // check if the item exists if it does update it
      if (existingItem) {
        // console.log("first if");
        return knex("cart_items")
          .where({ cart_id: cart_id, product_id: product_id })
          .update({
            // take the existingItem quantity and add the value of the new quantity from the req
            quantity: existingItem.quantity + quantity,
            price: price * (existingItem.quantity + quantity),
          });
      } else {
        return knex("cart_items").insert({
          cart_id: cart_id,
          product_id: product_id,
          item_name: name,
          quantity: quantity,
          price: price * quantity,
        });
      }
    });
};

const updateItemsInCart = (req, res) => {
  const { product_id, quantity, price } = req.body;

  knex("cart_items")
    .where({ product_id: product_id })
    .select("cart_items.product_id", "cart_items.quantity", "cart_items.price")
    .first()
    .then((productData) => {
      console.log("product data:", productData);
      const originalPrice = productData.price / productData.quantity;

      console.log("product data:", productData);

      return knex("cart_items")
        .where({ product_id: product_id })
        .update({
          quantity: quantity,
          price: originalPrice * quantity,
        });
    })
    .then(() => {
      return knex("cart_items").where({ product_id: product_id }).first();
    })
    .then((data) => {
      console.log(data);
      if (data.quantity === 0) {
        return knex("cart_items")
          .where({ product_id: product_id })
          .first()
          .del();
      }
    })
    .then((data) => {
      console.log(data);
      res.status(200).json({ message: "Cart item updated successfully." });
    })
    .catch((error) => {
      console.error("Error updating cart item:", error);
      res.status(500).json({ error: "Internal server error." });
    });
};

const getItemsInCart = (req, res) => {
  let cartId = req.params.id;

  knex("cart")
    .where({ cart_id: cartId })
    .join("cart_items", "cart.id", "cart_items.cart_id")
    .join(
      "products_images",
      "cart_items.product_id",
      "products_images.product_id"
    )
    .where("products_images.type", "categoryImage")
    .select(
      "cart_items.cart_id",
      "cart_items.product_id",
      "cart_items.item_name",
      "cart_items.quantity",
      "cart_items.price",
      "products_images.url_mobile",
      "products_images.url_tablet",
      "products_images.url_desktop"
    )
    .then((cart_data) => {
      res.json(cart_data);
    })
    .catch((err) => {
      res.status.json({ message: err });
    });
};

module.exports = {
  addItem,
  getItemsInCart,
  updateItemsInCart,
};
