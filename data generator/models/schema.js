import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    name: String,
    lang: String,
    isDone: Boolean,
    time: Number
});

export const Course = mongoose.model('course', courseSchema)
 