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
      {/* 🌌 Background Sky Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0d1a3c] via-[#1c2c54] to-[#3b5278]" />

      {/* 🏙️ Layer: Back */}
      <div
        className="absolute w-full z-10 pointer-events-none"
        style={getTransform(0.1)}
      >
        <img src="/layers/backlb.svg" alt="Back layer" className="w-full" />
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#0d1a3c] to-transparent" />
      </div>

      {/* 🏙️ Layer: 3 */}
      <div
        className="absolute w-full z-20 pointer-events-none"
        style={getTransform(0.2)}
      >
        <img src="/layers/layer3b.svg" alt="Layer 3" className="w-full" />
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#0d1a3c] to-transparent" />
      </div>

      {/* 🏙️ Layer: 2 */}
      <div
        className="absolute w-full z-30 pointer-events-none"
        style={getTransform(0.4)}
      >
        <img src="/layers/layer2b.svg" alt="Layer 2" className="w-full" />
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#0d1a3c] to-transparent" />
      </div>

      {/* 🏙️ Layer: Front */}
      <div
        className="absolute w-full z-40 pointer-events-none"
        style={getTransform(0.7)}
      >
        <img src="/layers/frontlb.svg" alt="Front layer" className="w-full" />
        <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-[#0d1a3c] to-transparent" />
      </div>

      {/* 🌟 Foreground Hero Content */}
      <main className="relative z-50 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">HackUTA 2025</h1>
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
