
const express =  require('express')
const router = express.Router()

const auth = require('../middleware/auth')

const multer = require('../middleware/multer-config')
const recipeCtrl = require('../controllers/recipe')
router.post('/', auth, multer, recipeCtrl.createRecipe)

  router.get('/', auth, recipeCtrl.getAllRecipe);

  router.get('/:id',auth, recipeCtrl.getOneRecipe);

  router.put('/:id',auth, recipeCtrl.updateRecipe);

  router.delete('/:id',auth, recipeCtrl.deleteOneRecipe);

  module.exports = router;