import React from 'react';

const SuccessMessage: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto bg-green-50 p-8 rounded-lg shadow-md text-center">
      <div className="text-green-600 text-5xl mb-4">✓</div>
      <h2 className="text-2xl font-serif text-primary mb-4">
        Reservation Confirmed!
      </h2>
      <p className="text-gray-600 mb-6">
        Thank you for choosing Little Lemon. We've received your reservation and will send you a confirmation email shortly.
      </p>
      <p className="text-sm text-gray-500">
        This message will disappear in a few seconds...
      </p>
    </div>
  );
};

export default SuccessMessage; 