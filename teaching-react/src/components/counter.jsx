//state management in react

// there are 3 state management
// local state
//global state
    //  1.Using react-redux
    //  2.Context API

//Local state
//Difference between state and props
//hooks-- useState
//Event Handling -- onClick, onChange
//Passing the data via event handlers


//what is state?
// is way to store and manage dynamic data in a component
//unlike props(pass from parent to child) , state is managed within the component only
//when state changes , the component re-renders or load again to reflect the changes

//hooks
//hooks are nothing but the functions only which is used for the state management



import { Button } from "@mui/material";
import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);//it is a hook 1 2 3

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }


 return(
    <>
    <h1>Counter</h1>
        <Button variant="contained" onClick={handleIncrement}>Increment</Button>
        <Button variant="tertiary" onClick={handleDecrement}>Decrement</Button>
    <h2>Count: {count}</h2>
    </>
)
};

export default Counter;
