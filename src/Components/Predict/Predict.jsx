import React, { useState } from 'react';

function Predict() {
  const [showModal, setShowModal] = useState(false);
  const [dataSubmitted, setDataSubmitted] = useState(false);

  const handleAction = () => {
    setDataSubmitted(true);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
<div>
    <h1 className='text-center text-3xl font-bold py-5 px-10'>AI Agriculture Tecnology Optimizing Crop Yeild Prediction</h1>
</div>

      {/* Dashboard Container */}
      <div className="max-w-7xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Crop Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Select Crop</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <select
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              defaultValue="Rice"
            >
              <option value="Rice">Rice</option>
              <option value="Arecanut">Arecanut</option>
  <option value="Arhar/Tur">Arhar/Tur</option>
  <option value="Castor seed">Castor seed</option>
  <option value="Coconut">Coconut</option>
  <option value="Cotton(lint)">Cotton (lint)</option>
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
  <option value="Rice">Rice</option>
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
        </div>
{/* Crop year */}
<div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Crop year</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="date"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter Crop in Date"
            />
          </div>
        </div>

        {/* Area Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Area (Acres)</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="number"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter area in acres"
            />
          </div>
        </div>

        {/* Fertilizer Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Fertilizer Used (kg)</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="number"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter fertilizer in kg"
            />
          </div>
        </div>

        {/* Production Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Production (Tons)</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="number"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter production in tons"
            />
          </div>
        </div>


        {/* Pesticides Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">Pesticides Used (L)</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="number"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter pesticides in liters"
            />
          </div>
        </div>

        {/* State Card */}
        <div className="bg-gray-200 p-6 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-black mb-4">State</h3>
          <div className="bg-gray-100 p-4 rounded-3xl shadow-lg">
            <input
              type="text"
              className="w-full bg-transparent text-black  rounded-lg focus:outline-none"
              placeholder="Enter state"
            />
          </div>
        </div>

      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-16 right-16">
        <button
          onClick={handleAction}
          className="w-20 h-20  bg-black text-white border-2 border-black text-xl font-bold hover:bg-white hover:text-black  rounded-full shadow-xl transform transition-all duration-300   flex justify-center items-center"
        >
            Result
          {/* <span className="text-3xl">📊</span> */}
        </button>
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
  );
}

export default Predict;
