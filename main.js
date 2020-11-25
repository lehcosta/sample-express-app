let childProcess = require("child_process");
let express = require("express");

let { PORT = 8080 } = process.env;

let app = express();

let color = getRandomColor();

app.get("/", (req, res) => {
  let hostname = childProcess.execSync("curl http://169.254.169.254/latest/meta-data/hostname", { encoding: "utf8" })
  res.set('Content-Type', 'text/html');
  res.send(new Buffer(`
    <html style="background-color:${color};">
      <h1>It works at ${hostname}</h1>
    </html>
  `));
})

app.listen(PORT)

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
