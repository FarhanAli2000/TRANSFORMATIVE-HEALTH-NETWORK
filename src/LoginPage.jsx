"use client";

import { useState } from "react";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Image with Doctors */}
            <div className="w-1/2 relative hidden md:block">
                <img
                    src="/images/doctors.jpg"
                    alt="Doctors"
                    className="h-full w-full object-cover"
                />
                <div className="absolute bottom-8 left-8 right-8 text-white text-sm">
                    <p>
                        Penatibus est feugiat sed ut dui eget eget. Arcu amet tempor
                        tristique nunc lacus ullamcorper aenean aenean. Id nisi est
                        consectetur et. Eu viverra dignissim sit posuere.
                    </p>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-8">
                <div className="max-w-md w-full">
                    {/* Logo */}
                    <div className="flex justify-between items-center mb-12">
                        <img
                            src="/images/logo.png"
                            alt="Transformative Health Network"
                            className="h-8"
                        />
                        <a href="/register" className="text-gray-400 hover:text-black">
                            Register
                        </a>
                    </div>

                    {/* Heading */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome to Transformative Health Network
                    </h2>
                    <p className="text-gray-500 mb-8">Login to continue.</p>

                    {/* Form */}
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="mt-1 w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="*************"
                                    className="mt-1 w-full rounded-md border border-gray-300 p-3 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
                        >
                            Log In
                        </button>

                        <div className="flex justify-between text-sm">
                            <a href="/forgot-password" className="text-blue-600">
                                Forgot Password
                            </a>
                        </div>
                    </form>

                    {/* Footer */}
                    <p className="text-xs text-gray-400 mt-12">
                        By using Transformative Health Network you agree to our terms and
                        policy.
                    </p>
                </div>
            </div>
        </div>
    );
}
