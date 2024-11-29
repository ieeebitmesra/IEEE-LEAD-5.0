import React, { useEffect } from 'react';
import weather2 from '../pages/photos/weather2.png'
import oldPort from '../pages/photos/oldPort.jpg'
import './Projects.css'
import CardHover from '../Components/CardHover';
const Projects = () => {
 return (
  <>
  <h1 className='projectss relative top-10 mt-16 text-6xl'>Projects</h1>
  <div className="mt-9"></div>
  <div className="container flex md:flex-row flex-col justify-around items-center relative z-[1]">
     <div className="card">
        <div className="slide slide1">
          <div className="content">
            <a href='https://axhatweatherapp.netlify.app/' className="icon ">
              <img src={weather2} className='h-full fa fa-user-circle' />
            </a>
          </div>
        </div>
        <div className="slide slide2 bg-white">
          <div className="content">
              <h3>Weather App</h3>
              <p>My first web application. This site can be used to check weather of any place in realtime using openweather api to fetch data.</p>
          </div>
        </div>
     </div>
     <div className="card">
        <div className="slide slide1">
          <div className="content">
            <a href='https://akshatguptaportfolio.netlify.app/' className="icon">
              <img src={oldPort} className='h-full fa fa-user-circle' />
            </a>
          </div>
        </div>
        <div className="slide slide2 bg-white">
          <div className="content">
              <h3>Portfolio website</h3>
              <p>This is my old portfolio website which i made earlier while learning web-development.</p>
          </div>
        </div>
     </div>
  </div>
  </>
  );
};

export default Projects;
