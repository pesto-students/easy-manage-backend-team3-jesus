const express = require("express");
const checkAuth = require("../middleware/check-auth.js");
const authRole = require("../middleware/check-role.js");

const {
  signUp,
  deleteUser,
  login,
  allAccounts,
} = require("../controller/superadmin.js");
const {
  signUpGym,
  allAccountsGym,
  deleteGym,
  updateGym,
  getGym,
} = require("../controller/gyms.js");

const superadmin = express.Router();

superadmin.get("/allAccounts", checkAuth, authRole("super"), allAccounts);
superadmin.get(
  "/gym/allAccounts",
  checkAuth,
  authRole("super"),
  allAccountsGym
);

superadmin.post("/asiuahgsfuyd876skdasudh/signup", signUp);
superadmin.post("/gym/signup", checkAuth, authRole("super"), signUpGym);
superadmin.post("/login", login);
superadmin.delete("/asiuahgsfuyd876skdasudh/delete/:uuid", deleteUser);
superadmin.delete("/gym/delete/:id", checkAuth, authRole("super"), deleteGym);
superadmin.put("/gym/update/:id", checkAuth, authRole("super"), updateGym);
superadmin.get("/gym/get/:id", checkAuth, authRole("super"), getGym);

module.exports = superadmin;
