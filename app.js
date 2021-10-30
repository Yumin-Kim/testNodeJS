const app = require("express")();

app.get("/", (req, res) => {
  res.send("<h1>Hello express</h1>");
});

app.listen(3000, () => {
  console.log("start");
});
