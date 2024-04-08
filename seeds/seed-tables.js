/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const products = require("../seed-data/products");
const products_details = require("../seed-data/products_details");
const products_images = require("../seed-data/products_image");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products_images").del();
  await knex("products_details").del();
  await knex("products").del();
  await knex("products").insert(products);
  await knex("products_details").insert(products_details);
  await knex("products_images").insert(products_images);
};
