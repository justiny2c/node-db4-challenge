
exports.seed = function(knex, Promise) {
  return knex('recipe_steps').insert([   
    { recipe_id: 1, step_number: 1, instructions: "Make the dough"},
    { recipe_id: 1, step_number: 2, instructions: "Spread the sauce"},
    { recipe_id: 2, step_number: 1, instructions: 'Boil the pasta'}
  ]);
};
