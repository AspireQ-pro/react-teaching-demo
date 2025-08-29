import { useState } from 'react'
import './App.css'
import VegliImage from "./assets/vegli_image.jpg"
import Teja from "./assets/Tejas_lava.png"
import ProfileCard from './components/ProfileCard'
// import AboutUs from './components/AboutUs'
import Counter from './components/counter'
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


const students = [
  { id: 1, name: "Tejas", role: "Developer" , image: Teja},
  { id: 2, name: "Sumedh", role: "Developer" , image: VegliImage},
  { id: 3, name: "Atul", role: " Developer" , image: Teja},
  { id: 4, name: "Rajshree", role: "Developer" , image: Teja},
  { id: 5, name: "Akshay", role: "Developer" , image: Teja}
];

function App() {
//Jsx:=>(Javascript XML) writing a html inside the javascript
  return (
    <>
       
       <Welcome/>
       <div style={{display:"flex", justifyContent:"space-between",gap:"10px"}}>
         {students.map((student,index)=>(
            <ProfileCard key={index} id={student.id} name={student.name} role={student.role} image={student.image}/>
         ))}
       </div>
       {/* <Welcome1 name="Sumedh" role="Developer"/>
       <Button label="Click Me" color="blue" onClick={handleclick}/> */}
       <Counter/> 

    </>
  )
}

export default App
