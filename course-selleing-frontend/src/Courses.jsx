import { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";


function Courses() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        function callback1(data){
            setCourses(data.courses)
        }
        function callback(res){
            res.json().then(callback1)
        }
        fetch('http://localhost:3000/admin/courses', {
            method: 'GET',
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(callback)
    },[])
    
    return <div style={{
            display:"flex",
            flexWrap: 'wrap',
            justifyContent: 'center'
        }}>
            {courses.map(course => {
                return <Course course={course} />
            })}
        </div>
}

export function Course(props){
    return <Card style={{
            // border: "1px solid black",
            margin: 10,
            width: 300,
            minHeight: 200
        }}>
            <Typography textAlign={"center"} variant='h4'>
                {props.course.title}
            </Typography>
            <Typography textAlign={"center"} variant="subtitle1">
                {props.course.description}
            </Typography>
            <img src={props.course.image} alt="purr" />
        </Card>
}

export default Courses;