import React from 'react'
import css from '../assets/css.png';
import html from '../assets/html.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import tl from '../assets/tailwind.png';
import ts from '../assets/typescript.png';
import vs from '../assets/vscode.png';

const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: html,
      },
      {
        id: 2,
        src: css,
      },
      {
        id: 3,
        src: js,
      },
      {
        id: 4,
        src: tl,
      },
      {
        id: 5,
        src: ts,
      },
      {
        id: 6,
        src: vs,
      },
      
      {
        id: 7,
        src: react,
      },
    ];
  
    return (
      <div
        name="portfolio"
        className=" port bg-black w-full text-white md:h-screen"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  

export default Portfolio
