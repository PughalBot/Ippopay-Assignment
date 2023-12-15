import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const [isBlinking, setIsBlinking] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 150); // Blinking interval

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const textAppearance = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: .15 } }
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="h-screen bg-[#2c1262] flex flex-col pt-16 md:pt-24 justify-center items-center">
      <div
        className="font-hj text-5xl md:text-6xl font-medium text-white"
        style={{ opacity: isBlinking ? 1 : 0 }}
      >
        thank you !!
      </div>
      <p
        className="font-js text-[#db1068] text-xs md:text-xl text-center w-11/12 md:w-4/6 pt-2 pb-4"
        style={textAppearance.animate}
      >
        Your submission has been confirmed. Password Saved Successfully.
      </p>
      <div style={textAppearance.animate}>
        <button 
          className="px-4 py-2 bg-[#db1068] text-center rounded-full font-bold text-lg text-white font-sg"
          onClick={goToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ThankYou;
