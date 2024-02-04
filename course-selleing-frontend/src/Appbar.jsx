import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function Appbar() {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);

    useEffect(() => {
        function callback1(data){
            if(data.username) {
                setUsername(data.username)
            }
            console.log(data)
        }

        function callback(res){
            res.json().then(callback1)
        }

        fetch('http://localhost:3000/admin/me', {
            method: 'GET',
            headers: {
                "Authorization": "Bearer "+ localStorage.getItem("token")
            }
        }).then(callback)
    },[]);

    if(username) {
        return <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '4px'
        }}>
            <div>
                <Typography variant={'h5'}>CourseEra</Typography>
            </div>
            <div style={{
                display:'flex'
            }}>
                <center style={{
                    margin: 10,
                    fontSize: 15,
                    borderRadius: '50px',
                    minWidth: 50,
                    minHeight: 20,
                    backgroundColor:"lightblue",
                    color:'aliceblue',
                    padding:5
                }}>{username}</center>
                <Button onClick={() => {
                    localStorage.setItem("token", null);
                    window.location = '/'
                    alert("logged out!")
                }}>Logout</Button>
            </div>
        </div>
    }

    return <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px'
    }}>
        <div>
            <Typography variant={'h5'}>CourseEra</Typography>
        </div>
        <div>
            <Button onClick={() => {
                navigate("./signup");
            }}>Sign up</Button>
            <Button onClick={() => {
                navigate("./signin");
            }}>Sign in</Button>
        </div>
    </div>
}

export default Appbar;