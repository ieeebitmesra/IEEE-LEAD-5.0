import React from "react";
import { motion } from "framer-motion";
import { EDUCATION } from "../const";

const edu = () => {
  return (
    <div id="education" className="pb-4 min-h-screen">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="mb-20 text-center text-4xl text-shtxt"
      >
        Education
      </motion.h1>
      <div>
        {EDUCATION.map((education, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm font-semibold">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {education.role}
                <div className="text-sm text-shtxt">{education.clg}</div>
              </h6>
              <p className="mb-4">{education.disc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default edu;
