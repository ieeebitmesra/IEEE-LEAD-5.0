import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkModeToggle from './DarkModeToggle'
const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex justify-around gap-8 items-center glassmorphism bg-transparent">
      
      <div className="flex max-w-screen-xl flex-col overflow-hidden px-4 py-4 md:mx-auto md:flex-row md:items-center items-center">
      <NavLink to='/' className="flex items-center whitespace-nowrap text-2xl font-black">
          
          
          <span>Home</span>
        </NavLink>
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label className="absolute top-5 right-7 cursor-pointer md:hidden" htmlFor="navbar-open">
          {/* <span className="sr-only">Toggle Navigation</span> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <nav aria-label="Header Navigation" className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-start">
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
            <li className="text-gray-600 font-semibold md:mr-12 hover:text-blue-600">
              <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "" }>
          About
        </NavLink></li>
            <li className="text-gray-600 font-semibold md:mr-12 hover:text-blue-600"><NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : ""}>
          Projects
        </NavLink></li>
            <li className="text-gray-600 font-semibold md:mr-12 hover:text-blue-600"><NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600" : ""}>
          Codeforces profile
        </NavLink></li>

            <DarkModeToggle/>
          </ul>
        </nav>
      </div>
  </header>
  )
}

export default Navbar
