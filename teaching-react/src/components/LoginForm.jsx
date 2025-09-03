import {Card,CardContent,Typography} from '@mui/material';
import { Button,TextField } from '@mui/material';


function LoginForm({onClose}){
    return (
        <>
        <Card>
            <CardContent>
                <Typography>Login Form</Typography>
                <form>
                    <TextField label="Username"  />
                    <TextField label="Password"  />
                    <TextField type="email"  />
                    <Button type="submit" >Login</Button>
                </form>
            </CardContent>
        </Card>
        </>
    )
}

export default LoginForm;