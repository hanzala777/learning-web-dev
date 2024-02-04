import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography, Card, TextField, Button } from "@mui/material";

function Course() {
    let { courseId } = useParams();
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback1(data){
            setCourses(data.courses)
        }
        function callback(res){
            res.json().then(callback1)
        }
        fetch('http://localhost:3000/admin/courses/', {
            method: 'GET',
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback)
    },[])

    let course = null;
    for(let i=0; i<courses.length; i++){
        if(courses[i].id == courseId){
            course = courses[i]
        }
    }

    if(!course){
        return <div>
            <Typography variant="h3">
                LOADING . . .
            </Typography>
        </div>
    }
    return <div style={{
        display:"flex",
        flexWrap: 'wrap',
        justifyContent: 'center'
    }}>
        <CourseTable course={course} />
        <UpdateCard course={course} setCourses={setCourses} courses={courses} />
    </div>
}

function UpdateCard(props) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const course = props.course
    const courses = props.courses

    return <div>
        <center>
        <Typography variant={"h6"}>
            Update course details
        </Typography>
        </center>
        <center>
        <Card style={{width: 350}}>
            <div>
            <TextField label="Title" variant="outlined" style={{margin:10}} onChange={(e) => {setTitle(e.target.value)}}/> <br />
            <TextField label="Description" variant="outlined" style={{margin:10, marginTop:0}} onChange={(e) => {setDescription(e.target.value)}}/> <br />
            <TextField label="Image Link" variant="outlined" style={{margin:10, marginTop:0}} onChange={(e) => {setImage(e.target.value)}}/> <br />
            <Button variant="contained" style={{margin:10, marginTop:0}} onClick={() => {
                function callback1(data){
                    // alert("course updated")
                    let updatedCourses = [];
                    for(let i = 0; i < courses.length; i++){
                        if(courses[i].id == course.id){
                            updatedCourses.push({
                                id: course.id,
                                title: title,
                                description: description,
                                image: image 
                            })
                        } else {
                            updatedCourses.push(courses[i])
                        }
                    }
                    props.setCourses(updatedCourses)
                }
                function callback(res){
                    res.json().then(callback1)
                }
                fetch("http://localhost:3000/admin/courses/" + course.id,{
                    method:"PUT",
                    body: JSON.stringify({
                        title,
                        description,
                        image,
                        published: true
                    }),
                    headers: {
                        "content-type": "application/json",
                        "Authorization": "Bearer "+ localStorage.getItem("token")
                    }
                }).then(callback)
            }}>Update course</Button>
            </div>
        </Card>
        </center>
    </div>
}

function CourseTable(props) {
    const course = props.course
    return <Card style={{
        // border: "1px solid black",
        margin: 10,
        width: 300,
        minHeight: 200
    }}>
        <Typography textAlign={"center"} variant='h4'>
            {course.title}
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
            {course.description}
        </Typography>
        <img src={course.image} alt="purr" style={{minWidth:300, maxHeight:213}} />
    </Card>
}

export default Course;