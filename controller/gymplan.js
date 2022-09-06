const {createGymPlan, deleteGymPlan, updateGymPlan, allGymPlanData} = require("../services/gymplan")


module.exports.create = (req, res) => {
    return createGymPlan(req, res)
};

module.exports.deletePlan = (req, res) => {
    return deleteGymPlan(req, res)
}


module.exports.updatePlan = (req, res) => {
    return updateGymPlan(req, res)
}


module.exports.allPlan = (req, res) => {
    return allGymPlanData(req, res)
}