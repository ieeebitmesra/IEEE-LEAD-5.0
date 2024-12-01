import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const Ic = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const int = () => {
  return (
    <div className="pb-16 min-h-screen">
      <h1 className="my-20 text-center text-4xl text-shtxt">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={Ic(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <RiReactjsLine className="text-7xl text-cyan-200" />
        </motion.div>
        <motion.div
          variants={Ic(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <RiTailwindCssLine className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={Ic(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </motion.div>
        <motion.div
          variants={Ic(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <FaNodeJs className="text-7xl text-green-600" />
        </motion.div>
        <motion.div
          variants={Ic(4.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div
          variants={Ic(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={Ic(5.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 p-4 border-neutral-600"
        >
          <SiMysql className="text-7xl text-cyan-600" />
        </motion.div>
      </div>
      <h2 className="my-10 text-center text-3xl text-shtxt">Interests</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="h-1 rounded-xl p-4 border-neutral-600 text-bold flex justify-center items-center bg-neutral-700 text-neutral-50 hover:bg-shtxt hover:text-black">
          Swimming
        </div>
        <div className="h-1 rounded-xl p-4 border-neutral-600 text-bold flex justify-center items-center bg-neutral-700 text-neutral-50 hover:bg-shtxt hover:text-black">
          Chess
        </div>
        <div className="h-1 rounded-xl p-4 border-neutral-600 text-bold flex justify-center items-center bg-neutral-700 text-neutral-50 hover:bg-shtxt hover:text-black">
          Badminton
        </div>
        <div className="h-1 rounded-xl p-4 border-neutral-600 text-bold flex justify-center items-center bg-neutral-700 text-neutral-50 hover:bg-shtxt hover:text-black">
          Travelling
        </div>
        <div className="h-1 rounded-xl p-4 border-neutral-600 text-bold flex justify-center items-center bg-neutral-700 text-neutral-50 hover:bg-shtxt hover:text-black">
          Watching Movies
        </div>
      </div>
    </div>
  );
};

export default int;
