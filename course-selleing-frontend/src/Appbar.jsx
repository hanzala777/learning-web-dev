import { Typography } from "@mui/material";
import Button from "@mui/material/Button";

function Appbar() {
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
                window.location = '/signup'
            }}>Sign up</Button>
            <Button onClick={() => {
                window.location = '/signin'
            }}>Sign in</Button>
        </div>
    </div>
}

export default Appbar;