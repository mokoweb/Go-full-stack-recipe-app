 const bcrypt = require('bcrypt')
const User = require('../models/user')

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }).then(
      (user) => {
        if (!user) {
          return res.status(401).json({
            error: new Error('User not found!')
          });
        }
        bcrypt.compare(req.body.password, user.password).then(
          (valid) => {
            if (!valid) {
              return res.status(401).json({
                error: new Error('Incorrect password!')
              });
            }
            res.status(200).json({
              userId: user._id,
              token: 'token'
            });
          }
        ).catch(
          (error) => {
            res.status(500).json({
              error: error
            });
          }
        );
      }
    ).catch(
      (error) => {
        res.status(500).json({
          error: error
        });
      }
    );
  }


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) =>{
        const user = new User({

            email: req.body.email,
            password: hash
        });

    user.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  }
  );
  }

//   exports.getAllUser = (req, res, next) => {
//     User.find().then(
//       (users) => {
//         res.status(200).json(users);
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   }

//   exports.getOneUser = (req, res, next) => {
//     User.findOne({
//       _id: req.params.id
//     }).then(
//       (user) => {
//         //console
//         res.status(200).json(user);
//       }
//     ).catch(
//       (error) => {
//         res.status(404).json({
//           error: error
//         });
//       }
//     );
//   }

//   exports.updateUser =  (req, res, next) => {
//     //con
//     const user = new User({

//         email: req.body.email,
//         password: req.body.password
//     });
//     User.updateOne({_id: req.params.id}, user).then(
//       () => {
//         res.status(201).json({
//           message: 'User updated successfully!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   }

//   exports.deleteOneUser =  (req, res, next) => {
//     User.deleteOne({_id: req.params.id}).then(
//       () => {
//         res.status(200).json({
//           message: 'Deleted!'
//         });
//       }
//     ).catch(
//       (error) => {
//         res.status(400).json({
//           error: error
//         });
//       }
//     );
//   }