// pages/index.tsx or app/page.tsx (Next.js 13/14)

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-4">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 text-center">
        HackUTA 2025
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-center">
        Go beyond the hacker-verse at HackUTA.
      </p>
      <a
        href="#"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
      >
        Register Now
      </a>
    </main>
  );
}
