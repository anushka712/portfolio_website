import React from 'react'


const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row text-center justify-between text-white lg:pl-52 lg:pr-44 pt-2 pb-8'>
      <p className='text-center'> {new Date().getFullYear()}All Rights Reserved </p>
      <p>Developed By <span className='text-blue-400'>Anushka Aryal</span></p>
    </div>
  )
}

export default Footer
