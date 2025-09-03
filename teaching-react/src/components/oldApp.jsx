// import { useState } from 'react'
// import './App.css'
// import VegliImage from "./assets/vegli_image.jpg"
// import Teja from "./assets/Tejas_lava.png"
// import ProfileCard from './components/ProfileCard'
// // import AboutUs from './components/AboutUs'
// import Counter from './components/counter'
// import IdentityCard from './components/IdentityCard'
// import TodoList from './components/TodoList'
// // function Button({label,color,onClick}){
// //   return  <button style={{backgroundColor:color}} onClick={onClick}>{label}</button>//in this it is html. so to add the javascript variable inside the html we will use { }
// // }


// // const handleclick=()=>{
// //   alert("Button clicked");
// // }



// //props --> properties
// //unidirectional data flow -- only passed from parent to child 
// //that are passed from parent to child components
// //they are read-only so they cannot be changed


// const students = [
//   { id: 1, name: "Tejas", role: "Developer" , image: Teja},
//   { id: 2, name: "Sumedh", role: "Developer" , image: VegliImage},
//   { id: 3, name: "Atul", role: " Developer" , image: Teja},
//   { id: 4, name: "Rajshree", role: "Developer" , image: Teja},
//   { id: 5, name: "Akshay", role: "Developer" , image: Teja}
// ];

// //conditional rendering
// // function Welcome1({isRegistered}){
// //   if(isRegistered){
// //     return <h2>Hello , you are registered student.</h2>
// //   }
// //   return <h2>Welcome to the Aspireq</h2>
// // }

// //using ternary operator
// // function Welcome1({isRegistered}){
// //  return isRegistered ? <h2>Hello , you are registered student.</h2> : <h2>Welcome to the Aspireq</h2>;
// // }

// // function Welcome(){
// //   return <h1>Welcome to the Aspireq</h1>
// // }

// // var isRegistered = false;



// //Rendering the list

// const studentList=["Akshay","Tejas","Sumedh","Atul","Rajshree"];

// function App() {
//   const sList=[];
//        for (let i=0; i< studentList.length;i++){
//         sList.push(<li key={i}>{studentList[i]}</li>);
//        }
// //Jsx:=>(Javascript XML) writing a html inside the javascript
//   return (
//     <>
//        {/* <Welcome1 isRegistered={isRegistered}/> */}
//        <TodoList todos={studentList} />
//       {/* <ul>
//         {sList}
//       </ul>
//       <ul>
//         {studentList.map((student,index)=>(
//           <li key={index}>{student}</li>
//         ))}
//       </ul> */}

       
//        {/* <div style={{display:"flex", justifyContent:"space-between",gap:"10px"}}>
//          {students.map((student,index)=>(
//             <ProfileCard key={index} id={student.id} name={student.name} role={student.role} image={student.image}/>
//          ))}
//        </div> */}
//        {/* <Welcome1 name="Sumedh" role="Developer"/>
//        <Button label="Click Me" color="blue" onClick={handleclick}/> */}
//        {/* <Counter/>  */}
//        {/* <IdentityCard/> */}

       
//     </>
//   )
// }

// export default App
