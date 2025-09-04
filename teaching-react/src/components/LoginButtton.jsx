import {Button} from "@mui/material";

function LoginButton({onClick}){
    return(
        <Button onClick={onClick} variant="contained" color="primary" >Login</Button>
    )
}

export default LoginButton; 