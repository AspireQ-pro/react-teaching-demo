import { useState } from 'react'
function TodoList({ todos }) {
    const [todo,setTodo]=useState([]) ;
    const [newTodo,setNewTodo]=useState("");

    const addTodo = () => {
        setTodo([...todo,newTodo]);
        setNewTodo("");
    };
    
  return (
    <div>
        <h2>Todo List</h2>
        <input type="text" placeholder="Add a new todo" onChange={(e) => setNewTodo(e.target.value)} value={newTodo}/>
        <button onClick={addTodo}>Add</button>
        <ol>
            {todo.map((item,index)=>(<li style={{backgroundColor:"white",color:"black"}} key={index}>{item}</li>))}
        </ol>
    </div>
  );
}

export default TodoList;
