const express = require("express");

const {createUser, getUsers}  = require('../controller/users.js')

const router = express.Router();

// router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.post("/user", createUser);
// router.delete("/user/:id", deleteUser);
// router.put("/user/:id", updateUser);

module.exports = router;
