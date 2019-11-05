
const express =  require('express')
const router = express.Router()
const recipeCtrl = require('../controllers/recipe')

router.post('/', recipeCtrl.createRecipe)

  router.get('/', recipeCtrl.getAllRecipe);

  router.get('/:id',recipeCtrl.getOneRecipe);

  router.put('/:id',recipeCtrl.updateRecipe);

  router.delete('/:id',recipeCtrl.deleteOneRecipe);

  module.exports = router;