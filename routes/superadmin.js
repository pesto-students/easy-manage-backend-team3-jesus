const express = require("express");
const checkAuth = require("../middleware/check-auth.js");

const {
  signUp,
  deleteUser,
  login,
  allAccounts,
} = require("../controller/superadmin.js");
const { signUpGym, allAccountsGym } = require("../controller/gyms.js");

const superadmin = express.Router();

superadmin.get("/allAccounts", checkAuth, allAccounts);
superadmin.get("gym/allAccounts", checkAuth, allAccountsGym);
superadmin.post("/asiuahgsfuyd876skdasudh/signup", signUp);
superadmin.post("/gym/signup", checkAuth, signUpGym);
superadmin.post("/login", login);
superadmin.delete("/asiuahgsfuyd876skdasudh/delete/:uuid", deleteUser);

module.exports = superadmin;
