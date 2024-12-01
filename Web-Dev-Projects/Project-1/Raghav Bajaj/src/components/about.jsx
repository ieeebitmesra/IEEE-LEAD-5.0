import React from "react";
import { motion } from "framer-motion";
import prof from "../assets/pproo.png";
import Maxim from "./util/maxim";
import Rating from "./util/rating";

const about = () => {
  return (
    <div id="about" className="pb-4 pt-16 px-8 min-h-screen mt-0">
      <Maxim />
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center justify-center">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-4xl text-shtxt"
            >
              About Me
            </motion.h1>
            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-l py-8 text-left"
            >
              I&apos;m a second-year undergraduate student at Birla Institute of
              Technology, Mesra, pursuing a degree in Artificial Intelligence
              and Machine Learning. Alongside my academic journey, I&apos;m
              passionate about web development and Data Structures and
              Algorithms (DSA). I enjoy crafting scalable solutions and I&apos;m
              always looking for opportunities to apply my skills to real-world
              problems. Punctuality is a core strength of mine; I firmly believe
              that meeting deadlines is crucial to achieving success. To
              complement my studies, I continually seek opportunities for growth
              through online courses and workshops.
              <Rating />
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 items-center flex justify-center">
          <div className="flex justify-center lg:justify-start"></div>
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl w-auto max-h-96 h-auto"
            src={prof}
            alt="profilephoto"
          />
        </div>
      </div>
    </div>
  );
};

export default about;
