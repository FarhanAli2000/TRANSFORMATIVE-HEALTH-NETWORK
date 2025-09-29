import React from "react";

const FinalForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white text-black p-8 gap-8">
      {/* Left Side: Form Section */}
      <div className="flex-1">
        <a href="#" className="text-xs text-blue-600 underline mb-2 inline-block">
          Join the Expert Network
        </a>

        <p className="mb-6 text-gray-700 text-lg">
          Join our expert network to contribute your knowledge, mentor startups, or speak at events.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-transparent border border-gray-400 text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-transparent border border-gray-400 text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="bg-transparent border border-gray-400 text-black px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="bg-transparent border border-gray-400 text-black px-4 py-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md w-fit transition"
          >
            Submit →
          </button>
        </form>
      </div>

      {/* Right Side: Map Section */}
      <div className="flex-1 h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          // 👉 Ye embed link API key ke bagair chalega
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.0653673168956!2d73.049879!3d33.6559434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df956df43fc68b%3A0x1c4fcbd1ac5a8497!2sPorta%20Sanitary%20Ware!5e0!3m2!1sen!2s!4v1695981234567!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
};

export default FinalForm;
