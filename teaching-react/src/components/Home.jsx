
import LoginForm from './LoginForm';
import LoginButton from './LoginButtton';
import {Drawer} from '@mui/material';
import { useState } from 'react';

function Home() {
  const [open,setOpen]=useState(false);
  return (
    <div>
      <LoginButton onClick={() => setOpen(true)} />

      <Drawer anchor="right" open={open} onClose={()=>setOpen(false)}>
        <LoginForm onClose={()=>setOpen(false)}/>
      </Drawer>

      

    </div>
  );
}

export default Home;