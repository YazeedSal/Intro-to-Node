import mongoose from "mongoose";

const Schema = mongoose.Schema

const messageSchema = new Schema({

    text: String,
    senderId: Number,
    receivedId: Number,
    id:String,
    date: Date,
    isSeen: Boolean,
    isEdited: Boolean
})