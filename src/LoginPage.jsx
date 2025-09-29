import React, { useState } from "react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Left Section - Doctors Image */}
      <div className="hidden lg:flex flex-1 relative">
        <img
          src="/images/doctors.jpg" // 👈 from public/images
          alt="Doctors"
          className="w-full h-full "
        />
        <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/40 p-4 rounded-md">
          Penatibus est feugiat sed ut dui eget eget. Arcu amet tempor tristique
          nunc lacus ullamcorper aenean. Id nisi est consectetur et. Eu viverra
          dignissim sit posuere. Urna lectus viverra pretium aliquam morbi ut
          egestas elit consequat. Odio blandit quam consectetur pharetra interdum
          nullam.
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-1 justify-center items-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Logo + Register */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/images/logo-pic.png" // 👈 from public/images
                alt="Logo"
                className="w-10 h-10"
              />
              <h1 className="font-bold text-lg text-[#1d2a57] leading-tight">
                TRANSFORMATIVE <br />
                <span className="text-[#2d84f7]">HEALTH NETWORK</span>
              </h1>
            </div>
            <a
              href="/"
              className="text-sm text-gray-500 hover:text-blue-600 transition"
            >
              Register
            </a>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800">
            Welcome to Transformative Health Network
          </h2>
          <p className="text-gray-500 mb-6">Login to continue.</p>

          {/* Form */}
          <form className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="***********"
                  className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>

          {/* Footer Links */}
          <div className="flex justify-between items-center mt-4 text-sm">
            <a href="/" className="text-blue-600 hover:underline">
              Forget Password
            </a>
          </div>

          {/* Terms */}
          <p className="text-xs text-gray-400 mt-8 text-center">
            By using Transformative Health Network you agree to our terms and
            policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
