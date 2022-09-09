const express = require("express");
const checkAuth = require("../middleware/check-auth.js");
const authRole = require("../middleware/check-role.js");

const { create, deletePlan, allRoles, updatePlan } = require("../controller/jymplans.js");

const jymplans = express.Router();

jymplans.get("/allplans", checkAuth, authRole("super"), allRoles);
jymplans.post("/create", checkAuth, authRole("super"), create);
jymplans.put("/update/:id", checkAuth, authRole("super"), updatePlan);
jymplans.delete("/delete/:id", checkAuth, authRole("super"), deletePlan);

module.exports = jymplans;
