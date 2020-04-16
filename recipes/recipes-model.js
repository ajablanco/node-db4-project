const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db("recipes")
}

function getShoppingList(recipe_id) {
    return db("ingredients as i")
    .select('i.ingredient', 'i.quantity')
    .where({recipe_id})
}

function getInstructions(recipe_id) {
    return db("steps")
    .join("recipes", "recipes.id", "steps.recipe_id")
    .select('*')
    .where({recipe_id})
    .orderBy("steps.step")
}

