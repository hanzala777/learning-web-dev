import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
import { useState } from 'react';

function Addcourse(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    return <div>
        <center style={{
        paddingTop: 150,
        marginBottom: 10
        }}>
        <Typography variant={"h6"}>
            Add your courses below
        </Typography>
        </center>
        <center>
        <Card style={{width: 350}}>
            <div>
            <TextField label="Title" variant="outlined" style={{margin:10}} onChange={(e) => {setTitle(e.target.value)}}/> <br />
            <TextField label="Description" variant="outlined" style={{margin:10}} onChange={(e) => {setDescription(e.target.value)}}/> <br />
            <TextField label="Image Link" variant="outlined" style={{margin:10, marginTop:0}} onChange={(e) => {setImage(e.target.value)}}/> <br />
            <Button variant="contained" style={{margin:10, marginTop:0}} onClick={() => {
                function callback1(data){
                    alert("course added")
                }
                function callback(res){
                    res.json().then(callback1)
                }
                fetch("http://localhost:3000/admin/courses",{
                    method:"POST",
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
            }}>Add course</Button>
            </div>
        </Card>
        </center>
    </div>
}
export default Addcourse;