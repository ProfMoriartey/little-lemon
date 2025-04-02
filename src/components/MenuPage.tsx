import React from 'react';

const MenuPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-serif text-primary mb-6">Our Menu</h1>
        <div className="bg-white p-12 rounded-lg shadow-lg">
          <div className="text-6xl mb-6">🍽️</div>
          <h2 className="text-2xl font-serif text-primary mb-4">Coming Soon</h2>
          <p className="text-gray-600 mb-8">
            We're working hard to bring you our carefully curated menu of Mediterranean delights. 
            Stay tuned for updates!
          </p>
          <div className="text-sm text-gray-500">
            Expected launch: Fall 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage; 