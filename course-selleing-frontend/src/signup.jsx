import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
import { useState } from 'react';

function Signup(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return <div>
        <center style={{
        paddingTop: 150,
        marginBottom: 10
        }}>
        <Typography variant={"h6"}>
            Welcome to courseEra, Sign up below
        </Typography>
        </center>
        <center>
        <Card style={{width: 350}}>
            <div>
            <TextField onChange={(e) => {setUsername(e.target.value)}} label="Username" variant="outlined" style={{margin:10}}/> <br />
            <TextField onChange={(e) => {setPassword(e.target.value)}} label="Password" type={'password'} variant="outlined" style={{margin:10, marginTop:0}}/> <br />
            <Button variant="contained" style={{margin:10, marginTop:0}} onClick={() => {
                fetch("http://localhost:3000/admin/signup",{
                    method:"POST",
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }}>Sign up</Button>
            </div>
        </Card>
        </center>
    </div>
}
export default Signup