import express from "express";
const app = express();

let count = 0;

app.get("/", (req, res) => {
  count++;
  res.send({'count': count});
});

app.get("/json", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
