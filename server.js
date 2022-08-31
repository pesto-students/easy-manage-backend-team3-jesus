const express = require("express");
const bodyParser = require("body-parser")
require('dotenv').config();

const cors = require("cors")

const db = require("./models")

const router = require("./routes/users.js");
const accountsDataRouter = require("./routes/accountsdata.js");

const app = express();
const port = process.env.PORT || 5000;
const { sequelize } = require("./models");

// db.sequelize.sync().then((req) => {
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/api/",router);
  app.use("/user/",accountsDataRouter);

  app.get("/", (req, res) => res.send("Hello Jym Space!"));
//   // app.all("*", (req, res) => res.send("That route dosen't exist"));
//   app.listen(port, () => console.log(`Sever is listening on port ${port}!`));
// });

app.listen({ port: port }, async () => {
  // console.log("Server set up on http://localhost:5000");
  // await sequelize.sync({ force: true });
  // console.log("Database synced!");
  await sequelize.authenticate();
  console.log("Database Connected!");
});
