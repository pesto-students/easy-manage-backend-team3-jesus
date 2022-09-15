const { Users } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerUser = (req, res) => {
  Users.findOne({
    where: { email: req.body.email },
  }).then((user) => {
    if (user) {
      return res.status(409).json({
        message: "Email already exists!",
      });
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        } else {
          Users.create({
            name: req.body.name,
            sex: req.body.sex,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            city: req.body.city,
            state: req.body.stateName,
            country: req.body.country,
            RoleId: req.body.role,
            GymPlanId: req.body.GymPlanId,
            GymId: req.userData.id
          })
            .then((result) => {
              console.log(result);
              res.status(201).json({
                message: "Users has signed up!",
              });
            })
            .catch((err) => {
              if (err) {
                console.log(err);
                res.status(500).json({
                  error: err,
                });
              }
            });
        }
      });
    }
  });
};

module.exports.loginForUser = (req, res) => {
  Users.findOne({
    where: { email: req.body.email },
  }).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "There was an error while Authentication",
            error: err,
          });
        }
        if (result) {
          const token = jwt.sign(
            {
              id: user.id,
              role: "user",
            },
            process.env.JWT_SECRET,
            {
              expiresIn: "1h",
            }
          );
          return res.status(200).json({
            message: "User Authentication is Successful!",
            token: token,
          });
        }

        return res.status(401).json({
          message: "Password Mismatch!! Authentication Failed.",
        });
      });
    } else {
      return res.status(404).json({
        message: "Authentication Failed. User not Found!",
      });
    }
  });
};

module.exports.updateUserData = (req, res) => {
  Users.findOne({
      where : { id: req.params.id, GymId: req.userData.id}
  }).then(user => {
      if (user){
        Users.update({
          name: req.body.name,
          sex: req.body.name,
          address: req.body.address,
          city: req.body.city,
          state: req.body.stateName,
          country: req.body.country,
          },{
              where: {
                  id: req.params.id
              }
            }).then(result =>{
              return res.status(200).json({
                  message: `User Updated Succesfully`
              })
            })
            .catch(err => {
              return res.staus(500).json({
                  error:err
              })
            })
      } else {
          return res.status(500).json({
              message: "User doesn't exist"
          })
      }
  })
  
}

module.exports.getAllUserData = (req, res) => {
  Users.findAll({
    where : { GymId: req.userData.id}
})
    .then((accounts) => {
      return res.status(200).json(accounts);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};


module.exports.deleteUserRecord = (req, res) => {
  Users.findOne({
      where : { id: req.params.id}
  }).then(user => {
      if (user){
        Users.destroy({
              where: {
                  id: req.params.id
              }
            }).then(result =>{
              return res.status(200).json({
                  message: `User Deleted Succesfully`
              })
            })
            .catch(err => {
              return res.staus(500).json({
                  error:err
              })
            })
      } else {
          return res.status(500).json({
              message: "User doesn't exist"
          })
      }
  })
  
}


module.exports.getUserData = (req, res) => {
  Users.findAll({
    where : { id: req.params.id}
})
    .then((accounts) => {
      return res.status(200).json(accounts);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};