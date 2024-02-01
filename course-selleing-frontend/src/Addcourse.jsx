import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
import { useState } from 'react';

function Addcourse(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
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
            <TextField label="Description" variant="outlined" style={{margin:10, marginTop:0}} onChange={(e) => {setDescription(e.target.value)}}/> <br />
            <Button variant="contained" style={{margin:10, marginTop:0}} onClick={() => {
                fetch("http://localhost:3000/admin/courses",{
                    method:"POST",
                    body: JSON.stringify({
                        title,
                        description,
                        image: "",
                        published: true
                    }),
                    headers: {
                        "content-type": "application/json",
                        "username": username,
                        "password": password
                    }
                })
            }}>Add course</Button>
            </div>
        </Card>
        </center>
    </div>
}
export default Addcourse;