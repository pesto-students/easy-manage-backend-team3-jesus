const express = require("express");
const checkAuth = require("../middleware/check-auth.js")
const authRole = require("../middleware/check-role.js");

const { loginGym,  }  = require('../controller/gyms.js')
const { signUpUser, updateUser, deleteUser, allAccountsUser, accountUser }  = require('../controller/users.js')
const { create, deletePlan, updatePlan, allPlan }  = require('../controller/gymplan.js')

const gyms = express.Router();

gyms.get("/allplans", checkAuth, authRole("gym"), allPlan)
gyms.post("/plan/create", checkAuth, authRole("gym"), create)
gyms.put("/plan/update/:id", checkAuth, authRole("gym"), updatePlan)
gyms.delete("/plan/delete/:id", checkAuth, authRole("gym"), deletePlan)

gyms.post("/login", loginGym)

gyms.get("/users/allaccounts", checkAuth, authRole("gym"), allAccountsUser)
gyms.post("/user/signup", checkAuth, authRole("gym"), signUpUser)
gyms.put("/user/update/:id", checkAuth, authRole("gym"), updateUser)
gyms.delete("/user/delete/:id", checkAuth, authRole("gym"), deleteUser)
gyms.get("/user/:id", checkAuth, authRole("gym"), accountUser)


module.exports = gyms;