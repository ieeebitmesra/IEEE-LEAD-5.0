import { meta, shopify, starbucks, tesla} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Technical Member",
        company_name: "IEEE student branch at BIT-MESRA",
        icon: 'src\assets\images\ieee.png',
        iconBg: "#accbe1",
        date: "March 2020 - April 2021",
    },
    {
        title: "Technical Member",
        company_name: "IET student branch at BIT-MESRA",
        icon: 'src\assets\images\iet.png',
        iconBg: "#fbc3bc",
        date: "March 2020 - April 2021",
    }

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/axhatggg',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/akshat-gupta-9b39992a7/',
    }
];

export const projects = [
    {
        iconUrl: 'src\assets\images\wet.png',
        theme: 'btn-back-red',
        name: 'Weather App',
        description: 'Developed a web application that shows weather of any place in realtime using openweather api',
        link: 'https://axhatweatherapp.netlify.app/',
    }
];
