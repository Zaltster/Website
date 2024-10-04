import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-white">
        <h1 className="text-7xl mb-6">
          Hi, my name is <span className="font-bold">Sam</span>.
        </h1>
        <p className="text-5xl mb-3">
          Software Engineer
        </p>
        <p className="text-4xl">
          AI Enthusiast
        </p>
      </div>
      {/* You can add more content or components here */}
    </main>
  );
}