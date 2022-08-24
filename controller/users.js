const { User } = require("../models");

module.exports.getUsers = (req, res) => {
  User.findAll()
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.createUser = (req, res) => {
    var firstName = req.body.firstName
    var age = req.body.age
  User.create({
    firstName: firstName,
    age: age,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send(`User entered -> ${firstName}`);
};

// module.exports = function getUser(req, res) {

// }

// module.exports = deleteUser = (req, res) => {

// }

// module.exports = updateUser = (req, res) => {

// }
