const express = require("express");
const checkAuth = require("../middleware/check-auth.js")

const { loginGym }  = require('../controller/gyms.js')
const { signUpUser, updateUser, deleteUser }  = require('../controller/users.js')
const { create, deletePlan, updatePlan, allPlan }  = require('../controller/gymplan.js')

const gyms = express.Router();

gyms.get("/allPlans", checkAuth, allPlan)
gyms.post("/plan/create", checkAuth, create)
gyms.put("/plan/update/:id", checkAuth, updatePlan)
gyms.delete("/plan/delete/:id", checkAuth, deletePlan)

gyms.post("/login", loginGym)

gyms.post("/user/signup", checkAuth, signUpUser)
gyms.put("/user/update/:id", checkAuth, updateUser)
gyms.delete("/user/delete/:id", checkAuth, deleteUser)


module.exports = gyms;
