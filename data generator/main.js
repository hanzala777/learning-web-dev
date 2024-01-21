import mongoose from "mongoose";
import express from "express";
import { Course } from "./models/schema.js";

let conn = await mongoose.connect("mongodb://localhost:27017/course");

const app = express();
const port = 3000;

let name = ["Hanzala", "Anshal", "Umair", "Daniyal"];
let lang = ["Python", "js", "c++", "java"];
let tf = [true, false]

let ran = (arr)=>{
    let a = Math.floor(Math.random() * (arr.length));
    return arr[a];
}

app.get("/", async (req, res) => {
  await Course.deleteMany({});
  for(let i = 0; i < 10; i++){
    const course = new Course({
        name: ran(name),
        lang: ran(lang),
        isDone: ran(tf),
        time:Math.floor(Math.random()*10)
      });
      course.save();
  }
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
