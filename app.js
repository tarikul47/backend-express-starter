const express = require("express");
const morgan = require("morgan");
const fs = require("fs");
const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  //res.send("Hello World");
  res.send(a);
  //throw new Error("Error");
});

app.get("/loop", (req, res, next) => {
  for (let i = 0; i <= 10; i++) {
    if (i === 5) {
      next("There was an error");
    } else {
      res.write("a");
    }
  }
  res.end();
});

app.get("/sync", (req, res, next) => {
  fs.readFile("/file-does-not-exist", (err, data) => {
    if (err) {
      next(err);
    } else {
      res.send(data);
    }
  });
});

app.get("/csync", [
  (req, res, next) => {
    fs.readFile("/file-does-not-exist", (err, data) => {
      console.log(data);
      next(err);
    });
  },
  (req, res, next) => {
    console.log(data.property);
  },
]);

app.get("/Customsync", (req, res, next) => {
  setTimeout(() => {
    try {
      console.log(b);
    } catch (err) {
      next(err);
    }
  }, 100);
});

app.get("/Customsyncwithouttry", (req, res, next) => {
  setTimeout(() => {
    console.log(b);
  }, 100);
});

app.use((req, res, next) => {
  //res.status(404).send("Not Found");
  next(new Error("Requested url not found"));
});

app.use((err, req, res, next) => {
  if (res.headersSent) {
    next("HeadersSent Error");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
});

app.listen("4000", () => {
  console.log("app litening at port 4000");
});
