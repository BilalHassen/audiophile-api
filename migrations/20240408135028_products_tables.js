/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("products", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.string("category").notNullable();
      table.integer("price").notNullable();
      table.string("is_new").notNullable().defaultTo(true);
    })
    .createTable("products_details", (table) => {
      table.increments("id").primary();
      table.string("features").notNullable();
      table.string("includes").notNullable();
      // create a integer column for the foreign key
      table.integer("product_id").unsigned().notNullable();
      // products_id references the id in the products table
      table.foreign("product_id").references("id").inTable("products");
    })
    .createTable("products_images", (table) => {
      table.increments("id").primary();
      table.string("type").notNullable();
      table.string("mobile_url").notNullable();
      table.string("tablet_url").notNullable();
      table.string("desktop_url").notNullable();
      // create a column for the foreign key can't be negative or null
      table.integer("product_id").unsigned().notNullable();
      table.foreign("product_id").references("id").inTable("products");
    })
    .createTable("related_products", (table) => {
      table.increments("id").primary();
      // create a integer column for the foreign key
      table.integer("product_id").unsigned().notNullable();
      // products_id references the id in the products table
      table.foreign("product_id").references("id").inTable("products");
      table.string("slug").notNullable();
      table.string("name").notNullable();
      table.string("mobile_url").notNullable();
      table.string("tablet_url").notNullable();
      table.string("desktop_url").notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return (
    knex.schema
      // Drop 'related_products' table
      .dropTable("related_products")
      // Drop 'product_images' table
      .dropTable("products_images")
      // Drop 'product_details' table
      .dropTable("products_details")
      // Drop 'product' table
      .dropTable("products")
  );
};
