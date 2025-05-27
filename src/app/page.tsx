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
    <div className="relative bg-black text-white overflow-hidden">
      {/* 🌌 Background Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-[#5f3ca3] via-[black] to-black" />

      {/* 🏙️ Parallax Layers */}
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

      {/* 🏙️ Front Layer with fade-out */}
      <div
        className="absolute w-full z-40 pointer-events-none"
        style={getTransform(0.7)}
      >
        <img src="/layers/frontlb.svg" alt="Front layer" className="w-full" />
        <div className="absolute bottom-0 w-full h-80 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </div>

      {/* 🧭 Top Right Navbar */}
      <nav className="fixed top-6 right-6 z-50 flex items-center gap-6 text-sm font-medium text-white">
        <a href="#when" className="hover:text-purple-300 transition">When</a>
        <a href="#where" className="hover:text-purple-300 transition">Where</a>
        <a href="#sponsors" className="hover:text-purple-300 transition">Sponsors</a>
        <a href="#schedule" className="hover:text-purple-300 transition">Schedule</a>
        <a href="#faq" className="hover:text-purple-300 transition">FAQ</a>
        <a
          href="/signin"
          className="bg-[#b6f1ff] text-black rounded-full px-4 py-2 hover:bg-[#a0e7f8] transition"
        >
          Sign In
        </a>
        <a
          href="/register"
          className="bg-[#b6f1ff] text-black rounded-full px-4 py-2 hover:bg-[#a0e7f8] transition"
        >
          Register
        </a>
      </nav>

      {/* 🌟 Hero Section */}
      <main className="relative z-50 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <img
          src="/hackuta.svg"
          alt="HackUTA Icon"
          className="w-20 md:w-40 mb-4 pointer-events-none"
        />
        <img
          src="/hackutalogo.svg"
          alt="HackUTA Logo"
          className="w-72 md:w-96 mb-6 pointer-events-none"
        />
        <p className="text-xl md:text-2xl mb-6">
          Go beyond the hacker-verse at HackUTA.
        </p>
        <a
          href="/register"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
        >
          Register Now
        </a>
      </main>
      <div className="h-40 md:h-64 bg-transparent" />
      {/* ⬛ Fade transition into info section */}
      <div className="relative z-40 h-24">
        <div className="absolute top-0 left-0 w-full h-full" />
      </div>

      {/* 📌 Information Sections */}
      <section id="when" className="relative z-50 py-20 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-bold mb-4">When?</h2>
        <p className="text-lg">October 4th – 5th, 2025</p>
      </section>

      <section id="where" className="relative z-50 py-20 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-bold mb-4">Where?</h2>
        <p className="text-lg">SWSH / SEIR at The University of Texas at Arlington</p>
      </section>

      <section id="sponsors" className="relative z-50 py-20 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-bold mb-4">Sponsors</h2>
        <p className="text-lg italic text-gray-400">Coming soon...</p>
      </section>

      <section id="schedule" className="relative z-50 py-20 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-bold mb-4">Schedule</h2>
        <p className="text-lg">Full schedule will be released closer to the event date.</p>
      </section>

      <section id="faq" className="relative z-50 py-20 px-6 md:px-24 bg-black">
        <h2 className="text-3xl font-bold mb-4">FAQ</h2>
        <ul className="text-lg space-y-4">
          <li><strong>Who can attend?</strong> Anyone with a passion for building!</li>
          <li><strong>How much does it cost?</strong> It’s completely free!</li>
          <li><strong>Do I need a team?</strong> You can come solo or with friends — we’ll help you form a team if needed.</li>
          <li><strong>Will there be food?</strong> Yes! We provide meals and snacks throughout the event.</li>
        </ul>
      </section>
    </div>
  );
}
