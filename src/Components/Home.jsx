import React from 'react'
import self from '../assets/self.png';
import { FaCaretRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div
    name="home"
    className=" h-screen w-full bg-black mb-0"
  >
 <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
    <div 
     className="flex flex-col justify-center pt-212px h-full">
      <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm afrontend developer</h2>
      <p className="text-gray-500 py-4 max-w-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, a!</p>

      <div>
      <button  className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-500 cursor-pointer'>Portfolio

      <span className="group-hover:rotate-90 duration-300">
                <FaCaretRight size={25} className="bg-blue-500 " />
              </span>
              </button>
              </div>
    </div>

    <div>
          <img
            src={self}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/4  md:w-full"
          />
        </div>

  </div>
</div>
)
}
export default Home
