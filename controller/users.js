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
  User.create({
    firstName: "Dhanush",
    age: 19,
  }).catch((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("Enter user");
};

// module.exports = function getUser(req, res) {

// }

// module.exports = deleteUser = (req, res) => {

// }

// module.exports = updateUser = (req, res) => {

// }
