import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function Appbar() {
    const navigate = useNavigate();
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