import express, { application, json } from "express";
const app = express();
app.listen(8080, function () {
  console.log("server is listening to port 8080");
});
app.get("/me", (req, res) => {
  res.json({ Name: "John", age: 45, eyecolour: "hazel" });
});

app.post("/me", (req, res) => {
  console.log(req.body);
  res.json({ message: "hello, World!" });
});
app.use(express.json());

const form = document.querySelector("form");
app.post("localhost:5500", (req, res) => {
  res.json({ Name: "Name", Email: "Email", Message: "Message" });
});
app.use(express.json);
