const express = require("express");
const checkAuth = require("../middleware/check-auth.js");
const authRole = require("../middleware/check-role.js");

const { create, deleteRole, allRoles } = require("../controller/roles.js");

const roles = express.Router();

roles.get("/allroles", checkAuth, authRole("super"), allRoles);
roles.post("/create", checkAuth, authRole("super"), create);
roles.delete("/delete/:id", checkAuth, authRole("super"), deleteRole);

module.exports = roles;
