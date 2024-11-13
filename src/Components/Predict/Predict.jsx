import React, { useState } from 'react';
import TypingEffect from 'react-typing-effect';
import video from "../../assets/videoPre.mp4"; // Your video file

function Predict() {
  const [showModal, setShowModal] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const handleAction = () => {
    setDataSubmitted(true);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen relative bg-gray-50 overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        {/* Header */}
        <div>
          <h1 className="text-center text-gray-50 text-3xl font-bold py-5 px-10">
          AI Agriculture Technology Optimizing Crop Yield Prediction
            {/* <TypingEffect
              text=""
              speed={100}
              eraseDelay={2000}
              typingDelay={500}
            /> */}
          </h1>
        </div>

        {/* Modern Form Layout */}
        <div className="max-w-7xl mx-auto pb-10 px-6 flex flex-col space-y-8">
          
          {/* Row 1: Crop and Crop Year */}
          <div className="flex flex-wrap gap-8">
            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Select Crop</label>
              <select className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md" defaultValue="Rice">
    <option value="Rice">Rice</option>
    <option value="Arecanut">Arecanut</option>
    <option value="Arhar/Tur">Arhar/Tur</option>
    <option value="Castor seed">Castor seed</option>
    <option value="Coconut">Coconut</option>
    <option value="Cotton(lint)">Cotton(lint)</option>
    <option value="Dry chillies">Dry chillies</option>
    <option value="Gram">Gram</option>
    <option value="Jute">Jute</option>
    <option value="Linseed">Linseed</option>
    <option value="Maize">Maize</option>
    <option value="Mesta">Mesta</option>
    <option value="Niger seed">Niger seed</option>
    <option value="Onion">Onion</option>
    <option value="Other Rabi pulses">Other Rabi pulses</option>
    <option value="Potato">Potato</option>
    <option value="Rapeseed & Mustard">Rapeseed & Mustard</option>
    <option value="Sesamum">Sesamum</option>
    <option value="Small millets">Small millets</option>
    <option value="Sugarcane">Sugarcane</option>
    <option value="Sweet potato">Sweet potato</option>
    <option value="Tapioca">Tapioca</option>
    <option value="Tobacco">Tobacco</option>
    <option value="Turmeric">Turmeric</option>
    <option value="Wheat">Wheat</option>
    <option value="Bajra">Bajra</option>
    <option value="Black pepper">Black pepper</option>
    <option value="Cardamom">Cardamom</option>
    <option value="Coriander">Coriander</option>
    <option value="Garlic">Garlic</option>
    <option value="Ginger">Ginger</option>
    <option value="Groundnut">Groundnut</option>
    <option value="Horse-gram">Horse-gram</option>
    <option value="Jowar">Jowar</option>
    <option value="Ragi">Ragi</option>
    <option value="Cashewnut">Cashewnut</option>
    <option value="Banana">Banana</option>
    <option value="Soyabean">Soyabean</option>
    <option value="Barley">Barley</option>
    <option value="Khesari">Khesari</option>
    <option value="Masoor">Masoor</option>
    <option value="Moong(Green Gram)">Moong (Green Gram)</option>
    <option value="Other Kharif pulses">Other Kharif pulses</option>
    <option value="Safflower">Safflower</option>
    <option value="Sannhamp">Sannhamp</option>
    <option value="Sunflower">Sunflower</option>
    <option value="Urad">Urad</option>
    <option value="Peas & beans (Pulses)">Peas & Beans (Pulses)</option>
    <option value="Other oilseeds">Other oilseeds</option>
    <option value="Other Cereals">Other Cereals</option>
    <option value="Cowpea(Lobia)">Cowpea (Lobia)</option>
    <option value="Oilseeds total">Oilseeds total</option>
    <option value="Guar seed">Guar seed</option>
    <option value="Other Summer Pulses">Other Summer Pulses</option>
    <option value="Moth">Moth</option>
</select>

            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Crop Year</label>
              <input
                type="date"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
              />
            </div>
          </div>

          {/* Row 2: Area and Fertilizer */}
          <div className="flex flex-wrap gap-8">
            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Area (Acres)</label>
              <input
                type="number"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
                placeholder="Enter area in acres"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Fertilizer Used (kg)</label>
              <input
                type="number"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
                placeholder="Enter fertilizer in kg"
              />
            </div>
          </div>

          {/* Row 3: Production and Pesticides */}
          <div className="flex flex-wrap gap-8">
            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Production (Tons)</label>
              <input
                type="number"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
                placeholder="Enter production in tons"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm text-gray-200 font-semibold mb-2">Pesticides Used (L)</label>
              <input
                type="number"
                className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
                placeholder="Enter pesticides in liters"
              />
            </div>
          </div>

          {/* Row 4: State */}
          <div>
            <label className="block text-sm text-gray-200 font-semibold mb-2">State</label>
            <input
              type="text"
              className="w-full p-3 border-b-2 border-gray-300 focus:outline-none focus:border-green-400 rounded-md"
              placeholder="Enter state"
            />
          </div>
          <div className='flex self-center'>
          <button
            onClick={handleAction}
            className="w-32 h-12 bg-black text-white border-2 border-black text-xl font-bold  rounded-xl shadow-xl transform transition-all duration-300 flex justify-center items-center"
          >
            Result
          </button></div>
        </div>

        
        {/* Modal for Result */}
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
            <div className="bg-gray-100 p-8 rounded-3xl shadow-lg w-96 transform transition-all duration-300 scale-110">
              <h2 className="text-3xl font-semibold text-center text-green-400 mb-4">
                {dataSubmitted ? "Data Submitted!" : "Thank You!"}
              </h2>
              <p className="text-center text-gray-300 mb-6">
                Your data has been successfully received. Our system is now processing the information.
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full p-4 bg-gray-700 text-black rounded-lg hover:bg-gray-600 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Predict;
