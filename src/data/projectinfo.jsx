import JKS from "/JKS.png"
import Weather from "/Weather-app.png"
import Chat from "/Chat-app.png"
import Chat1 from "/Chat-app1.png"
import JKS1 from "/JKS-1.png"
import JKS2 from "/JKS-2.png"
import JKS3 from "/JKS-3.png"
import JKS4 from "/JKS-4.png"


export const projects = [
    {
        id: 1,
        image: JKS,
        title: "🇩🇪 JKS Germany Services",
        date: "Oct 2023 - Dec 2023",
        description: "A responsive web application showcasing Germany-related services, built with React and styled using Tailwind CSS and shadcn/ui. Focused on clean layout, reusable components, and an intuitive user experience for service discovery.",
        images: [
            JKS1,JKS2,JKS3,JKS4
        ],
        stack: ["React", "Tailwind CSS", "ShadCN UI"],
        github: 'https://github.com/RaymonA09/JKS',
        demo: 'https://jks-mv5p.onrender.com/'
    },

    {
        id:2,
        image: Weather,
        title: "Weather Application",
        date: "Nov 2023 - Dec 2023",
        description: "A weather application consuming real-time data from the Open-Meteo API, built with React and shadcn/ui. Focused on API integration, state management, and presenting weather data in a clean, user-friendly interface.",
        images: [

        ],
        stack: ["React", "Open-Meteo API", "shadcn/ui"],
        github: 'https://github.com/RaymonA09/weather-app',
        demo: 'https://raymona09.github.io/weather-app/'
    },

    {
        id:3,
        image: Chat1,
        title: "Real-Time Chat Application (Full Stack)",
        date: "2024",
        description: "A full-stack real-time chat application featuring JWT-based authentication, live messaging with Socket.IO, and a React frontend styled using DaisyUI. Built with an Express.js backend, focusing on real-time communication, secure authentication, and scalability.",
        images:[],
        stack: ["React", "Express.js", "Socket.IO", "DaisyUI"],
        github: 'https://github.com/RaymonA09/chat-app-frontend' ,
        demo: 'https://chat-app-frontend-lyf2a63pq-raymona09s-projects.vercel.app/login'
    },
];
