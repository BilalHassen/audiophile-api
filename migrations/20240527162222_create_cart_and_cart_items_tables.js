/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  // table for each individual cart
  return knex.schema
    .createTable("cart", (table) => {
      table.string("id").primary();
      table.timestamp("created_at").defaultTo(knex.fn.now());
    })
    .createTable("cart_items", (table) => {
      table.increments("id").primary();
      table.string("cart_id").notNullable();
      table
        .foreign("cart_id")
        .references("id")
        .inTable("cart")
        .onDelete("CASCADE");

      table.integer("product_id").notNullable();
      table.integer("quantity").notNullable();
      table.decimal("price", 10, 2).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cart_items").then(() => {
    return knex.schema.dropTableIfExists("cart");
  });
};
