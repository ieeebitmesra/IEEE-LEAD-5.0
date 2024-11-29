import React from 'react'
import { skills, experiences } from '../constants'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section className='max-container h-auto relative z-[9]'>
      <h1 className='head-text'>
        Hello I'm <span className='blue-gradient_text font-semibold opacity-35-'>Akshat!</span>
      </h1>

      <TypeAnimation
        sequence={[
          'I am a web-developer',
          1000,
          'I am a front-end-developer',
          1000,
          'I am a Competitive programmer',
          1000,
          'I am a tech-enthusiast',
          1000
        ]}
        wrapper="span"
        speed={50}
        className="text-xl md:text-5xl sm:text-4xl mb-4 font-bold"
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="relative mt-24 py-9 px-8 font-poppins font-medium"
      >
        {/* Animated Border */}
        <svg
          className="absolute inset-0 w-full h-full -z-10 dark:inline hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <rect
            x="1"
            y="1"
            width="98"
            height="98"
            rx="5"
            ry="5"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1"
            strokeDasharray="6 4"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="20"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        {/* Text Content */}
        <div className="relative p-6 text-center rounded-lg shadow-lg">
          <p className="text-lg md:text-xl">
            Hello! I'm Akshat Gupta, a passionate Computer Science student at BIT
            Mesra, specializing in software development. With a knack for
            problem-solving and a love for competitive programming, I thrive on
            tackling complex challenges through innovative solutions. Outside of
            coding, I enjoy videography and exploring new ways to blend creativity
            with technology. I'm excited to share my journey and showcase my
            work—welcome to my portfolio!
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 15,
        }}
        className="mt-5 font-poppins font-medium"
      >
        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>
            My skills
          </h3>
          <div className='mt-16 flex flex-wrap gap-16'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20' key={skill.name}>
                <div className='btn-back rounded-xl' />
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='py-16'>
          <h3 className='subhead-text' id='skills'>Work Experience.</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
            <p>
              {/* Placeholder for work experience */}
            </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  className=''
                  key={experience.company_name}
                  date={experience.date}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,
                    boxShadow: 'none',
                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{ margin: 0 }}>
                      {experience.company_name}
                    </p>
                  </div>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
        </div>
      </motion.div>

      {/* Social Links Section */}
      <div className="mt-24 flex justify-center gap-10 py-10">
        <a href="https://www.instagram.com/your_username" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaInstagram size={40} />
        </a>
        <a href="https://www.linkedin.com/in/akshat-gupta-9b39992a7/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaLinkedin size={40} />
        </a>
        <a href="https://github.com/axhatggg" target="_blank" rel="noopener noreferrer" className="social-icon">
          <FaGithub size={40} />
        </a>
        <a href="mailto:akshatgupta9612@gmail.com" className="social-icon">
          <FaEnvelope size={40} />
        </a>
      </div>
    </section>
  )
}

export default About;
