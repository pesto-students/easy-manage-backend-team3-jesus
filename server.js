const express = require("express");
const bodyParser = require("body-parser")
require('dotenv').config();

const cors = require("cors")


const router = require("./routes/users.js");
const superadmin = require("./routes/superadmin.js");
const roles = require("./routes/roles.js");
const jymplans = require("./routes/jymplans.js");
const gyms = require("./routes/gyms.js");
const users = require("./routes/users.js");

const app = express();
const port = process.env.PORT || 5000;
const { sequelize } = require("./models");


  app.use(bodyParser.json());
  app.use(cors());

  app.use("/api/",router);
  app.use("/superadmin/",superadmin);
  app.use("/superadmin/roles",roles);
  app.use("/superadmin/jymplans",jymplans);
  app.use("/gym/",gyms);
  app.use("/users/",users);


  app.get("/", (req, res) => res.send("Hello Jym Space!"));


app.listen({ port: port }, async () => {

  await sequelize.sync({ force: true });
  console.log("Database synced!");
  // await sequelize.authenticate();
  // console.log("Database Connected!");
});
