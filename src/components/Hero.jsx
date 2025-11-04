import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 bg-gray-100">
      {/* Logo ou image principale */}
      <img
        src="/hero.jpg" // ✅ l’image doit être placée dans le dossier "public"
        alt="Projet immobilier"
        className="w-full max-w-4xl rounded-2xl shadow-lg mb-8"
      />

      {/* Titre principal */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-4">
        SGB Promotion Immobilière
      </h1>

      {/* Texte descriptif */}
      <p className="max-w-2xl text-gray-700 text-lg md:text-xl px-4">
        Découvrez nos projets immobiliers alliant modernité, confort et qualité.
        SGB Promotion s’engage à construire des espaces de vie qui répondent à
        vos attentes, dans le respect des standards les plus exigeants.
      </p>
    </section>
  );
}

export default Hero;
