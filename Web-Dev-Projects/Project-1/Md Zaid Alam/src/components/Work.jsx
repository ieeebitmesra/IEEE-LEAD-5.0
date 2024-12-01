import { EXPERIENCES } from "../constants";

const Work = () => {
  return (
    <section id="experience">
      <h2 className="my-10 text-center text-3xl lg:text-8xl text-customText2">
        Work Experience
      </h2>
      <div className="mx-auto max-w-6xl">
        {EXPERIENCES.map((experience, id) => (
          <div key={id} className="mb-20 mx-4">
            <h2 className="font-medium lg:text-2xl">{experience.company}</h2>
            <div className="flex justify-between text-customText2">
              <p className="py-4 tracking-wide lg:text-xl font-normal">
                {experience.role}
              </p>
              <p className="py-4 lg:text-xl">{experience.year}</p>
            </div>
            <ul className="list-disc pl-6 text-customText font-normal">
              {experience.description.map((point, index) => (
                <li key={index} className="py-1">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
