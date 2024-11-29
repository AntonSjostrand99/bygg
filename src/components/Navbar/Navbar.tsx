"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import HamburgerMenu from "../HamburgMenu/hamburgmenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolledUp, setIsScrolledUp] = useState(true); // Om navbaren ska vara synlig eller inte

  let lastScrollY = typeof window !== "undefined" ? window.scrollY : 0; // Initial scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;
        if (currentScrollY < lastScrollY) {
          setIsScrolledUp(true); // Om scrollen är uppåt
        } else {
          setIsScrolledUp(false); // Om scrollen är nedåt
        }
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY; // För att förhindra negativ scroll
      }
    };

    // Lägg till scroll event
    window.addEventListener("scroll", handleScroll);

    // Ta bort event listener när komponenten unmountas
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false); // Stäng menyn (för hamburgarmenyn)
  };

  return (
    <nav
      className={`bg-customColor p-2 border-b border-customColor2 transition-all duration-300 ${
        isScrolledUp ? "top-0" : "-top-20"
      } fixed w-full z-50`}
    >
      <div className="flex justify-between items-center cursor-pointer container mx-auto">
        {/* Vänstra sektionen */}
        <div className="text-gray-800 text-xl font-bold">
          <Image
            src="/SjöA.png" // Bildens sökväg (från public-mappen)
            alt="En beskrivning av bilden" // Alternativ text för tillgänglighet
            width={60} // Bredden på bilden
            height={50} // Höjden på bilden
            onClick={() => handleScrollToSection("home")}
            
          />
        </div>

        {/* Hamburger ikon (synlig endast på små skärmar) */}
        <div className="sm:hidden">
          <HamburgerMenu />
        </div>

        {/* Höger sektion (synlig endast på större skärmar) */}
        <div className="hidden sm:flex space-x-4 text-black font-bold text-xl">
        
          <button
            onClick={() => handleScrollToSection("about")}
            className="hover:text-customColor2 transition duration-300"
          >
            Om oss
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="hover:text-customColor2 transition duration-300"
          >
            Kontakt
          </button>
        </div>
      </div>

      {/* Kollapsbar meny (synlig endast när hamburgaren är öppen) */}
      {isMenuOpen && (
        <div className="sm:hidden mt-2 space-y-2 text-gray-800">
        
          <button
            onClick={() => handleScrollToSection("about")}
            className="block hover:text-customColor2 transition duration-300"
          >
            Om oss
          </button>
          <button
            onClick={() => handleScrollToSection("contact")}
            className="block hover:text-customColor2 transition duration-300"
          >
            Kontakt
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;