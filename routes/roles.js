const express = require("express");
const checkAuth = require("../middleware/check-auth.js");

const { create, deleteRole, allRoles } = require("../controller/roles.js");

const roles = express.Router();

roles.get("/allroles", checkAuth, allRoles);
roles.post("/create", checkAuth, create);
roles.delete("/delete/:id", checkAuth, deleteRole);

module.exports = roles;
