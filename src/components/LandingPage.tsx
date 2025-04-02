import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-primary">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-serif font-bold mb-6">
              Welcome to Little Lemon
            </h1>
            <p className="text-xl mb-8">
              Experience the finest Mediterranean cuisine in a warm and inviting atmosphere.
            </p>
            <Link
              to="/reservations"
              className="inline-block bg-secondary text-primary font-bold py-3 px-8 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-serif text-primary mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Little Lemon has been serving authentic Mediterranean cuisine to our valued customers. Our passion for fresh ingredients and traditional recipes has made us a beloved destination for food lovers.
            </p>
            <p className="text-gray-600">
              We believe in creating memorable dining experiences through our carefully crafted dishes and warm hospitality.
            </p>
          </div>
          <div className="bg-gray-200 h-[400px] rounded-lg"></div>
        </div>
      </section>

      {/* Special Offer Section */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-white mb-6">Special Offer</h2>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-serif text-primary mb-4">Early Bird Special</h3>
              <p className="text-gray-600 mb-6">
                Enjoy 20% off on all main courses when you dine with us between 5:00 PM and 6:30 PM, Monday through Friday.
              </p>
              <Link
                to="/reservations"
                className="inline-block bg-secondary text-primary font-bold py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl mb-4">🍽️</div>
            <h3 className="text-xl font-serif text-primary mb-2">Fresh Ingredients</h3>
            <p className="text-gray-600">We source the finest local ingredients daily.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">👨‍🍳</div>
            <h3 className="text-xl font-serif text-primary mb-2">Expert Chefs</h3>
            <p className="text-gray-600">Our team of experienced chefs brings passion to every dish.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-xl font-serif text-primary mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in Mediterranean cuisine.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage; 