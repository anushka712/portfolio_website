import React from "react";

import ecom from '../assets/ecom.png';


const Project = () => {
  

  return (
    <>
    <div className=" p-2 lg:pl-52 lg:pr-44 pt-8">
     <h2 className="font-bold text-2xl">Projects</h2>
     <p>Here are some of the projects I've wroked on.</p>
     
     <div className="flex flex-col lg:flex-row gap-12 py-8 my-8 border border-gray-800 hover:scale-105 duration-200">
    <div>
      <img src={ecom} alt="project-html"
      className="pl-2 w-64"
      />
    </div>

    <div>
      <p className="pb-4 font-bold">Ecommerce Website using html,css, js and react.</p>
      <p className="text-gray-400">Discover endless possibilities at . Shop fashion, gadgets, and more with confidence. Your one-stop shop for convenience and quality. Start shopping now!
</p>
    </div>
     </div>


    </div>
    </>
  );
};

export default Project;