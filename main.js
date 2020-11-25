let express = require("express");

let { PORT = 8080 } = process.env;

let app = express();

app.get("/", (req, res) => {
  res.send("It works!");
})

app.listen(PORT)
