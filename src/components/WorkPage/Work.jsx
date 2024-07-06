import React from 'react';
import Layout from '../../Layout';

function Card({ image, title, text, projectLink }) {
  return (
    <div className="max-w-sm bg-black text-white rounded overflow-hidden shadow-lg transition duration-300 transform hover:scale-105">
      <div className="relative">
        {image.endsWith('.mp4') ? (
          <video className="w-full" autoPlay loop muted playsInline>
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img className="w-full" src={image} alt="Project" />
        )}
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity duration-300"></div>
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base">{text}</p>
        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 py-2 px-4 bg-white text-black text-sm font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:text-black transition duration-300"
          >
            Visit my Project
          </a>
        )}
      </div>
    </div>
  );
}

function Work() {
  const projects = [
    {
      image: "CASIO.mp4",
      title: "Casio Animated Design",
      projectLink: "https://mega.nz/file/XOYz2KIR#GbnuQRHCgL6jOwfDrWa5DvzzTNtwPFZADATiXlwWauo"
    },
    {
      image: "monster.mp4",
      title: "Monster Animation",
      projectLink: "https://example.com/monster"
    },
    
    {
      image: "3.jpg",
      title: "Kisan Jam",
      
      projectLink: "https://example.com/project4"
    },
    {
      image: "4.jpg",
      title: "Ocean Water",
      text: "",
      projectLink: "https://example.com/project5"
    },
    {
      image: "green.jpg",
      title: "Matrix Syrum",
      text: "",
      projectLink: "https://example.com/project5"
    },
    {
      image: "wildstone.jpg",
      title: "wildstonee",
      text: "",
      projectLink: "https://example.com/project5"
    },
    {
      image: "bellavita.jpg",
      title: "Bellavita Body wash",
      text: "",
      projectLink: "https://example.com/project5"
    },
    {
      image: "ice coke.png",
      title: "Ice Coke",
      projectLink: "https://example.com/project9"
    },
    {
      image: "blue.png",
      title: "",
      projectLink: "https://example.com/project9"
    },
    {
      image: "zudio.png",
      title: "Oreo",
      projectLink: "https://example.com/project9"
    },

    {
      image: "coke.jpg",
      title: "Coke post.",
      text: "",
      projectLink: "https://example.com/project6"
    },
    {
      image: "lays.jpg",
      title: "Lays",
      text: "",
      projectLink: "https://example.com/project7"
    },
    {
      image: "peanut butter.png",
      title: "Peanut Butter",
      
      projectLink: "https://example.com/project10"
    }
    ,
    {
      image: "shades.jpg",
      title: "Movie Poster",
      
      projectLink: "https://example.com/project10"
    },
    {
      image: "sunscream.jpg",
      title: "Beauty Product",
      
      projectLink: "https://example.com/project10"
    },
    {
      image: "WOMEN.png",
      title: "Poster",
      
      projectLink: "https://example.com/project10"
    },
    {
      image: "PROTECT YOUR REAL BEAUTY WITH US.mp4",
      title: "Beauty Product",
      projectLink: "https://example.com/todo"
    },
    {
      image: "MOTOR CROSS.jpg ",
      title: "Project 8",
      
      projectLink: "https://example.com/project8"
    },
    {
      image: "oreo.jpg",
      title: "Oreo",
      projectLink: "https://example.com/project9"
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <div className="flex flex-wrap justify-center items-center space-x-4 p-4">
          {projects.map((project, index) => (
            <Card 
              key={index}
              image={project.image}
              title={project.title}
              text={project.text}
              projectLink={project.projectLink}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Work;
