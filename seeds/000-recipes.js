
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipeName: 'Cucumber Salad'},
        {id: 2, recipeName: 'Vegan Chili'},
        {id: 3, recipeName: 'Vegan CornBread'}
      ]);
    });
};
