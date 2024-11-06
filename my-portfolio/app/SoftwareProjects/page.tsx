'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Nexttime from '../images/Nexttime.png'; // Replace with your actual image filename
const projects = [

    {

        title: "Portfolio Website",
        description: "Developed a personal portfolio website using Next.js, Tailwind CSS, and Vercel. The website showcases my software and machine learning projects, as well as my resume and contact information. If you have any more questions feel free to look around!",
        mediaType: "video", // Specify media type for video
        media: "https://www.loom.com/embed/532a81d978c649ed9c2cefe669cac60b?sid=b3772b8b-39c4-4c3b-b056-580948f400a3",
        technologies: ["Typescript", "Javascript", "Tailwind CSS", "HTML", "CSS", "Next.js", "Vercel"],
        github: ""
    },
    {

        title: "Concussion Test App",
        description: "Developed a comprehensive concussion testing app in Java with SQL integration that assessed cognitive function before and after sports activities. The app included multiple evaluation components including reaction time testing, number memorization, pattern recognition, and aiming accuracy tests. To ensure data security and enable tracking of historical results, you implemented a user-friendly login system. The technical implementation utilized NetBeans for creating the graphical user interface and MySQL for efficient data storage and management.",
        mediaType: "image", // Specify media type for video
        media: Nexttime,
        technologies: ["Java", "Netbeans", "SQL", "MySQL"],
        github: ""
    },
    {
        title: "Chart Visualization Web-app",
        description: "This webapp is used to visual all data by showing the graph of your choice. The Web-app uses Django to handle the Backend and Next.js for the Frontend. Cors headers are used to allow the frontend to gain access to the backend API. There is also a custom dashboard to be able to select the graph you want to show.",
        mediaType: "image", // Specify media type for video
        media: Nexttime,
        technologies: ["Python", "Javascript", "Typescript", "Django", "Next.js", "Cors"],
        github: "https://github.com/Zaltster/Assesment"
    },
];

export default function SoftwareProjects() {
    return (
        <div className="min-h-screen bg-[#010b26] text-white p-8">
            <nav className="flex justify-between items-center mb-12">
                <Link href="/" className="text-xl hover:text-blue-400 transition-colors border border-white rounded-md px-3 py-1">
                    Home Page ↗
                </Link>
                <h1 className="text-5xl font-bold">Software Projects</h1>
                <Link href="/MLprojects" className="text-xl hover:text-blue-400 transition-colors border border-white rounded-md px-3 py-1">
                    ML Projects ↗
                </Link>
            </nav>
            <div className="space-y-24">
                {projects.map((project, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-8">
                        <div className="w-full md:w-1/2 aspect-video">
                            {project.mediaType === "video" ? (
                                <iframe
                                    src={typeof project.media === 'string' ? project.media : project.media.src}
                                    allowFullScreen
                                    className="w-full h-full"
                                />
                            ) : (
                                <Image
                                    src={project.media}
                                    alt={project.title}
                                    className="w-full h-full object-cover rounded-lg"
                                    priority={index === 0}
                                />
                            )}
                        </div>
                        <div className="w-full md:w-1/3 flex flex-col justify-center">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-3xl font-semibold mb-3 hover:text-blue-400 transition-colors">
                                {project.title} ↗
                            </Link>
                            <p className="text-gray-300 mb-4 text-lg leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-[#1e3a5f] text-[#8fbbe9] text-base rounded-full px-3 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}