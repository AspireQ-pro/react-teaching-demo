import { React } from 'react'
import { useEffect,useRef,useContext,createContext ,useReducer} from 'react';

//useEffect
//use Ref
//useContext
//useReducer


//useEffect
//handles sideeffects in react functional components(Api calles,subscriptions,timers,manipulating DOM directly)

//runs after every render
//runs only once after initial render
//runs when specific state or prop changes

// useEffect(()=>{
//     return ()=>{
//         console.log("cleanup");
//     }
// },[])

//useRef
//used to access and manipulate DOM elements directly
//can hold mutable values that persist across renders without causing re-renders

// const inputRef=useRef(null);

// const handleFocus=()=>{
//     inputRef.current.focus();
// }

//useContext
//used to share data between components without prop drilling
//create a context
//provide data to the context
//consume data from the context

const UserContext=createContext();

function ChildComponent(){
    const user=useContext(UserContext);
    return <div>{user.name}</div>;
}
function ParentComponent(){
    const user={name:'John',age:30};
    return (
        <UserContext.Provider value={user}>
            <ChildComponent />
        </UserContext.Provider>
    )
}


//useReducer
function AddToCartReducer(state,action){
    switch(action.type){
        case 'increment':
            return {count:state.count+1};
        case 'decrement':
            return {count:state.count-1};
        default:
            return state;
    }
}

function WeatherForecasting(){
    const [state, dispatch] = useReducer(AddToCartReducer, {count: 0});
   
    return (
        <div>
            <h1>Weather Forecasting Component</h1>
            {/* <input ref={inputRef} type="text" placeholder="Focus me" /> */}
            {/* <button onClick={handleFocus}>Focus Input</button> */}
            <ParentComponent />
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <span>{state.count}</span>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        </div>
    )
}

export default WeatherForecasting;




