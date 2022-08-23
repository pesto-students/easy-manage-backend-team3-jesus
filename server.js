const express = require("express")
const bodyParser = require("body-parser")

const cors = require("cors")

const db = require("./models")

const router = require("./routes/users.js");

const app = express();
const port = process.env.PORT || 3000;

db.sequelize.sync().then((req) => {
  app.use(bodyParser.json());
  app.use(cors());

  app.use("/api/",router);

  app.get("/", (req, res) => res.send("Hello World!"));
  // app.all("*", (req, res) => res.send("That route dosen't exist"));
  app.listen(port, () => console.log(`Sever is listening on port ${port}!`));
});
