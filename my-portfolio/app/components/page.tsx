'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnimatedContent() {
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showRest, setShowRest] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const mlVideo = "https://www.loom.com/embed/cfe3a31974b74efbb44cb5f19504d38e";

    useEffect(() => {
        const nameTimer = setTimeout(() => setShowName(true), 100);
        const titleTimer = setTimeout(() => setShowTitle(true), 1100);
        const restTimer = setTimeout(() => setShowRest(true), 1600);

        return () => {
            clearTimeout(nameTimer);
            clearTimeout(titleTimer);
            clearTimeout(restTimer);
        };
    }, []);

    return (
        <>
            <div className={`fixed top-4 right-4 z-10 transition-opacity duration-500 ${showRest ? 'opacity-100' : 'opacity-0'}`}>
                <button
                    onClick={() => setShowPopup(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                    Message Me
                </button>
            </div>

            {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-black">
                        <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                        <p className="mb-2">Email: samuelsshvartsman@gmail.com</p>
                        <p className="mb-4">Phone: 7173790229</p>
                        <p className="mb-4">Feel free to reach out to me through email or phone. I'm always open to discussing new opportunities, projects, or just having a friendly chat about technology and AI!</p>
                        <button
                            onClick={() => setShowPopup(false)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            <div className="text-white mb-48 text-center">
                <h1 className={`text-7xl mb-4 transition-opacity duration-500 ${showName ? 'opacity-100' : 'opacity-0'}`}>
                    Hi, my name is <span className="font-bold">Sam</span>.
                </h1>
                <p className={`text-2xl transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    Software Engineer • AI Enthusiast
                </p>
            </div>

            <div className={`flex flex-wrap gap-12 mt-24 justify-center transition-opacity duration-500 ${showRest ? 'opacity-100' : 'opacity-0'}`}>
                <div className="flex gap-12">
                    <Link href="/MLprojects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
                        <h2 className="text-4xl font-semibold mb-4">ML Projects</h2>
                        <p className="text-xl">Explore my machine learning work</p>
                    </Link>

                    <div className="bg-white bg-opacity-10 rounded-lg w-[600px] aspect-video">
                        <iframe
                            src={mlVideo}
                            frameBorder="0"
                            allowFullScreen
                            className="w-full h-full rounded-lg"
                        ></iframe>
                    </div>
                </div>

                <Link href="/SoftwareProjects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-semibold mb-4">Software Projects</h2>
                    <p className="text-xl">View my software development projects</p>
                </Link>
            </div>

            <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 transition-opacity duration-500 ${showRest ? 'opacity-100' : 'opacity-0'}`}>
                <a href="https://github.com/zaltster" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 group relative">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/samuel-shvartsman-92b871256/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition-colors duration-200 group relative">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">LinkedIn</span>
                </a>
            </div>
        </>
    );
}