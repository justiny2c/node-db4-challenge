
exports.seed = function(knex, Promise) {
  return knex('recipe_steps').insert([   
    { ingredient_name: "Dough" }, // 1
    { ingredient_name: "Sauce"}, // 2
    { ingredient_name: "Pasta" },
  ]);
};
