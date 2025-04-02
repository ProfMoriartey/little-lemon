import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import MenuPage from './components/MenuPage';
import ReservationForm from './components/ReservationForm';
import SuccessMessage from './components/SuccessMessage';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleReservationSuccess = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route
              path="/reservations"
              element={
                isSubmitted ? (
                  <SuccessMessage />
                ) : (
                  <ReservationForm onSuccess={handleReservationSuccess} />
                )
              }
            />
            <Route
              path="/about"
              element={
                <div className="container mx-auto px-4 py-16">
                  <h1 className="text-4xl font-serif text-primary mb-6">About Us</h1>
                  <div className="max-w-3xl mx-auto">
                    <p className="text-gray-600 mb-4">
                      Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Our chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12-15 items that they rotate seasonally.
                    </p>
                    <p className="text-gray-600">
                      The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                    </p>
                  </div>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App; 