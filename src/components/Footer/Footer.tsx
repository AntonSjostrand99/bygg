const Footer = () => {
    return (
      <footer className="w-full bg-customColor2 text-gray-200 pt-4 mt-4">
      <div className="mx-auto container pt-4 px-4 md:px-0">
        {/* Företagsinformation */}
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-white mb-4">SjöAs Spik och Skruv AB</h2>
          <p className="text-white font-bold">
            Vi är din pålitliga partner för högkvalitativa bygg- och snickeritjänster. <br />
            Med många års erfarenhet levererar vi alltid professionella resultat.
          </p>
        </div>
    
        {/* Footer-länkar */}
        <div className="flex justify-center items-center mb-6">
          {/* Snabblänkar */}
          <div className="flex flex-row gap-4">
            <p className="hover:text-black cursor-pointer font-bold">Instagram</p>
            <p className="hover:text-black cursor-pointer font-bold">Facebook</p>
            <p className="hover:text-black cursor-pointer font-bold">Linkedin</p>
          </div>
        </div>
    
        {/* Divider och copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} SjöAs Spik och Skruv AB. Alla rättigheter
            reserverade.
          </p>
        </div>
      </div>
    </footer>
    );
  };
  
  export default Footer;