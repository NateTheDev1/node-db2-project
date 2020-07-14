exports.up = function (knex) {
  return knex.schema.alterTable("car", (tbl) => {
    tbl.integer("vin").unique().notNullable().default(0);
  });
};

exports.down = function (knex) {};
