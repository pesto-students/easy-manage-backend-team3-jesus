const express = require("express");
const checkAuth = require("../middleware/check-auth.js")
const authRole = require("../middleware/check-role.js");


const { loginUser, updateUser }  = require('../controller/users.js')


const users = express.Router();


users.post("/login", loginUser)
users.put("/update/:id", checkAuth, authRole("user"), updateUser)



module.exports = users;
