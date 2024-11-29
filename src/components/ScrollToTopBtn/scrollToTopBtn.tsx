"use client";
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); // State för att hantera synligheten av knappen

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Om vi rullar ner mer än 300px, visa knappen
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Lägg till scroll-eventlyssnare
    window.addEventListener("scroll", handleScroll);

    // Ta bort eventlyssnare när komponenten demonteras
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Skrolla tillbaka till toppen med en mjuk övergång
  };

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-7 right-6 bg-white text-black font-bold py-3 px-6 border-2 border-customColor2 rounded-full shadow-lg hover:bg-customColor transition duration-300 "
        >
          Upp
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;