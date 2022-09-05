const { Gyms } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.signUpGym = (req, res) => {
  Gyms.findOne({
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
          Gyms.create({
            name: req.body.name,
            email: req.body.email,
            password: hash,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            country: req.body.country,
            JymPlanId: req.body.JymPlanId,
            SuperAdminId: req.userData.SuperAdminId
          })
            .then((result) => {
              console.log(result);
              res.status(201).json({
                message: "Gyms has signed up!",
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

module.exports.loginGym = (req, res) => {
  Gyms.findOne({
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
              GymId: user.id,
              role: "gym",
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

module.exports.allAccountsGym = (req, res) => {
  Gyms.findAll()
    .then((accounts) => {
      return res.status(200).json(accounts);
    })
    .catch((err) => {
      return res.status(500).json({
        error: err,
      });
    });
};
