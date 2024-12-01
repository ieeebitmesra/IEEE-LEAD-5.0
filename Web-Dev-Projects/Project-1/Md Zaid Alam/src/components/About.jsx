import { ABOUT, EDUCATION } from "../constants";

const About = () => {
  return (
    <section id="about" className="py-6"> {/* Reduced vertical padding */}
      <h2 className="my-6 text-center text-3xl lg:text-8xl text-customText2"> {/* Reduced top and bottom margin */}
        About Me
      </h2>
      <div className="flex items-center justify-center">
        <p className="m-6 max-w-6xl text-3xl lg:text-6xl">{ABOUT}</p>
      </div>

      {/* Education Section */}
      <h2 className="my-6 text-center text-3xl lg:text-6xl text-customText2"> 
        Education
      </h2>
      <div className="mx-auto max-w-6xl">
        {EDUCATION.map((education, id) => (
          <div key={id} className="mb-10 mx-4">
            <h2 className="font-medium lg:text-2xl">{education.institution}</h2>
            <div className="flex justify-between text-customText2">
              <p className="py-4 tracking-wide lg:text-xl font-normal">
                {education.degree}
              </p>
              <p className="py-4 lg:text-xl">{education.year}</p>
            </div>
            <ul className="list-disc pl-6 text-customText font-normal">
              {education.description.map((point, index) => (
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

export default About;
