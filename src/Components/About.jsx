import React from "react";
import html from '../assets/html.png';
import css from '../assets/css.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import vscode from '../assets/vscode.png';
import github from '../assets/github.png';
import git from '../assets/git.png';



const About = () => {
  const photos = [
    {
      id: 1,
     image:html,
     tagName:"HTML",
    },
    {
      id: 2,
      image:typescript,
      tagName:"TypeScript",
    },
    {
      id: 3,
      image:css,
      tagName:"CSS",
    },
    {
      id: 4,
     image:tailwind,
     tagName:"tailwindCss",
    },
    {
      id: 5,
      image:react,
      tagName:"React",
    },
   
    {
      id: 6,
      image:js,
      tagName:"JavaScript",
    },
  ];


  const tools =[
    {
      id: 1,
     image:vscode,
     tagName:"VsCode",
    },
    {
      id: 2,
      image:github,
      tagName:"GitHub",
    },
    {
      id: 3,
      image:git,
      tagName:"Git",
    },
  ];


  return (
    <>

    <div className="lg:pl-52 lg:pr-44 py-12 p-4">

      <p className="font-bold text-2xl">About</p>
      <p>Just a quick glimpse.</p>
<br />
      <div className="md:flex flex-row gap-16 ">
        <p className="font-bold py-3 hidden md:block ">About </p>
        
        <p className="text-gray-400">Hello there, <br />
      My name is Anushka  Aryal, and I'm a CSIT student with a burning passion for tech.
<br />
<br />
As a believer in seamless and accessible experiences, I'm constantly learning and experimenting. While professional projects haven't come my way yet, I'm actively seeking opportunities to collaborate and apply my skills.</p>
      </div>


      <div className="flex flex-col md:flex-row gap-16 py-12">
<p className="font-bold">Skills</p>
<div className="grid grid-cols-2 md:grid-cols-3">
{photos.map((photo) => (
  <div key={photo.id} className="flex flex-col items-center">
    <p className="text-gray-400">{photo.tagName}</p>
    <img 
      src={photo.image} 
      alt={`Image ${photo.id}`} 
      className="w-16 h-34 p-2"
    />
  </div>
))}
</div>
</div>


<div className="flex flex-col md:flex-row gap-16 md:gap-3">
  <p className="font-bold">Tools & <br /> Environments</p>
<div className="flex gap-4 pl-2">
{tools.map((photo) => (
  <div key={photo.id} className="flex flex-col items-center">
    <p className="text-gray-400">{photo.tagName}</p>
    <img 
      src={photo.image} 
      alt={`Image ${photo.id}`} 
      className="w-16 h-34 p-2"
    />
  </div>
))}
</div>
</div>

<div className="pt-20">

{/* present college */}
  <div className="flex flex-col lg:flex-row gap-2 pb-6  lg:gap-16">
  <p>Education</p>
  <p className="text-gray-400">Bachelor of Science in Computer Science and Information Technology (B.Sc.CSIT)
  Bachelor
<br />
Madan Bhandari Memorial College
<br />
Anamnagar, Kathmandu</p>
<p className="text-gray-400 pt-1">April 2018 - Present</p>
</div>


{/* 12 college */}
<div className=" gap-2 lg:pl-36 flex  flex-col lg:gap-48 lg:flex-row">
<p className="text-gray-400">School Leaving Certificate (SLC)
Science +2
<br />
Golden Gate International College
<br />
Battisputali, Kathmandu
</p>
<p className="text-gray-400 pb-6">April 2019 - April 2021</p>
</div>


<div className=" gap-2 lg:pl-36 flex  flex-col lg:gap-20 lg:flex-row ">
<p className="text-gray-400 pt-6">
Secondary Education Examination (SEE)
Primary Education
<br />
Adarsha English  Boarding  School
<br />
Galyang, Syangja
</p>
<p className="text-gray-400">March 2015 - April 2018</p>
</div>


</div>

    </div>
    </>
  );
};

export default About;