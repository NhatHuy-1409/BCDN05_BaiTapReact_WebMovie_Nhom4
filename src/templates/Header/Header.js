import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
export default function Header(props) {
  const headerRef = useRef(null);
  useEffect(() => {
    let shrinkHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('shrink');
      } else {
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll', shrinkHeader);
    }
  }, []);
  return (
    <div>
      <header ref={headerRef} className=" header-movie p-4 dark:bg-coolGray-800 dark:text-coolGray-100 shadow-xl	position: fixed w-full z-10 ">
        <div className="container flex justify-between h-16 mx-auto">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
            {/* <img src="https://cybersoft.edu.vn/wp-content/uploads/2017/03/MIN-OP1.png" alt="" /> */}
            <img src="./Images/logo-02-01.png" alt="" className='w-16  dark:text-violet-400 object-cover' />

          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <NavLink to='/home' href="#" className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400  hover:text-indigo-600"  activeClassName='border-b-2  border-indigo-600'>Home</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/movies' href="#" className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400  hover:text-indigo-600" activeClassName='border-b-2  border-indigo-600'>Movies</NavLink>
            </li>

            <li className="flex">
              <NavLink to='/bookingtickets' href="#" className="link-item flex text-lg font-bold items-center px-4 -mb-1 dark:border-transparent dark:text-violet-400 dark:border-violet-400  hover:text-indigo-600" activeClassName='border-b-2  border-indigo-600'>Booking Ticket</NavLink>
            </li>

          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className=" link-item self-center px-8 py-3 rounded text-base font-bold">Sign in</button>
            <button className="self-center px-6 py-2 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900 text-lg font-bold bg-indigo-600">Sign up</button>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-coolGray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>


    </div>
  )
}