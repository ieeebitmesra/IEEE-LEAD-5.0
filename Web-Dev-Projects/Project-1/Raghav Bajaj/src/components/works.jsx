import React from "react";
import { motion } from "framer-motion";
import pra from "../assets/ppimg.png";

const works = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto p-5">
      <div className="pb-8">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-4xl mb-3 text-center text-shtxt"
        >
          Projects
        </motion.p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="border-2 transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#04c16] group rounded-md h-[350px] flex justify-center items-center bg-cover relative"
        >
          <img
            className="w-full absolute top-0 h-[200px]  object-cover"
            src={pra}
            alt="ppimg"
          />
          <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute h-[200px] inset-0 flex flex-col justify-center items-center">
            <div className="pt-8 text-center">
              <a href="/">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Live
                </button>
              </a>
              <a href="https://github.com/Raghavb-11/port">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  Code
                </button>
              </a>
            </div>
          </div>
          <div className="absolute top-[200px] bottom-0 left-0 right-0 text-white w-full py-2 text-center">
            Portfolio Website
            <div className="px-2">
              A creative showcase of who I am, what I do, and why I'm awesome!
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
              <div className="h-1 rounded-xl p-3 border-neutral-600 flex justify-center items-center bg-neutral-700 text-neutral-50">
                React
              </div>
              <div className="h-1 rounded-xl p-3 border-neutral-600 flex justify-center items-center bg-shtxt text-neutral-950">
                Tailwind CSS
              </div>
              <div className="h-1 rounded-xl p-3 border-neutral-600 flex justify-center items-center bg-neutral-700 text-neutral-50">
                Framer Motion
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default works;
