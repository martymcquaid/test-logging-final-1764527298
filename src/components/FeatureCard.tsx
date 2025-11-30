import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;