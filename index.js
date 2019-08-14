const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const cors = require("cors");
const path = require("path");
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParse.json());

bodyParse.urlencoded({
  extended: true
});
const database = require("./database");
app.use(express.static(path.join(__dirname, "public")));
const EmployeRouter = require("./router/Employe.router");

app.use("/api/Employe", EmployeRouter);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index.html"));
});
app.listen(PORT, () => {
  console.log("app in ascolto alla porta ...", PORT);
});
