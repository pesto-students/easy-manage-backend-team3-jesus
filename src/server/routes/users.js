import express from "express";

import { getUsers, createUser, getUser, deleteUser, updateUser} from "../controllers/users.js";

const router = express.Router();

router.get("/user/:id", getUser);
router.get("/users", getUsers);
router.post("/user", createUser);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;