const { createJymPlan, deleteJymPlan, updateJymPlan, getAllGymPlan } = require("../services/jymplans");

module.exports.create = (req, res) => {
  return createJymPlan(req, res);
};

module.exports.deletePlan = (req, res) => {
  return deleteJymPlan(req, res);
};

module.exports.updatePlan = (req, res) => {
  return updateJymPlan(req, res)
};

module.exports.allRoles = (req, res) => {
 return getAllGymPlan(req, res)
};
