import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between py-2 text-orange-50 bg-orange-700'>
        <div className="logo">
            <span className='font-bold text-xl mx-8'>
                iTodo
            </span>
        </div>
        <ul className='flex gap-8 mx-9 '>
            <li className='hover:font-bold transition-all'><a href="">home</a></li>
            <li className='hover:font-bold transition-all'><a href="">aboutus</a></li>
            <li className='hover:font-bold transition-all'><a href="">contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
