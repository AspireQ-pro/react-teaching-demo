import {Card,CardContent,Typography} from '@mui/material';
import { Button,TextField } from '@mui/material';
import { useState } from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';

function LoginForm({onClose}){
    const [formData,setFormData]=useState({username:'',password:''});
    const [error,setError]=useState('');


    const handleClick=()=>{
        window.location.href='https://accounts.google.com';
    }

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!formData.username || !formData.password){
            setError('Please fill in all fields');
            return;
        }
        setError('');
        alert('Form submitted successfully');
        onClose();
    }
    return (
        <div style={{width:300,padding:20}}>
           

            <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:20}}>
                <Typography variant="h5" component="div" gutterBottom>Login Form</Typography>
                <IconButton onClick={handleClick}>
                    <GoogleIcon />
                </IconButton>
            </div>
            

            <form onSubmit={handleSubmit}>
                <TextField label="Username" name="username" variant="outlined" fullWidth margin="normal" required onChange={handleChange}/>
                <TextField label="Password" name="password" type="password" variant="outlined" fullWidth margin="normal" required onChange={handleChange}/>

                {error && <Typography color="error" variant="body2">{error}</Typography>}
                <Button variant="contained" color="primary" type="submit" fullWidth>Submit</Button>
                <Button variant="text" color="secondary" fullWidth onClick={onClose}>Cancel</Button>
            </form>


        </div>
    )
}

export default LoginForm;