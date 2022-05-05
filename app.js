const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.send(a);
  //throw new Error("Error");
});

app.listen("4000", () => {
  console.log("app litening at port 4000");
});
