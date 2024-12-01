import React, { useState } from "react";
//import { FaLinkedinIn, FaInstagram, FaGithubSquare } from "react-icons/fa";
import Progress from "./util/progress";

const Top = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="">
      <Progress />
      <nav className=" flex items-center justify-between py-8">
        <div className="flex flex-shrink-0">
          <a href="/" rel="noopener noreferrer">
            <h1 className="max-px-10 text-xl font-semibold">
              RaghavBajaj<span className="text-shtxt">.dev</span>
            </h1>
          </a>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-8 cursor-pointer hidden md:flex">
          <a
            href="#about"
            className="text-lg relative group hover:text-gray-400 transition-all duration-300"
          >
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shtxt group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#education"
            className="text-lg relative group hover:text-gray-400 transition-all duration-300"
          >
            Education
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shtxt group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#projects"
            className="text-lg relative group hover:text-gray-400 transition-all duration-300"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shtxt group-hover:w-full transition-all duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-lg relative group hover:text-gray-400 transition-all duration-300"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-shtxt group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        {/*
        <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
          <a
            href="https://www.linkedin.com/in/raghavbajaj11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/raghavb-11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>

          <a
            href="https://instagram.com/raghav.b_11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div> */}
      </nav>
    </section>
  );
};
export default Top;
