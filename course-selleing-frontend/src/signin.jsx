import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Card, Typography} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signin(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    return <div>
        <center style={{
        paddingTop: 150,
        marginBottom: 10
        }}>
        <Typography variant={"h6"}>
            Welcome again to courseEra, Sign up below
        </Typography>
        </center>
        <center>
        <Card style={{width: 350}}>
            <div>
            <TextField label="Username" variant="outlined" style={{margin:10}} onChange={(e) => {setUsername(e.target.value)}}/> <br />
            <TextField label="Password" type={'password'} variant="outlined" style={{margin:10, marginTop:0}} onChange={(e) => {setPassword(e.target.value)}}/> <br />
            <Button variant="contained" style={{margin:10, marginTop:0}} onClick={() => {
                function callback2(data) {
                    localStorage.setItem("token", data.token)
                    window.location = '/'
                }
                function callback(res) {
                    res.json().then(callback2);
                }
                fetch("http://localhost:3000/admin/login",{
                    method:"POST",
                    headers: {
                        "content-type": "application/json",
                        "username": username,
                        "password": password
                    }
                }).then(callback)
            }}>sign in</Button>
            </div>
        </Card>
        </center>
    </div>
}
export default Signin