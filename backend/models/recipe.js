const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
    name: { type: String, required: true },
    cookTime: { type: Number, required: true },
    Ingredients: { type: String, required: true },
    Instructions: { type: String, required: true },
    Difficulty: { type: String, required: true },
});

module.exports = mongoose.model('Recipe', recipeSchema);