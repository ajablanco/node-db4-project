
exports.up = function(knex) {
  return knex.schema
  //recipes
    .createTable("recipes", tbl => {
      tbl.increments()
      tbl.string('recipeName', 255).notNullable().unique();
  })
  //ingredients
  .createTable("ingredients", tbl =>{
      tbl.increments()
      tbl.string('ingredient').notNullable();
      tbl.float('quantity').notNullable();

      //foreign key
      tbl
      .integer('recipe_id')
      .references('id')
      .inTable('recipes')
      .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
      .onUpdate("CASCADE");
  })
  //steps
  .createTable('steps', tbl => {
      tbl.increments()
      tbl.integer("step").notNullable()
      tbl.text("instructions").notNullable()
      //foreign key
      tbl
      .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable('recipes')
        .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
        .onUpdate("CASCADE");
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("steps")
  .dropTableIfExists("ingredients")
  .dropTableIfExists("recipes")
};
