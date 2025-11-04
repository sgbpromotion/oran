import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full font-sans">
      {/* Thin top strip */}
      <div className="bg-[#67b7b7] text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          {/* Mail icon (inline SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m0 8a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v10z" />
          </svg>
          <span>Email : contact@sgbpromotion.com</span>
        </div>
        <div className="hidden sm:flex items-center space-x-4">
          {/* Placeholder social icons */}
          <a href="#" aria-label="Facebook" className="hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.4c0-2.3 1.4-3.6 3.4-3.6.98 0 2 .18 2 .18v2.2h-1.12c-1.1 0-1.45.69-1.45 1.4v1.68h2.47l-.39 2.9h-2.08v7A10 10 0 0022 12z"/></svg>
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7s-.2-1.4-.8-2c-.7-.8-1.5-.8-1.9-.9C17.6 4 12 4 12 4s-5.6 0-8.3.1c-.4 0-1.2.1-1.9.9C1.2 5.6 1 7 1 7S0.8 9 .8 11v2c0 2 .2 4 0 4s.2 1.4.8 2c.7.8 1.6.8 2 .9 1.5.2 6.9.2 6.9.2s5.6 0 8.3-.1c.4 0 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-2 .2-4v-2c0-2-.2-4-.2-4zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z"/></svg>
          </a>
        </div>
      </div>

      {/* Middle contact band */}
      <div className="bg-white text-gray-800 flex flex-col md:flex-row justify-between items-center py-4 px-6 shadow-sm gap-3 md:gap-0">
        <div className="flex items-center space-x-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h2l3.6 7.59a1 1 0 00.9.41H19l3-6H5.21" />
          </svg>
          <div className="text-sm leading-tight">
            <p className="font-semibold">APPELEZ NOUS POUR</p>
            <p>PLUS D'INFORMATIONS</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-red-700 transition">CONTACTEZ NOUS</button>
          <span className="text-xl font-bold">0550.10.99.18</span>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-[#2f3e4d] text-white font-semibold">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-3">
              {/* Use public/logo.png (works with Vite/CRA when placed in public)") */}
              <img src="/logo.png" alt="SGB Promotion" className="h-14 w-auto" />
            </a>
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center space-x-8">
            <li><a href="#" className="hover:text-gray-300">ACCUEIL</a></li>
            <li><a href="#" className="hover:text-gray-300">QUI SOMMES NOUS</a></li>
            <li><a href="#" className="hover:text-gray-300">PROJETS EN COURS</a></li>
            <li><a href="#" className="hover:text-gray-300">PROJETS RÉALISÉS</a></li>
            <li><a href="#" className="hover:text-gray-300">CONTACT</a></li>
          </ul>

          {/* Mobile burger */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center space-y-4 py-4 bg-[#2f3e4d]">
            <li><a href="#" className="text-white">ACCUEIL</a></li>
            <li><a href="#" className="text-white">QUI SOMMES NOUS</a></li>
            <li><a href="#" className="text-white">PROJETS EN COURS</a></li>
            <li><a href="#" className="text-white">PROJETS RÉALISÉS</a></li>
            <li><a href="#contact" className="text-white">CONTACT</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
