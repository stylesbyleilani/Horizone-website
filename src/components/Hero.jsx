


import React from 'react';
import { ArrowBigDownDash, LocateIcon } from 'lucide-react';
import Image from 'next/image';

const SearchInput = ({ placeholder }) => (
  <div className="flex-1 min-w-[250px] mx-2 mb-4">
    <div className="flex justify-between bg-gray-200 p-2 rounded-sm">
      <div className="flex gap-2 flex-1">
        <LocateIcon className="w-5 text-gray-900 h-5 flex-shrink-0" />
        <input 
          type="text" 
          placeholder={placeholder} 
          className="bg-transparent  outline-none w-full"
        />
      </div>
      <ArrowBigDownDash className="w-5 text-gray-900 h-5 flex-shrink-0" />
    </div>
  </div>
);

const Home = () => {
  // const searchCategories = [
  //   { label: "ARRIVAL", placeholder: "Find location" },
  //   { label: "DEPARTURE", placeholder: "Select type" },
  //   // { label: "Price", placeholder: "Select range" },
  //   { label: "Rooms", placeholder: "Choose number" }
  // ];

  return (
    <div 
  className="relative min-h-screen w-full overflow-hidden bg-cover bg-center"
  style={{ backgroundImage: "url('/m8.jpg')" }}
>
<div className="absolute inset-0 bg-black/70" /> 

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h1 className="text-7xl md:text-5xl lg:text-5xl mt-32 md:mt-0 tracking-widest font-medium leading-tight mb-6 text-white">
              <span className="block mb-2">Find Your Best Staycation   </span>
              <span>in Horizone Hotel</span>
            </h1>
            <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
              <span className="block">Luxurious spaces, redefined designs, personalized services and modern</span>
              <span>amenities for a sophisticated, upscale lifestyle.</span>
            </p>
          </div>
        </div>

<div className="w-full md:mt-0 mt-44 px-4 pb-5">
      <div className="bg-white rounded-lg shadow-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label htmlFor="roomType" className="block text-gray-900 text-lg font-medium">
              Room Type
            </label>
            <select
              id="roomType"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            >
              <option value="Deluxe">Deluxe</option>
              <option value="Regular">Regular</option>
              <option value="Standard">Standard</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="arrival" className="block text-gray-900 text-lg font-medium">
              Arrival
            </label>
            <input
              type="date"
              id="arrival"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="departure" className="block text-gray-900 text-lg font-medium">
              Departure
            </label>
            <input
              type="date"
              id="departure"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="rooms" className="block text-gray-900 text-lg font-medium">
              Rooms
            </label>
            <input
              type="number"
              id="rooms"
              min="1"
              placeholder="Number of rooms"
              className="w-full bg-gray-200 text-gray-900 p-2 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none transition"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 px-2">
          <p className="text-xl font-medium text-gray-900 mb-4 sm:mb-0">Get in touch</p>
          <button className="w-full sm:w-auto px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors duration-200">
            Check Availability
          </button>
        </div>
      </div>
    </div>





      </div>
    </div>
  );
};

export default Home;