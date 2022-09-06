const {registerGym, gymLogin, getAllGymData } = require("../services/gyms")

module.exports.signUpGym = (req, res) => {
  return registerGym(req, res)
};

module.exports.loginGym = (req, res) => {
  return gymLogin(req, res)
};

module.exports.allAccountsGym = (req, res) => {
  return getAllGymData(req, res)
};
