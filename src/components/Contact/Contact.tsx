import React from 'react'
import ContactForm from '../ContactForm/contactForm'

function Contact() {
  return (
<div className="bg-customColor flex flex-col md:flex-row items-center justify-center p-4 text-black container mx-auto">
  {/* Textsektionen */}
  <div className="flex flex-col w-full md:w-1/2 p-4 gap-2">
    <h2 className="text-4xl font-extrabold">Kontakta oss</h2>
    <div className='flex flex-col gap-4'>
    <p className='font-bold'>
      Vill du komma i kontakt med oss på SjöAs Spik och Skruv? <br /> Kontakta oss
      genom att maila oss direkt eller fyll i kontaktformuläret.
    </p>
    <p className='font-bold'>Telefon: +46 712 40 56 78</p>
    <p className='font-bold'>E-post: info@sjoasspikochskurv.se</p>
    <p className='font-bold'>Adress: Snickarboavägen 1, Göteborg</p>

    </div>
   

   
  </div>

  {/* Kontaktformuläret */}
  <div className="w-full md:w-1/2 p-4">
    <ContactForm />
  </div>
</div>
  )
}

export default Contact