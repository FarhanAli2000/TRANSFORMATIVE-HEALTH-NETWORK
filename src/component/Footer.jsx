"use client"

import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#111827] text-gray-300 py-12 relative overflow-hidden">
            {/* Marquee Heading */}
            {/* <div className="w-full overflow-hidden whitespace-nowrap">
                <h1 className="text-2xl font-semibold text-white animate-slide px-full">
                    Transformative Health Network
                </h1>
            </div> */}

            {/* Grid Section */}
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                {/* Logo + Newsletter */}
                <div>
                    <img
                        src="/images/logo.jpg"
                        alt="Transformative Health Network"
                        className="h-14 mb-4"
                    />
                    <p className="mb-4 text-sm">
                        Join our newsletter to stay up to date on features and releases.
                    </p>
                    <form className="flex flex-col sm:flex-row">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 rounded-md sm:rounded-l-md sm:rounded-r-none focus:outline-none text-gray-900"
                        />
                        <button
                            type="submit"
                            className="mt-2 sm:mt-0 sm:ml-0 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-md sm:rounded-l-none sm:rounded-r-md text-white"
                        >
                            Subscribe
                        </button>
                    </form>
                    <p className="text-xs mt-2 text-gray-400">
                        By subscribing you agree to our Privacy Policy and consent to
                        receive updates from our company.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Navigation</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Link One</a></li>
                        <li><a href="/" className="hover:text-white">Link Two</a></li>
                        <li><a href="/" className="hover:text-white">Link Three</a></li>
                        <li><a href="/" className="hover:text-white">Link Four</a></li>
                        <li><a href="/" className="hover:text-white">Link Five</a></li>
                    </ul>
                </div>

                {/* Extra Links */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Extra Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-white">Link Six</a></li>
                        <li><a href="/" className="hover:text-white">Link Seven</a></li>
                        <li><a href="/" className="hover:text-white">Link Eight</a></li>
                        <li><a href="/" className="hover:text-white">Link Nine</a></li>
                        <li><a href="/" className="hover:text-white">Link Ten</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <Facebook size={18} /> Facebook
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <Instagram size={18} /> Instagram
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <Twitter size={18} /> X
                        </li>
                        <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                            <Linkedin size={18} /> LinkedIn
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-700 mt-12 pt-6 text-xs sm:text-sm text-gray-400 flex flex-col md:flex-row items-center justify-between px-6 max-w-7xl mx-auto text-center md:text-left">
                <p className="mb-4 md:mb-0">
                    © 2025 Ai Mark Labs. All rights reserved.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <a href="/" className="hover:text-white">Privacy Policy</a>
                    <a href="/" className="hover:text-white">Terms of Service</a>
                    <a href="/" className="hover:text-white">Cookies Settings</a>
                </div>
            </div>

            {/* Animation Styles */}
            <style>
                {`
                    @keyframes slide {
                        0% { transform: translateX(100%); }
                        50% { transform: translateX(-100%); }
                        100% { transform: translateX(100%); }
                    }
                    .animate-slide {
                        display: inline-block;
                        animation: slide 25s linear infinite;
                    }
                    .px-full { padding-left: 100%; }
                `}
            </style>
        </footer>
    );
}
