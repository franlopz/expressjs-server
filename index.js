import express from "express";
import bodyparser from 'body-parser'

const app = express();

let count = 0;
const logs = [];

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  count++;
  res.send(logs);
});

app.post("/", (req, res) => {
  count++;
  logs.push({
    date: new Date(),
    body: req.body,
    headers: req.headers,
  });
  res.send({ test: "yes" });
});

app.get("/reset", (req, res) => {
  count = 0;
  logs.length = 0;
  res.send({ message: "clear" });
});


app.get("/json", (req, res) => {
  res.json({ "Choo Choo": "Welcome to your Express app 🚅" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
