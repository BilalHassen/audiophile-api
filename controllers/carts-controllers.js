// Import Knex and initialize it with the configuration from the knexfile.js
const knex = require("knex")(require("../knexfile"));

const addItem = (req, res) => {
  // destruct the req.body contents
  const { id, product_id, quantity, price, cart_id } = req.body;

  // check if the id exists in the cart table
  knex("cart")
    .where({ id: cart_id })
    .first()
    .then((existingCart) => {
      // if not add it
      if (!existingCart) {
        return knex("cart").insert({ id: cart_id });
      }
    })
    .then(() => {
      return knex("cart_items")
        .where({
          cart_id: cart_id,
          product_id: product_id,
        })
        .first();
    })
    .then((existingItem) => {
      if (existingItem) {
        return knex("cart_items")
          .where({ cart_id: cart_id, product_id: product_id })
          .update({
            quantity: knex.raw("?", [quantity]),
            price: price * quantity,
          });
      } else if (quantity > 1) {
        return knex("cart_items").insert({
          cart_id: cart_id,
          product_id: product_id,
          quantity: knex.raw("?", [quantity]),
          price: price * quantity,
        });
      } else if (quantity <= 1) {
        return knex("cart_items").insert({
          cart_id: cart_id,
          product_id: product_id,
          quantity: quantity,
          price: price,
        });
      }
    });
};

module.exports = {
  addItem,
};
