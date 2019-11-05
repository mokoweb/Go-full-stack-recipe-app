
const express =  require('express')
const router = express.Router()
const recipeCtrl = require('../controllers/recipe')
const auth = require('../middleware/auth')
router.post('/', auth, recipeCtrl.createRecipe)

  router.get('/', auth, recipeCtrl.getAllRecipe);

  router.get('/:id',auth, recipeCtrl.getOneRecipe);

  router.put('/:id',auth, recipeCtrl.updateRecipe);

  router.delete('/:id',auth, recipeCtrl.deleteOneRecipe);

  module.exports = router;