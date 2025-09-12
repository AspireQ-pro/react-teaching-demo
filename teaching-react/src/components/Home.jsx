
import LoginForm from './LoginForm';
import LoginButton from './LoginButtton';
import {Drawer} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [open,setOpen]=useState(false);
   const navigate=useNavigate();
  return (
    <div>
      <LoginButton onClick={() => setOpen(true)} />

      <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <LoginForm onClose={()=>setOpen(false)}/>
      </Drawer>
      <h1>Home Page</h1>
      <button onClick={()=>navigate('/contact')}>Go to Contact</button>

    </div>
  );
}

export default Home;