import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaCheckCircle, FaRegCalendarAlt, FaRegMoneyBillAlt } from 'react-icons/fa'; // Import React Icons

const Home = () => {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-green-500 to-green-700 text-white py-24 px-6 sm:px-12 lg:px-24">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold leading-tight mb-4">
            Unlock the Future of Farming with AI-Driven Crop Yield Prediction
          </h1>
          <p className="text-xl sm:text-2xl mb-8">
            Maximize your harvest potential with advanced AI technology. Predict your crop yields with precision and make smarter decisions for a sustainable and profitable farming future.
          </p>

          <div className="mb-16">
            <Link
              to="/predict"
              className="inline-block bg-white text-green-600 text-xl font-semibold py-4 px-8 rounded-full  transition duration-300 ease-in-out"
            >
              PREDICT MY YIELD
            </Link>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <section className="py-16 px-6 sm:px-12 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-8">
            Optimize Crop Yield with AI Technology
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-12">
            The future of agriculture is here. With cutting-edge AI-powered tools, we help farmers optimize crop yield predictions, making farming smarter, more efficient, and more sustainable.
            Our AI algorithms analyze historical data, weather patterns, soil conditions, and other critical factors to provide you with accurate, real-time predictions of your crop yields. By leveraging the power of machine learning, we ensure that farmers can plan better, reduce waste, and ultimately increase profitability.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
            How Our AI Technology Works:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Data-Driven Insights</h4>
              <p className="text-gray-700">
                We collect and analyze data from various sources—satellite imagery, weather forecasts, soil sensors, and historical crop data.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Advanced Machine Learning Models</h4>
              <p className="text-gray-700">
                Our algorithms process this data to predict optimal planting times, potential yields, and risk factors, giving you actionable insights.
              </p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-xl font-semibold text-green-600 mb-4">Actionable Forecasts</h4>
              <p className="text-gray-700">
                Receive real-time, reliable forecasts and recommendations to improve crop management, irrigation, fertilization, and harvesting strategies.
              </p>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
            Why AI Crop Yield Prediction Matters:
          </h3>
          <ul className="space-y-4 mb-12 text-lg sm:text-xl text-gray-700">
            <li className="flex items-center">
              <FaCheckCircle className="w-6 h-6 text-green-600 mr-4" />
              <span>Precision Farming: Maximize resource efficiency by predicting crop needs with pinpoint accuracy.</span>
            </li>
            <li className="flex items-center">
              <FaRegCalendarAlt className="w-6 h-6 text-green-600 mr-4" />
              <span>Risk Mitigation: Make proactive decisions to protect your crops from adverse weather or disease outbreaks.</span>
            </li>
            <li className="flex items-center">
              <FaRegMoneyBillAlt className="w-6 h-6 text-green-600 mr-4" />
              <span>Increased Profitability: Plan better for harvests, reduce loss, and optimize your yield potential.</span>
            </li>
          </ul>

          {/* Predict Button */}
          <div className="mb-16">
            <Link
              to="/predict"
              className="inline-block bg-green-600 text-white text-xl font-semibold py-4 px-8 rounded-full hover:bg-green-700 transition duration-300 ease-in-out"
            >
              PREDICT MY YIELD
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="text-center">
          <p>&copy; 2024 AI Agriculture Solutions | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
