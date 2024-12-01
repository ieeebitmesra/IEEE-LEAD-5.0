import React from "react";
import { FaLinkedinIn, FaInstagram, FaGithubSquare } from "react-icons/fa";

const left = () => {
  return (
    <div className="fixed left-0 top-[450px] transform -translate-y-1/2 bg-gray-800 p-2 flex flex-col items-center gap-4 text-2xl cursor-pointer">
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
    </div>
  );
};

export default left;
