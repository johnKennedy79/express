// import our express app from the express node_modules
import express from "express";
//Instantiate our express app
const app = express();
//create an endpoint
app.get("/", function (request, response) {
  response.send("you are looking at my root route. How very dare you!");
});
//listen for port
app.listen(8080, function () {
  console.log("App is runing on port 8080");
});
//node boilerplate or set command in package scripts

//term command --watch server restarts server with every change

// enviromental variables
// npm install dotenv
// const superSecretThing = ""
// keeping api keys secret make a file .env add the file to .gitignore
//import dotenv from "dotend"
//dotenv.config();
// const superSecretThing = process.env.SUPER_SECRET_KEY;//get the variable from ,env
