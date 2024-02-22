import { useState } from 'react'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
      <Navbar></Navbar>
      <div className="container mx-auto bg-orange-200 my-5 rounded-xl p-5 min-h-[75vh]">
        <div className="addTodo w-[50%] my-5">
          <h2 className='text-xl font-bold'>Add a todo</h2>
          <div className='flex'>
            <input type="text" placeholder=' Enter your todo' className='bg-orange-50 w-[50%] rounded-md' />
            <button className='mx-6 p-3 py-1 bg-orange-600 rounded-md hover:transform active:font-bold active:bg-orange-500'>Add</button>
          </div>
        </div>
        <h2 className='text-xl font-bold'>Your Todos</h2>
        <div className="todos">
          <div className="todo flex">
            <div><input type="checkbox" className='mt-[1.5px]'/></div>
            <div className="text mx-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, et!</div>
            <div className="buttons">
              <button className='bg-orange-600 rounded-md w-10 mx-1 hover:transform active:font-bold active:w-11 active:bg-orange-500 '>Edit</button>
              <button className='bg-orange-600 rounded-md w-14 mx-1 hover:transform active:font-bold active:w-[60px] active:bg-orange-500 '>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
