const express = require("express");

const {signUp, deleteUser }  = require('../controller/accountsdata.js')

const accountsDataRouter = express.Router();

accountsDataRouter.post("/signup", signUp);
accountsDataRouter.delete("/delete/:uuid", deleteUser);

module.exports = accountsDataRouter;
