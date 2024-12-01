import React from "react";
import { BsHeartFill } from "react-icons/bs";
import { motion } from "framer-motion";
import endpro from "../assets/endp.png";

const end = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-center items-center pt-6"
    >
      <div className="flex justify-center items-center">
        <img
          className="w-auto h-auto max-w-[160px] max-h-[160px]"
          src={endpro}
          alt="photo"
        />
      </div>
      <div className="pt-4 text-shtxt text-xl">Raghav Bajaj</div>
      <div className="pt-1">Crafting Experiences, Shaping Tomorrow</div>

      <div className="pt-6 max-w-[700px] text-center text-neutral-400">
        I love making connections with others who share my enthusiasm. Whether
        you have a project idea, need some help, or just want to chat, feel free
        to reach out!
      </div>
      <div className="pt-6 pb-8 flex flex-row items-center">
        Crafted with <BsHeartFill className="ml-1 mr-1" />
        by Raghav Bajaj
      </div>
    </motion.div>
  );
};

export default end;
