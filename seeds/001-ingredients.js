
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'cucumber', quantity: 1, recipe_id: 1},
        {id: 2, ingredient: 'rice vinegar', quantity: 2, recipe_id: 1},
        {id: 3, ingredient: 'coconut aminos', quantity: 1, recipe_id: 1}
      ]);
    });
};
