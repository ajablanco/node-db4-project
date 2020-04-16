
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {id: 1, step: 1, instructions: "peel and cut cucumber", recipe_id: 1},
        {id: 2, step: 2, instructions: "add 2 TBS of rice vinegar", recipe_id: 1},
        {id: 3, step: 3, instructions: "add 1 TBS of coconut aminos", recipe_id: 1}
      ]);
    });
};
