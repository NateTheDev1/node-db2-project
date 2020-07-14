exports.up = function (knex) {
  return knex.schema.alterTable("car", (tbl) => {
    tbl.dropColumn("vin");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
