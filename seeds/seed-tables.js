/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const products = require("../seed-data/products");
const products_details = require("../seed-data/products-details");
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products_details").del();
  await knex("products").del();
  await knex("products").insert(products);
  await knex("products_details").insert(products_details);
};
