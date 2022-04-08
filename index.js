import express from "express";
import auth from "./services/Auth.js";
import router from "./server/routes/greetApi.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()
const mongoUri = process.env.MONGO_URI


const app = express();

mongoose.connect(mongoUri,{useNewUrlParser: true, useUnifiedTopology: true}, function () {
  console.log("Connected to database");
});



app.use(express.json()); // this is added because I'm getting info from the body so it does the same thing as the parce function
app.use("/greet/:user", auth); // this means is that if you see this path transfer the request to the Auth
app.use("/greet", router); // this means the if request in being made with the /greet transfer it to the router file

const PORT = process.env.MONGO_URI;
app.listen(PORT, function () {
  console.log("Up and running on port:" + PORT);
});
