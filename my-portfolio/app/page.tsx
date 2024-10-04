import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <div className="text-white mb-48 text-center">
        <h1 className="text-7xl mb-4">
          Hi, my name is <span className="font-bold">Sam</span>.
        </h1>
        <p className="text-2xl">
          Software Engineer • AI Enthusiast
        </p>
      </div>

      <div className="flex gap-12 mt-24">
        <Link href="/MLprojects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-semibold mb-4">ML Projects</h2>
          <p className="text-xl">Explore my machine learning work</p>
        </Link>

        <Link href="/SoftwareProjects" className="bg-white bg-opacity-10 hover:bg-opacity-20 text-white rounded-lg p-12 transition duration-300 w-80 h-60 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-semibold mb-4">Software Projects</h2>
          <p className="text-xl">View my software development projects</p>
        </Link>
      </div>
    </main>
  );
}