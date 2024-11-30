import React from 'react';
import id1 from '../assets/id1.png';
import id2 from '../assets/id2.png';
import id3 from '../assets/id3.png';
import id4 from '../assets/id4.png'

const projects = [
    {
        id: 1,
        name: "IETE Project",
        technologies: "HTML, CSS and JS",
        image: id1,
        github: "https://github.com/affanraza84/ieteProject/tree/main/ieteProject",
    },
    {
        id: 2,
        name: "Animated Website",
        technologies: "HTML, CSS, JS and GSAP",
        image: id2,
        github: "https://github.com/affanraza84/animatedWebsite",
    },
    {
        id: 3,
        name: "Netflix Clone", 
        technologies: "HTML, CSS and JS",
        image: id3,
        github: "https://github.com/affanraza84/netflixClone",
    },
    {
        id: 4,
        name: "Data Analytics Process",
        technologies: "HTML and CSS",
        image: id4,
        github: "https://github.com/affanraza84/Data-Analytics-Process",
    },
];

const Projects = () => {
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:py-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                    {projects.map(projects => (
                        <div key={projects.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg trasnform transition-transform duration-300 hover:scale-105'>
                            <img src={projects.image} alt={projects.name} className='rounded-ld mb-4 w-full h-48 object-cover' />
                            <h3 className='text-2xl font-bold mb-2'>{projects.name}</h3>
                            <p className='text-gray-400 mb-4'>{projects.technologies}</p>
                            <a href={projects.github} className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_blank' rel='noopener noreferrer'>Github</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects