const {
  registerGym,
  gymLogin,
  getAllGymData,
  deleteGymData,
  updateGymData,
} = require("../services/gyms");

module.exports.signUpGym = (req, res) => {
  return registerGym(req, res);
};

module.exports.loginGym = (req, res) => {
  return gymLogin(req, res);
};

module.exports.allAccountsGym = (req, res) => {
  return getAllGymData(req, res);
};

module.exports.deleteGym = (req, res) => {
  return deleteGymData(req, res);
};

module.exports.updateGym = (req, res) => {
  return updateGymData(req, res);
};
