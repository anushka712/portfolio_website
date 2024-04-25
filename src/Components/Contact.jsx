import React from "react";

const Contact = () => {
  return (
   <>
   <div className="flex flex-col justify-center items-center pt-24 pb-24">
   <h2 className="py-4 text-2xl text-gray-400">Let's connect...</h2>
   <div className="border border-gray-900 p-8">
    <form action="https://formspree.io/f/xjvnerer" method="POST">
      <label htmlFor="name">Name</label>
      <br />
      <input
       type="text"
       name="name"
       placeholder="Your name..."
       className=" border border-gray-400  p-1 mt-2 lg:w-96 rounded-md"
       />
       <br />
       <br />
       

    <label htmlFor="email">Email</label>
      <br />
      <input 
      type="email"
      name="email"
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
    </form>
    </div>
    </div>
   </>
  );
};

export default Contact;