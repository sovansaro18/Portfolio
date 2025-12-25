import { Project, Skill } from './types/types';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMongodb, SiVercel, SiRender } from 'react-icons/si';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured online store built with the MERN stack, featuring secure checkout and real-time inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind"],
    link: "https://github.com/sovansaro18",
    image: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "Social Networking API",
    description: "A robust backend system for social interactions, supporting friendships, posts, and real-time notifications.",
    tags: ["Express", "MongoDB", "Node.js"],
    link: "https://github.com/sovansaro18",
    image: "https://picsum.photos/800/600?random=2"
  },
  {
    id: 3,
    title: "Dynamic Dashboard",
    description: "An interactive admin panel with data visualization using Recharts and Tailwind CSS for responsive layouts.",
    tags: ["React", "Tailwind", "JavaScript"],
    link: "https://github.com/sovansaro18",
    image: "https://picsum.photos/800/600?random=3"
  },
  {
    id: 4,
    title: "Task Management Suite",
    description: "A productivity app focusing on drag-and-drop task organization and team collaboration features.",
    tags: ["React", "Express", "Vercel"],
    link: "https://github.com/sovansaro18",
    image: "https://picsum.photos/800/600?random=4"
  },
  {
    id: 5,
    title: "Portfolio 1.0",
    description: "The initial version of my personal portfolio, showcasing basic styling and layout techniques with HTML/CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/sovansaro18",
    image: "https://picsum.photos/800/600?random=5"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML", category: "Language", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", category: "Language", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", category: "Language", icon: <FaJs className="text-yellow-400" /> },
  { name: "React JS", category: "Framework", icon: <FaReact className="text-blue-400" /> },
  { name: "Tailwind CSS", category: "Framework", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", category: "Framework", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Express", category: "Framework", icon: <SiExpress className="text-gray-800" /> },
  { name: "MongoDB", category: "Framework", icon: <SiMongodb className="text-green-500" /> },
  { name: "Git", category: "Tool", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", category: "Tool", icon: <FaGithub className="text-gray-800" /> },
  { name: "Vercel", category: "Tool", icon: <SiVercel className="text-black" /> },
  { name: "Render", category: "Tool", icon: <SiRender className="text-white bg-gray-800 rounded" /> }
];

export const CONTACTS = {
  github: "sovansaro18",
  facebook: "sovansaro.v",
  telegram: "sovansaro"
};

export const PROFILE_INFO = `
My name is RA VI, and I am a passionate New Web Developer. 
I have completed 5 projects focused on building modern, scalable web applications. 
My tech stack includes:
- Languages: HTML, CSS, JavaScript
- Frameworks/Libraries: React JS, Tailwind, Node.js, Express, MongoDB
- Tools/Hosting: Git, GitHub, Vercel, Render
I am dedicated to writing clean code and creating intuitive user experiences.
`;