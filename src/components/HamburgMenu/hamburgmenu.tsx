"use client";
import React, { useState } from "react";

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false); // Stäng menyn efter klick
  };

  return (
    <div className="relative">
      {/* Menyknappen */}
      <button
        className="fixed top-4 right-4 z-50 flex flex-col justify-between w-8 h-8 focus:outline-none"
        onClick={toggleMenu}
      >
        <span
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`h-1 w-full bg-black rounded transition-transform duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        ></span>
      </button>

      {/* Menyoverlay */}
      <div
        className={`fixed inset-0 bg-customColor text-black font-bold z-40 flex flex-col items-center justify-center transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="space-y-8 text-3xl">
          <li>
            <button
              onClick={() => handleScrollToSection("home")}
              className="hover:text-customColor2 transition duration-300"
            >
              Hem
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollToSection("about")}
              className="hover:text-customColor2 transition duration-300"
            >
              Om oss
            </button>
          </li>
      
          <li>
            <button
              onClick={() => handleScrollToSection("contact")}
              className="hover:text-customColor2 transition duration-300"
            >
              Kontakt
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullScreenMenu;