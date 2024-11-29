"use client";

import Navbar from "@/components/Navbar/Navbar";
import Contact from "@/components/Contact/Contact";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import Footer from "@/components/Footer/Footer";
import ScrollToTopButton from "@/components/ScrollToTopBtn/scrollToTopBtn";


export default function Home() {
  return (
  
    <div className="min-h-screen flex flex-col gap-auto ">
       {/* <ScrollToTopButton/> */}
      <Navbar />



      <div id="home" className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/Startside.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 font-Bungee ">Välkommen till SjöAs Spik och Skruv AB!</h1>
          <p className="text-lg mb-8 font-Bungee">  Vi erbjuder professionella snickartjänster för alla typer av projekt. Oavsett om du behöver hjälp med renovering eller nybyggnation, är vi här för att göra ditt projekt verklighet.</p>
          <button onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }}
            className=" bg-customColor2 hover:bg-black text-white font-bold py-3 px-6 rounded-lg shadow-md transform transition-transform duration-300 cursor-pointer font-Bungee">
            Kontakta oss
          </button>

        </div>
      </div>

      <div id="about" className="min-h-screen flex justify-center items-center bg-customColor2">
        <WhoWeAre />
      </div>

      <div id="contact" className="min-h-screen flex justify-center">
        <Contact />
      </div>



      <Footer />

    </div>
  );
}
