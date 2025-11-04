import React from "react";

export default function Hero() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black bg-opacity-50 p-10 rounded-xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Construisons ensemble votre avenir
        </h2>
        <p className="text-lg mb-6">
          Des projets immobiliers modernes et durables pour un confort optimal.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
        >
          Découvrir nos projets
        </a>
      </div>
    </section>
  );
}
