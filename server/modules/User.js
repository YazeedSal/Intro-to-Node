import { type } from "express/lib/response";
import mongoose from "mongoose";
const Schema = mongoose.Schema
const userSchema = new Schema({
    name : String,
    email: String,
    username: String,
    isLoggedIn: Boolean,
    lastLogIn: Number,
    password: String,
    // friends:[{type: Schema.}]
})

const User = mongoose.model('user',userSchema)
export default User

