import { BiLogoGmail, BiPhoneCall } from "react-icons/bi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin} from "react-icons/fa";

export const Bio = {
    name: "Ralph Raymon Aurelio",
    roles: [
        "Front End Developer",
        "Programmer"
    ],
    description: "A Computer Engineering graduate with a strong passion for front-end development. I thrive in collaborative environments, where my attention to detail and adaptability shine. Eager to apply my knowledge in real-world projects, committed to continuous growth and contributing effectively to diverse teams.",
    linkedin: "https://www.linkedin.com/in/ralph-aurelio/",
    github: "https://github.com/RaymonA09",
    facebook: "https://www.facebook.com/aurelioralph/",
    email: "ralphaurelio1@gmail.com",
    resume: "/Portfolio-React/AURELIO_CV.pdf",
    location: "Cavite, Philippines",
    number: "+63 927 897 0765"
};

const withSize = (Icon, size = 30) => (
    <Icon style={{ width: `${size}px`, height: `${size}px` }} />
  );
  
  export const icons = {
    mail: withSize(BiLogoGmail),
    location: withSize(FaMapLocationDot),
    cellphone: withSize(BiPhoneCall),
    facebook: withSize(FaFacebookSquare),
    github: withSize(FaGithubSquare),
    linkedin: withSize(FaLinkedin),
  };

export const skills = [
    {
        title: "Front-End",
        skills: [
            {
                name: "HTML",
                image: "https://cdn-icons-png.flaticon.com/512/732/732212.png"
            },
            {
                name: "CSS",
                image: "https://cdn-icons-png.flaticon.com/512/732/732190.png"
            },
            {
                name: "Javascript",
                image: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            },
            {
                name: "React Js",
                image: "https://cdn.worldvectorlogo.com/logos/react-1.svg"
            },
            {
                name: "Tailwind CSS",
                image: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
            },
            {
                name: "Bootstrap",
                image: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
            },
            {
                name: "Next Js",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
            }
        ]
    },

    {
        title: "Back-End",
        skills: [
            {
                name: "Node-JS",
                image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
            },
            {
                name: "MongoDB",
                image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg"
            },
            {
                name: "MySQL",
                image: "https://cdn-icons-png.flaticon.com/512/528/528260.png"
            }
        ]
    },

    {
        title: "Others",
        skills: [
            {
                name: "VS-Code",
                image: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
            },
            {
                name: "Figma",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            },
            {
                name: "Github",
                image: "https://cdn-icons-png.flaticon.com/512/25/25231.png"
            },
            {
                name: "Git",
                image: "https://cdn.worldvectorlogo.com/logos/git-icon.svg"
            }
        ]
    }
];

