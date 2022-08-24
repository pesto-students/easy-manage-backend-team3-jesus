const express = require("express");

const {createUser, getUsers}  = require('../controller/users.js')

const router = express.Router();

// router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.get("/user", createUser);
// router.delete("/user/:id", deleteUser);
// router.put("/user/:id", updateUser);

module.exports = router;
