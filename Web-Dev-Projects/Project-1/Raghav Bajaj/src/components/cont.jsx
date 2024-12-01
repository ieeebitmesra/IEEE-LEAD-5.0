import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";

const cont = () => {
  return (
    <div
      id="contact"
      className="flex flex-col justify-center items-center my-12"
    >
      <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="text-3xl m-6 group relative w-max text-shtxt font-bold"
      >
        <span className="hover:text-neutral-50">Connect With Me!</span>
        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-shtxt group-hover:w-3/6"></span>
        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-shtxt group-hover:w-3/6"></span>
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className=" flex flex-wrap items-center justify-center gap-4 pt-6 text-white-50"
      >
        <a
          href="https://www.linkedin.com/in/raghavbajaj11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-1 rounded-xl p-3 border border-white-50 flex justify-center items-center">
            <FaLinkedinIn /> <span className="ml-2">LinkedIn</span>
          </div>
        </a>
        <a
          href="https://github.com/raghavb-11"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-1 rounded-xl p-3 border border-white-50 flex justify-center items-center">
            <FaGithub /> <span className="ml-2">GitHub</span>
          </div>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&to=raghavbajaj328@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="h-1 rounded-xl p-3 border border-white-50 flex justify-center items-center">
            <SiGmail /> <span className="ml-2">Mail</span>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default cont;
