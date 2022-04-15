import express from "express";
import auth from "./services/Auth.js";
import router from "./server/routes/chatApi.js";
import mongoose from "mongoose";
// import dotenv from "dotenv";
import User from "./server/modules/User.js";

// dotenv.config()
const mongoUri ='mongodb+srv://yazeed:yazeed@database0.4hmhw.mongodb.net/ChatApp?retryWrites=true&w=majority'


const u = new User({
    name: 'sameerrroo',
    email: "sammer@jkdnd",
    username: 'sameeriscool',
    isLoggedn : true,
    lastlogIn : 333,
    password : 'qweqwe',
})


// u.save().then(function (res) {
//     console.log('saved');
//     console.log(res);
// })

const app = express();

mongoose.connect(mongoUri,{useNewUrlParser: true, useUnifiedTopology: true}, function () {
  console.log("Connected to database");
});



app.use(express.json()); // this is added because I'm getting info from the body so it does the same thing as the parce function
app.use("/greet/:user", auth); // this means is that if you see this path transfer the request to the Auth
app.use("/greet", router); // this means the if request in being made with the /greet transfer it to the router file

const PORT = 8080;
app.listen(PORT, function () {
  console.log("Up and running on port:" + PORT);
});
