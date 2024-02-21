import { useState } from 'react'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto bg-orange-200 my-5 rounded-xl p-5">
        <div className="addTodo">
          <h2 className='text-xl font-bold'>Add a todo</h2>
          <input type="text" placeholder='Enter your todo' className='bg-orange-100' />
          <button>Add</button>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo">

          </div>
        </div>
      </div>
    </>
  )
}

export default App
