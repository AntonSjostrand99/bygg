"use client";
import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-customColor2 rounded-lg shadow-lg text-black">
    
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Namn */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Namn
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Skriv ditt namn"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* E-post */}
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            E-post
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Din e-postadress"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Meddelande */}
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Meddelande
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Skriv ditt meddelande"
            rows={4} 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>

        {/* Skicka-knapp */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Skicka
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;