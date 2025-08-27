import { useState } from 'react'
import './App.css'

import ProfileCard from './components/ProfileCard'
function Welcome(){
  return <h1>Welcome to the react app</h1>
}

function Button({label,color,onClick}){
  return  <button style={{backgroundColor:color}} onClick={onClick}>{label}</button>//in this it is html. so to add the javascript variable inside the html we will use { }
}


const handleclick=()=>{
  alert("Button clicked");
}

function Welcome1(props){
  return <h2>Hello, {props.name}! You are in the {props.role} role</h2>
}

//props --> properties
//unidirectional data flow -- only passed from parent to child 
//that are passed from parent to child components
//they are read-only so they cannot be changed

function App() {
//Jsx:=>(Javascript XML) writing a html inside the javascript
  return (
    <>
       
       <Welcome/>
       {/* <Welcome1 name="Sumedh" role="Developer"/>
       <Button label="Click Me" color="blue" onClick={handleclick}/> */}

       <ProfileCard name="Tejas" role="Developer"/>
    </>
  )
}

export default App
