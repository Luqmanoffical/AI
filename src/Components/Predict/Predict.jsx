import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

// Styled components for image containers
const ImageContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  height: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
`;

function Predict() {
  const [showModal, setShowModal] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const handleAction = () => {
    setDataSubmitted(true);
    setShowModal(true);
  };

  // React Spring animation for button hover effect
  const buttonAnimation = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.9)' },
    config: { tension: 180, friction: 12 },
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white px-8 py-16 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-extrabold tracking-tight leading-tight text-gray-100 ">
          AI-Driven Crop Yield Predictions
        </h1>
        <p className="text-xl mt-6 opacity-80 max-w-lg mx-auto">
          Enter your data below to get accurate, AI-powered predictions for your crop yield. Let's help you optimize your harvest.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Select Crop</label>
          <select
            className="p-4 rounded-lg text-gray-500 bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          >
            <option value="Rice">Rice</option>
            <option value="Wheat">Wheat</option>
            <option value="Cotton">Cotton</option>
            {/* More options */}
          </select>
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Crop Year</label>
          <input
            type="date"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Area (Acres)</label>
          <input
            type="number"
            placeholder="Enter area in acres"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Fertilizer Used (kg)</label>
          <input
            type="number"
            placeholder="Enter fertilizer in kg"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Production (Tons)</label>
          <input
            type="number"
            placeholder="Enter production in tons"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">Pesticides Used (L)</label>
          <input
            type="number"
            placeholder="Enter pesticides in liters"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <label className="text-lg font-semibold">State</label>
          <input
            type="text"
            placeholder="Enter state"
            className="p-4 rounded-lg bg-transparent border-2 border-white focus:outline-none focus:ring-4 focus:ring-blue-600 transition-all"
          />
        </div>

        {/* Animated Button */}
        <div className="col-span-2 text-center mt-8">
          <animated.button
            style={buttonAnimation}
            onClick={handleAction}
            className="w-full py-5 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all ease-in-out"
          >
            Get Prediction
          </animated.button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-3xl shadow-xl w-96 transform transition-all duration-300 scale-110">
            <h2 className="text-3xl font-semibold text-center text-white mb-4">
              {dataSubmitted ? "Prediction Processed!" : "Thank You!"}
            </h2>
            <p className="text-center text-white opacity-80 mb-6">
              Your data is being processed. We'll get back to you soon with an accurate prediction.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full p-4 bg-white text-black rounded-lg hover:shadow-2xl transition-all ease-in-out transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Predict;
