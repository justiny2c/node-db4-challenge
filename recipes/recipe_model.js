const db = require('../data/db-config.js')

module.exports = {
    getRecipe,
    getRecipeById,
    getShoppingList,
    getInstructions
}

function getRecipe() {
    return db('recipes')
}

function getRecipeById(id) {
    // return the user if found or null if not found
    return db('recipes')
      .where({ id }) // .where always returns an array    {id: id(from the params in function)}
      .first()
      .then(recipe => {
        if (recipe) {
          return recipe;
        } else {
          return null;
        }
      });
}

/* inner join steps as p on s.id = p.scheme_id */

function getShoppingList(id) {
    return db("recipe_ingredients as r")
    .where({ recipe_id: id})
    .innerJoin("ingredients as i", "r.ingredient_id", "i.id" )
    .select("i.ingredient_name as ingredient", "r.quantity as quantity")
}

function getInstructions(id) {
    return db("recipe_steps as s")
    .where({ recipe_id: id})
    // .innerJoin("recipes as r", r.id, s.recipe_id)
    .select("s.step_number as step", "s.instructions as instruction")
}

// function add(scheme) {
//     return db("schemes")
//         .insert(scheme)
// }

// function update(changes, id) {
//     return db("schemes")
//         .where({ id })
//         .update(changes)
// }

// function remove(id) {
//     return db("schemes")
//         .where({ id })
//         .del()
// }