'use client';

import React from 'react';
import Link from 'next/link';

const projects = [
    {
        title: "Recipt Prediction Model",
        description: "Web app for visualizing future amount of Reciepts. Simply your previous 3 months worth of sales and the model will predict the next month's Sales. Custom CSV uploads are available through the Code.",
        video: "https://www.loom.com/embed/cfe3a31974b74efbb44cb5f19504d38e",
        technologies: ["Pytorch", "Flask", "Pandas", "Numpy", "Matplotlib"],
        github: "https://github.com/Zaltster/FetchAssessment"
    },
    // Add more software projects here...
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
                            <iframe
                                src={project.video}
                                frameBorder="0"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                            <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-3xl font-semibold mb-3 hover:text-blue-400 transition-colors">
                                {project.title} ↗
                            </Link>
                            <p className="text-gray-300 mb-4 mt-2 text-base leading-relaxed">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="bg-[#1e3a5f] text-[#8fbbe9] text-sm rounded-full px-3 py-1">
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