import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 text-center">
      <p>© {new Date().getFullYear()} SGB Promotion — Tous droits réservés.</p>
    </footer>
  );
}
