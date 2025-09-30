import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Success Alert
        Swal.fire({
          icon: "success",
          title: "Registration Successful 🎉",
          text: "Your account has been created. Redirecting to login...",
          showConfirmButton: false,
          timer: 2000,
        });

        // Redirect after 2 sec
        setTimeout(() => navigate("/login"), 2000);
      } else {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: data.msg || "Please try again.",
        });
      }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Try again later!",
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden lg:flex flex-1 relative">
        <img src="/images/doctors.jpg" alt="Doctors" className="w-full h-full" />
        <div className="absolute bottom-6 left-6 right-6 text-white text-sm bg-black/40 p-4 rounded-md">
          Penatibus est feugiat sed ut dui eget eget...
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-1 justify-center items-center bg-white px-6">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-2">
              <img src="/images/logo-pic.png" alt="Logo" className="w-10 h-10" />
              <h1 className="font-bold text-lg text-[#1d2a57] leading-tight">
                TRANSFORMATIVE <br />
                <span className="text-[#2d84f7]">HEALTH NETWORK</span>
              </h1>
            </div>
            <a
              href="/login"
              className="text-sm text-gray-500 hover:text-blue-600 transition"
            >
              Login
            </a>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-gray-800">
            Create Your Account
          </h2>
          <p className="text-gray-500 mb-6">Register to get started.</p>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
                className="w-full border rounded-lg px-3 py-2 mt-1 text-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
              Register
            </button>
          </form>

          {/* Terms */}
          <p className="text-xs text-gray-400 mt-8 text-center">
            By creating an account, you agree to our terms and policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
