import React from "react";
import { NavLink } from "react-router-dom";

import ecom from "../assets/ecom.png";
import crud from "../assets/crud.png";
import expense from "../assets/expense.png";
import todo from "../assets/todo.png"

const Project = () => {
  return (
    <>
      <div className=" p-2 lg:pl-52 lg:pr-44 pt-8">
        <h2 className="font-bold text-2xl">Projects</h2>
        <p>Here are some of the projects I've wroked on.</p>

        <div className="flex flex-col lg:flex-row gap-12 py-8 my-8 border border-gray-800 hover:scale-105 duration-200">
          <div>
            <NavLink to="https://ecommerce-website-ecom.vercel.app/">
              <img src={ecom} alt="project-html" className="pl-2 w-64" />
            </NavLink>
          </div>

          <div>
            <NavLink to="https://ecommerce-website-ecom.vercel.app/">
              <p className="pb-4 font-bold">
                Ecommerce Website using html,css, js and react.
              </p>
              <p className="text-gray-400">
                Discover endless possibilities at . Shop fashion, gadgets, and
                more with confidence. Your one-stop shop for convenience and
                quality. Start shopping now!
              </p>
            </NavLink>
          </div>
        </div>


        
        <div className="flex flex-col lg:flex-row gap-12 py-8 my-8 border border-gray-800 hover:scale-105 duration-200">
          <div>
            <NavLink to="https://crud-frontend-iota.vercel.app">
              <img src={crud} alt="project-html" className="pl-2 w-64" />
            </NavLink>
          </div>

          <div>
            <NavLink to="https://crud-frontend-iota.vercel.app">
              <p className="pb-4 font-bold">
              Implementation of react, express and mysql.
              </p>
              <p className="text-gray-400">
              This project integrates React for the frontend, offering a dynamic user interface; Express for the backend, handling server-side logic and API routes; and MySQL for database management, storing and retrieving application data. The combination creates a seamless application with responsive UI, efficient server operations, and reliable data storage.
              </p>
            </NavLink>
          </div>
        </div>




        
        <div className="flex flex-col lg:flex-row gap-12 py-8 my-8 border border-gray-800 hover:scale-105 duration-200">
          <div>
            <NavLink to="https://expense-tracker-anushka.vercel.app">
              <img src={expense} alt="project-html" className="pl-2 w-64" />
            </NavLink>
          </div>

          <div>
            <NavLink to="https://expense-tracker-anushka.vercel.app/">
              <p className="pb-4 font-bold">
              A simple web application to track income and expenses.
              </p>
              <p className="text-gray-400">
              A simple web application to track income and expenses.
              </p>
            </NavLink>
          </div>
        </div>





        
        <div className="flex flex-col lg:flex-row gap-12 py-8 my-8 border border-gray-800 hover:scale-105 duration-200">
          <div>
            <NavLink to="https://todo-app-anushka.vercel.app">
              <img src={todo} alt="project-html" className="pl-2 w-64" />
            </NavLink>
          </div>

          <div>
            <NavLink to="https://todo-app-anushka.vercel.app/">
              <p className="pb-4 font-bold">
              Todo using html,css, js and react.
              </p>
              <p className="text-gray-400">
              A user-friendly To-Do website built with React, using HTML, CSS, and JavaScript. It helps you manage tasks with due dates and priority levels.
              </p>
            </NavLink>
          </div>
        </div>

      </div>
    </>
  );
};

export default Project;
