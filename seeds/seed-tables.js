/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const products = require("../seed-data/products");

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("products_details").del();
  await knex("products").del();
  await knex("products").insert(products);
};
