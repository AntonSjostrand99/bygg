import React from 'react'

function WhoWeAre() {
  return (
    <div className=' bg-customColor2 flex flex-col items-start justify-center p-4 gap-2 container mx-auto'>
        <h1 className='text-4xl font-extrabold text-black'>Vilka är vi?</h1>
        <p className='text-black pb-3 font-bold w-9/12 md:w-full'>Vi på SjöAs Spik och Skruv AB är en passionerad snickarfirma med lång erfarenhet inom bygg- och renoveringsbranschen. 
            Vårt mål är att leverera högkvalitativa lösningar som passar både små och stora projekt. 
            Vi tror på att skapa långvariga relationer med våra kunder genom att alltid sätta deras behov och önskemål i fokus. Vi använder oss av de bästa materialen och håller oss uppdaterade med de senaste teknikerna för att säkerställa att varje jobb utförs på högsta nivå.
        </p>

 <div className="flex flex-col lg:flex-row gap-6 ">
  <div className="flex-1 min-h-[300px] border border-gray-200 text-black p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 font-bold">
    <h2 className="text-2xl font-extrabold mb-4 text-customColor2">Byggservice</h2>
    <p className="text-gray-700 leading-relaxed">
      Vi på SjöAs Spik och Skruv erbjuder omfattande byggservice för både privata och kommersiella kunder. Oavsett om du planerar en mindre renovering eller ett större byggprojekt, så har vi expertisen och resurserna för att säkerställa att arbetet genomförs på ett professionellt och effektivt sätt. Vår byggservice täcker allt från reparationer, uppgraderingar och ombyggnationer till större nybyggnadsprojekt. Vi arbetar noggrant med att följa alla byggnormer och regler för att ge dig en hållbar lösning.
    </p>
  </div>

  <div className="flex-1 min-h-[300px] border border-gray-200 text-black p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 font-bold">
    <h2 className="text-2xl font-extrabold mb-4 text-customColor2">Entreprenad</h2>
    <p className="text-gray-700 leading-relaxed">
      Vår entreprenadtjänst innebär att vi tar ansvar för hela byggprocessen från start till mål. Vi samarbetar med er för att förstå era visioner och behov och hjälper till att planera och leda projektet genom alla faser. Vi har erfarenhet av att hantera både stora och små entreprenader inom byggsektorn och arbetar med noggrant utvalda underleverantörer för att garantera kvalitet och tidsramar.
    </p>
  </div>

  <div className="flex-1 min-h-[300px] border border-gray-200 text-black p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 font-bold">
    <h2 className="text-2xl font-extrabold mb-4 text-customColor2">Inredning</h2>
    <p className="text-gray-700 leading-relaxed">
      När det gäller inredning strävar vi efter att skapa funktionella och estetiskt tilltalande utrymmen för både hem och arbetsplats. Vi hjälper till att designa och bygga skräddarsydda lösningar som passar just dina behov och stil. Oavsett om det handlar om att bygga inbyggda möbler, renovera kök eller skapa en komplett inredning för ditt hem eller företag, kan vi leverera det du behöver.
    </p>
  </div>
</div>
    </div>
  )
}

export default WhoWeAre