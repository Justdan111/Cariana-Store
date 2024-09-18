/* eslint-disable no-unused-vars */
import React from 'react';
import hero from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className="relative w-full h-96">
      <img src={hero} alt="Hero" className="w-full h-full object-cover" />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center backdrop-blur-sm">
        <h1 className="text-white text-4xl font-bold">Street Style Collection</h1>
      </div>
    </div>
  );
}

export default Hero;
