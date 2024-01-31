// import './App.css' 

import { useEffect, useState } from "react";

function useTodos() {
  const [todos, setTodos] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:3000/todos",{
      method: "GET",
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setTodos(data);
      })
    });

    setInterval(()=>{
      fetch("http://localhost:3000/todos",{
        method: "GET",
      }).then((res) => {
        res.json().then((data) => {
          console.log(data);
          setTodos(data);
        })
      });
    },1000);
  }, [])

  return todos;
}

function App() {

  const todos = useTodos();

  return (
    <div className='cont'>
      {todos.map(todo => {
        return <div>
          {todo.title} &nbsp;
          {todo.description} &nbsp;
          <button>Delete</button> <br /><br />
        </div>
      })}
    </div>
  )
}

export default App
