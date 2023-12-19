const express = require("express");
var app = express();
let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("app working on main funcations...");
});

app.get("/about", (req, res) => {
  res.send("hello about us");
});

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
