import React from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const links = [
      {
        id: 1,
        link: "home",
      },
      {
        id: 2,
        link: "about",
      },
      {
        id: 3,
        link: "project",
      },
      // {
      //   id: 4,
      //   link: "experience",
      // },
      {
        id: 5,
        link: "contact",
      },
    ];
  
    return (
      <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black sticky top-0 lg:pl-52 lg:pr-44 pt-4">
        <div>
          <NavLink to='/'> <h1 className="text-5xl font-signature ml-2 text-gray-400">Anushka</h1></NavLink>
          
        </div>
  
        <ul className="hidden md:flex">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <NavLink to={link}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
  
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
  
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <NavLink
                  onClick={() => setNav(!nav)}
                  to={link}
                >
                  {link}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

export default Navbar

