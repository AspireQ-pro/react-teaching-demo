import LoginButton from "./LoginButtton"; 
import LoginForm from "./LoginForm";
import {useState} from "react";

function Header() {
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #dee2e6'
    }}>


      <h1 style={{ margin: 0, color: '#333' }}>React App</h1>

     

    </header>
     <div style={{ display: 'flex', gap: '1rem' }}>
        {
          !showLogin? (
            <LoginButton onClick={() => setShowLogin(true)} />
          ) : (
            <LoginForm onClose={() => setShowLogin(false)} />
          )
        }
      </div>
    </>
    
    
  );
}

export default Header;