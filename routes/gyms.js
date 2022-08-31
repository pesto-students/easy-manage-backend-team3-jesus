const express = require("express");
const checkAuth = require("../middleware/check-auth.js")

const {signUp, deleteUser, login, allAccounts }  = require('../controller/accountsdata.js')

const gyms = express.Router();

gyms.get("/allusers", allusers);
gyms.get("/allemploys", allemploys);
gyms.get("/allmembers", allmembers);
gyms.get("/view/:uuid", user);
gyms.put("/view/:uuid/update", userupdate);
gyms.post("/create", create);
gyms.post("/createUser", createUser);

gyms.delete("/user/:uuid/delete/", deleteUser);



module.exports = accountsDataRouter;
