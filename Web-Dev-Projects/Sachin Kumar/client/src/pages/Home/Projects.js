import React from "react";
import SectionTitle from "../../components/SectionTitle";

import { useSelector } from "react-redux";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;
  console.log(projects);
  return (
    <div id="projects">
      <SectionTitle title="Projects" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-10
                       ${
                         selectedItemIndex === index
                           ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-"
                           : "text-white"
                       }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <img
            src={projects[selectedItemIndex].image}
            alt="NO"
            className="h-64 w-72"
          />

          <div className="flex  flex-col gap-5 ">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>

            <p className="text-white">
              {projects[selectedItemIndex].description}
            </p>
            <div className="flex flex-row gap-5 mt-5">
              <div onClick={() => {
                    window.open(
                      `https://${projects[selectedItemIndex].link}`,
                      "_blank"
                    );
                  }}  className="border border-tertiary py-3 px-10 cursor-pointer">
                <h1
                  
                  className="text-tertiary"
                >
                  Link
                </h1>
              </div>

              <div onClick={() => {
                    window.open(
                      `https://github.com/SKSingh0703`,
                      "_blank"
                    );
                  }} className="border border-tertiary py-3 px-10 cursor-pointer">
                <h1 className="text-tertiary">Github Repository</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
