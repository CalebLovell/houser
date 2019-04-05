const express = require("express");
require("dotenv").config();
const session = require("express-session");
const massive = require("massive");
const controller = require("./controller");

const app = express();
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("database connected");
});

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 365
    }
  })
);

app.get("/api/houses", controller.getHouses);
app.delete("/api/house/:id", controller.deleteHouse);
app.put("/api/house/:id", controller.editHouse);

app.get("/api/house/:id", controller.getHouse); // extra for practice

app.listen(SERVER_PORT, () => {
  console.log(`server up and running on port: ${SERVER_PORT}`);
});
