import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import ContactForm from '../components/ContactForm';

const features = [
  { title: 'Feature One', description: 'Description of feature one.', icon: '🌟' },
  { title: 'Feature Two', description: 'Description of feature two.', icon: '🚀' },
  { title: 'Feature Three', description: 'Description of feature three.', icon: '💡' }
];

const LandingPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <HeroSection />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
        ))}
      </div>
      <ContactForm />
    </div>
  );
};

export default LandingPage;