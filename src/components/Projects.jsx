import React from "react";

const projects = [
  { name: "Résidence Alaya", image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80" },
  { name: "Résidence Palmier", image: "https://images.unsplash.com/photo-1600585153939-ae6151c9f54f?auto=format&fit=crop&w=800&q=80" },
  { name: "Résidence Saphir", image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=80" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 container mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Nos projets récents
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
            <img src={p.image} alt={p.name} className="h-56 w-full object-cover" />
            <div className="p-4">
              <h4 className="text-xl font-semibold">{p.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
