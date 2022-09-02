const express = require("express");
const checkAuth = require("../middleware/check-auth.js");

const { create, deletePlan, allRoles, updatePlan } = require("../controller/jymplans.js");

const jymplans = express.Router();

jymplans.get("/allplans", checkAuth, allRoles);
jymplans.post("/create", checkAuth, create);
jymplans.put("/update/:id", checkAuth, updatePlan);
jymplans.delete("/delete/:id", checkAuth, deletePlan);

module.exports = jymplans;
