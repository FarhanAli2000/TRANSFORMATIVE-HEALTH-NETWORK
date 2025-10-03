"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "./constants";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
    
      if (res.ok) {
        console.log("Login successful:", data);
        // ✅ Save token
        localStorage.setItem("token", data.token);

        // ✅ Ensure profileImage exists
        const userData = {
          ...data.user,
          profileImage: data.user.profileImage || "/images/default-avatar.png",
        };

        // ✅ Save user object in localStorage
        localStorage.setItem("user", JSON.stringify(userData));

        // ✅ Resume status check
        if (userData.resumeUploaded) {
          Swal.fire({
            icon: "info",
            title: "Profile Already Exists",
            text: "Aapki profile already bani hui hai. Redirecting to profile...",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => navigate("/profile"), 2000);
        } else {
          Swal.fire({
            icon: "success",
            title: "Welcome 🎉",
            text: "Login successful! Please upload your resume to continue.",
            showConfirmButton: false,
            timer: 2000,
          });
          setTimeout(() => navigate("/upload-resume"), 2000);
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Credentials",
          text: data.msg || "Please check your email & password.",
        });
      }
    } catch (err) {
      Swal.fire("❌ Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="flex h-screen">
      {/* Left Image */}
      <div className="hidden lg:flex flex-1 relative">
        <img src="/images/doctors.jpg" alt="Doctors" className="w-full h-full" />
      </div>

      {/* Right Form */}
      <div className="flex flex-1 justify-center items-center bg-white px-6">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6">Welcome Back</h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 mt-1"
                required
              />
            </div>

            <div>
              <label>Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 mt-1"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2"
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Log In
            </button>
          </form>

          {/* ✅ Register Button */}
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
