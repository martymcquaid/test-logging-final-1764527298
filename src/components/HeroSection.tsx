import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-blue-500 text-white p-10 rounded-lg text-center">
      <h1 className="text-4xl font-bold">Welcome to Our Service</h1>
      <p className="mt-4 text-lg">Your success starts here.</p>
      <button className="mt-6 bg-white text-blue-500 px-4 py-2 rounded">Get Started</button>
    </div>
  );
};

export default HeroSection;