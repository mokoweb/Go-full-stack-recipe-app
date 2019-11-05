
const express =  require('express')
const router = express.Router()
const userCtrl = require('../controllers/user')

router.post('/signup', userCtrl.signup)

router.get('/login',userCtrl.login);

// router.post('/', userCtrl.createUser)

//   router.get('/', userCtrl.getAllUser);

//   router.get('/:id',userCtrl.getOneUser);

//   router.put('/:id',userCtrl.updateUser);

//   router.delete('/:id',userCtrl.deleteOneUser);

  module.exports = router;