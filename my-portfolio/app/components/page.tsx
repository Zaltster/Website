'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnimatedContent() {
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showRest, setShowRest] = useState(false);

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
            <div className="text-white mb-48 text-center">
                <h1 className={`text-7xl mb-4 transition-opacity duration-500 ${showName ? 'opacity-100' : 'opacity-0'}`}>
                    Hi, my name is <span className="font-bold">Sam</span>.
                </h1>
                <p className={`text-2xl transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    Software Engineer • AI Enthusiast
                </p>
            </div>

            <div className={`flex gap-12 mt-24 transition-opacity duration-500 ${showRest ? 'opacity-100' : 'opacity-0'}`}>
                <Link href="/MLprojects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-semibold mb-4">ML Projects</h2>
                    <p className="text-xl">Explore my machine learning work</p>
                </Link>

                <Link href="/SoftwareProjects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
                    <h2 className="text-4xl font-semibold mb-4">Software Projects</h2>
                    <p className="text-xl">View my software development projects</p>
                </Link>
            </div>
        </>
    );
}