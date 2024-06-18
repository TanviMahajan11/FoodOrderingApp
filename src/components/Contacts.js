import React from 'react';

const Contacts = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl p-4 m-3 text-center">Contact Us</h1>
      <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mx-auto mb-6">
        <div className="p-4">
          <p className="text-lg text-gray-700">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>
        <form className="p-4">
          <input
            type="text"
            className="border border-gray-300 rounded-md w-full py-2 px-3 mb-3"
            placeholder="Your Name"
          />
          <textarea
            className="border border-gray-300 rounded-md w-full py-2 px-3 mb-3"
            rows="4"
            placeholder="Your Message"
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
      <div className="max-w-md bg-white shadow-md rounded-lg overflow-hidden mx-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Visit Us</h2>
          <p className="text-gray-700 mb-2">123 Main Street</p>
          <p className="text-gray-700 mb-2">San Fransico, CA, 90417</p>
        </div>
        <div className="p-4 border-t border-gray-300">
          <h2 className="text-xl font-bold mb-2">Connect With Us</h2>
          <p className="text-gray-700 mb-2">Email: foddiefinder@gmail.com</p>
          <p className="text-gray-700 mb-2">Phone: +1 234 567 890</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
