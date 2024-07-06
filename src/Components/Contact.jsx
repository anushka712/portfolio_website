import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Send form data to Formspree
      const response = await fetch('https://formspree.io/f/xjvnerer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        // Redirect to home page
        navigate('/');
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    };

  return (
   <>
   <div className="flex flex-col justify-center items-center pt-24 pb-24">
   <h2 className="py-4 text-2xl text-gray-400 font-bold">Let's connect...</h2>
   <div className="border border-gray-900 p-8">
   

  
    {/* <form action="https://formspree.io/f/xjvnerer" method="POST">
      <label htmlFor="name">Name</label>
      <br />
      <input
       type="text"
       name="name"
       placeholder="Your name..."
       required
       className=" border border-gray-400  p-1 mt-2 lg:w-96 rounded-md"
       />
       <br />
       <br />
       

    <label htmlFor="email">Email</label>
      <br />
      <input 
      type="email"
      name="email"
      required
      className="border border-gray-400 p-1 mt-2  lg:w-96 rounded-md"
      placeholder="Your email..."
      />
      <br />
      <br />


      <label htmlFor="email">Message</label>
      <br />
<input
 type="text"
 name="message"
 placeholder="Message"
 className="border border-gray-400 p-1 mt-2   lg:w-96 rounded-md"
 />
 <br />

<input type="submit"
 value="Submit"
 className="border border-gray-400 p-1 px-2 mt-4 cursor-pointer rounded-md"
 />
    </form> */}



<form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <br />
      <input
        type="text"
        name="name"
        placeholder="Your name..."
        required
        className="border border-gray-400 p-1 mt-2 lg:w-96 rounded-md"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="email">Email</label>
      <br />
      <input
        type="email"
        name="email"
        required
        className="border border-gray-400 p-1 mt-2 lg:w-96 rounded-md"
        placeholder="Your email..."
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <br />

      <label htmlFor="message">Message</label>
      <br />
      <input
        type="text"
        name="message"
        placeholder="Message"
        className="border border-gray-400 p-1 mt-2 lg:w-96 rounded-md"
        value={formData.message}
        onChange={handleChange}
      />
      <br />

      <input
        type="submit"
        value="Submit"
        className="border border-gray-400 p-1 px-2 mt-4 cursor-pointer rounded-md"
      />
    </form>



    </div>
    </div>
   </>
  );
};

export default Contact;