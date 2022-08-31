const express = require("express");
const checkAuth = require("../middleware/check-auth.js")

const {signUp, deleteUser, login, allAccounts }  = require('../controller/accountsdata.js')

const accountsDataRouter = express.Router();

accountsDataRouter.get("/allAccounts", checkAuth, allAccounts);
accountsDataRouter.post("/signup", signUp);
accountsDataRouter.post("/login", login);
accountsDataRouter.delete("/delete/:uuid", deleteUser);



module.exports = accountsDataRouter;
