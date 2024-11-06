'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hackathonImage from '../images/Hackathonimage.png'; // Replace with your actual image filename

const projects = [
    {
        title: "Receipt Prediction Model",
        description: "Demo video on how to use docker to run my Receipt Prediction Model. I used a flask app for visualizing the future amount of receipts. Incorporated a Long Short Term Memory (LSTM) model to predict the next month's sales based on the previous 3 months of sales data.",
        mediaType: "video",
        media: "https://www.loom.com/embed/cfe3a31974b74efbb44cb5f19504d38e",
        technologies: ["Python", "Pytorch", "Flask", "Pandas", "Numpy", "Matplotlib", "Docker"],
        github: "https://github.com/Zaltster/FetchAssessment"
    },
    {
        title: "Distance Detection Application",
        description: "Application that enables the user to upload an image and detect the distance between objects in the image. The application uses Segment Anything Model 2 (SAM2) to segment the objects in the image. The distance between the objects is calculated using the pixel size of the objects and the focal length of the camera.",
        mediaType: "video",
        media: "https://www.loom.com/embed/98ba00a0a1134d53b3db2ef37797e6b4?sid=9db95e09-5042-4981-b737-6d8f19d1bed3",
        technologies: ["Python", "Flask", "SAM2", "OpenCV", "Numpy", "HTML"],
        github: "https://github.com/Zaltster/Distance"
    },
    {
        title: "Object Detection Hackathon - Northrup Grumman 3rd Place",
        description: "Developed an object Detection model that uses Roboflow to annotate all images using SAM2. The model was trained using the YOLOv8 model on the cloud and achieved an mAP of 98% and an f1 score of 91.9%. The PowerPoint is for our hackathon presentation can be found on my linkedin. ",
        mediaType: "image",
        media: hackathonImage,
        technologies: ["Python", "Yolov8", "Roboflow", "SAM2"],
        github: "https://github.com/Zaltster/NGHackacthon"
    },
];

export default function MLProjects() {
    return (
        <div className="min-h-screen bg-[#010b26] text-white p-8">
            <nav className="flex justify-between items-center mb-12">
                <Link href="/" className="text-xl hover:text-blue-400 transition-colors border border-white rounded-md px-3 py-1">
                    Home Page ↗
                </Link>
                <h1 className="text-5xl font-bold">ML Projects</h1>
                <Link href="/SoftwareProjects" className="text-xl hover:text-blue-400 transition-colors border border-white rounded-md px-3 py-1">
                    Software Projects ↗
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