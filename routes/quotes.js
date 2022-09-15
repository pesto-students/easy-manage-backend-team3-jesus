const express = require("express");
const checkAuth = require("../middleware/check-auth.js");
const authRole = require("../middleware/check-role.js");


const { submitQuote, getQuotes, getOneQuote, updateOneQuote, deleteOneQuote }  = require('../controller/quotes.js')


const quotes = express.Router();

quotes.post("/submit", submitQuote)
quotes.get("/get/all",  checkAuth, authRole("super"), getQuotes)
quotes.get("/get/:id",  checkAuth, authRole("super"), getOneQuote)
quotes.put("/update/:id",  checkAuth, authRole("super"), updateOneQuote)
quotes.delete("/delete/:id", checkAuth, authRole("super"),  deleteOneQuote)



module.exports = quotes;