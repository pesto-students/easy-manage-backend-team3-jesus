const {registerUser, loginForUser, updateUserData, getAllUserData, deleteUserRecord} = require("../services/users.js")

module.exports.signUpUser = (req, res) => {
  return registerUser(req, res)
};

module.exports.loginUser = (req, res) => {
  return loginForUser(req, res)
};

module.exports.updateUser = (req, res) => {
  return updateUserData(req, res)
  
}

module.exports.allAccountsUser = (req, res) => {
  return getAllUserData(req, res)
};


module.exports.deleteUser = (req, res) => {
  return deleteUserRecord(req, res)
}