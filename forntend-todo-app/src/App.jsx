// import './App.css' 

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState({
    title: "Gym",
    description: "Go to gym from 5-7",
    id: 1
  });

  setInterval(() => {
    setTodo({
      title: "Eat",
      description: "Go and eat from your plate",
      id: 2
    })
  },2000);


  return (
    <>
      <h1>ToDo Application</h1>
      <PersonName></PersonName>
      <TumHo fname={"Hanzala"} lname={todo.id}></TumHo>
      <h4>
        {todo.id} <span>) &nbsp;</span>
        {todo.title} <span>:- &nbsp;</span>
        {todo.description}
      </h4>
    </>
  )
}

function PersonName(){
  return <div><h2>Hanzala Ahmed</h2></div>
}

function TumHo(props){
  return <div><h2>{props.fname} {props.lname}</h2></div>
}

export default App
