import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 container mx-auto px-6">
      <h3 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Contactez-nous
      </h3>
      <form className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <input
          type="text"
          placeholder="Votre nom"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="email"
          placeholder="Votre email"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          placeholder="Votre message"
          rows="5"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
