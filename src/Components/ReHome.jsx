import React from 'react'
import self from '../assets/self.png';
import { AiOutlineMail } from "react-icons/ai";
import { FiLinkedin } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";

const ReHome = () => {
  return (
   <>
   <div className='flex  flex-col-reverse md:flex-row lg:flex-row lg:pl-52 lg:pr-4'>

    <div className='w-full  lg:w-1/2 pt-8 lg:pt-36 pl-6 lg:pl-0  '>
        
        <p className='text-blue-300 '>Hey there, <span>my name is </span></p>
        <p className='text-4xl font-bold py-3'>Anushka Aryal</p>
        <p className='text-3xl font-bold pb-4'><span className='text-yellow-400'>Frontend</span>
        <span className='text-blue-400'> Developer</span> </p>

        <div className='text-gray-400 pt-3 w-10/12'>I'm a frontend developer with a knack for transforming designs into intuitive and engaging user experiences. With a solid foundation in HTML, CSS, and JavaScript. 
       <p className='text-gray-400 pt-3'> Whether it's responsive layouts, interactive features, or performance optimization, I thrive on the challenge of creating polished web solutions that captivate audiences
        </p>
        </div>
    </div>

    <div className='flex justify-center'> <img
            src={self}
            alt="my profile"
            className=" rounded-2xl  w-2/4  md:w-full "
          />
          </div>
   </div>

   <div className='flex pl-6 pb-16  lg:pl-52 pt-12 lg:pt-0'>
          
      <a href="https://www.linkedin.com/in/anushka-aryal-27916722a/" target='_blank' className='hover:scale-105  duration-200'><FiLinkedin size={30} /></a>

        <a href="https://github.com/anushka712" target='_blank'  className='px-8 hover:scale-105  duration-200'><BsGithub size={30} /></a> 

        <a href="mailto:aryalanushka2020@gmail.com" target='_blank'
        className='hover:scale-105  duration-200'> <AiOutlineMail  size={30}/></a>
         
          </div>
   </>
  )
}

export default ReHome
