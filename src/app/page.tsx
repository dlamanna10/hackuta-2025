"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTransform = (factor: number) => ({
    transform: `translateY(-${scrollY * factor}px)`,
  });

  return (
    <div className="relative min-h-[300vh] bg-black overflow-hidden text-white">
      {/* 🌌 Blue to Black Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3b5278] via-black to-black" />

      {/* 🏙️ Background Layers */}
      <img
        src="/layers/backlb.svg"
        alt="Back layer"
        className="absolute w-full z-10 pointer-events-none"
        style={getTransform(0.1)}
      />
      <img
        src="/layers/layer3b.svg"
        alt="Layer 3"
        className="absolute w-full z-20 pointer-events-none"
        style={getTransform(0.2)}
      />
      <img
        src="/layers/layer2b.svg"
        alt="Layer 2"
        className="absolute w-full z-30 pointer-events-none"
        style={getTransform(0.4)}
      />

      {/* 🏙️ Front Layer with strong fade-out */}
      <div
        className="absolute w-full z-40 pointer-events-none"
        style={getTransform(0.7)}
      >
        <img src="/layers/frontlb.svg" alt="Front layer" className="w-full" />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* 🌟 Centered Hero Section with Logo */}
      <main className="relative z-50 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* 🔥 Centered HackUTA Logo */}
        <img
          src="/hackuta.svg"
          alt="HackUTA Logo"
          className="w-20 md:w-50 mb-8 pointer-events-none"
        />
        <img
          src="/hackutalogo.svg"
          alt="HackUTA Logo"
          className="w-100 md:w-80 mb-8 pointer-events-none"
        />

        <p className="text-xl md:text-2xl mb-8">
          Go beyond the hacker-verse at HackUTA.
        </p>
        <a
          href="#"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Register Now
        </a>
      </main>
    </div>
  );
}
