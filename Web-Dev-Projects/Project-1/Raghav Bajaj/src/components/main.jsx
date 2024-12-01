import React from "react";
import { TypeAnimation } from "react-type-animation";
import Btt from "../assets/btt";
import Top from "./Top";

const main = () => {
  return (
    <section className="">
      <div className="">
        <Top />
      </div>
      <div id="main" className="pb-0 mb-0 mt-20">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col text-center justify-center items-center">
              <h1 className="text-4xl md:text-6xl font-semibold">
                It&apos;s <span className="text-shtxt">Raghav Bajaj</span>
              </h1>
              <h2 className="flex justify-center sm:text-4xl text-3xl pt-6">
                <TypeAnimation
                  sequence={[
                    "A Developer",
                    700,
                    "A Coder",
                    700,
                    "A Tech-Enthusiast",
                    700,
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{
                    fontSize: "1em",
                    paddingleft: "5px",
                  }}
                  repeat={Infinity}
                />
              </h2>
              <p className="mt-5 w-[300px] md:w-[370px]">
                Passionate full stack developer creating user-friendly web
                applications, blending creativity with technical skills for
                engaging online experiences.
              </p>
              <a
                className="pt-12"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Btt />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default main;
