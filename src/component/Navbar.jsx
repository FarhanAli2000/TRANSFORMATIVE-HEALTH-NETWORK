"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // hamburger + close icons
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full bg-white shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/images/logo-pic.png" alt="Logo" className="h-10 w-10" />
                    <span className="font-bold text-xl text-[#2A3C7B] leading-tight">
                        TRANSFORMATIVE <br />
                        <span className="text-[#1EA0E6]">HEALTH NETWORK</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-8 text-gray-700 font-medium">
                    <a href="/" className="text-[#1EA0E6]">Home</a>
                    <a href="/about">About</a>
                    <a href="/consulting">Consulting</a>
                    <a href="/education">Education</a>
                    <a href="/investing">Investing</a>
                    <a href="/contact">Contact</a>
                </nav>

                {/* Desktop Auth Buttons */}
                <div className="hidden md:flex gap-4">
                    <Link to="/login">
                        <button className="px-4 py-2 text-sm border border-[#1EA0E6] text-[#1EA0E6] rounded-lg">
                            Log in
                        </button>
                    </Link>
                    <button className="px-4 py-2 text-sm bg-[#1EA0E6] text-white rounded-lg">
                        Sign up
                    </button>
                </div>

                {/* Mobile Toggle Button */}
                <button
                    className="md:hidden p-2 text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t shadow-md">
                    <nav className="flex flex-col px-6 py-4 gap-4 text-gray-700 font-medium">
                        <a href="/" className="text-[#1EA0E6]">Home</a>
                        <a href="/about">About</a>
                        <a href="/consulting">Consulting</a>
                        <a href="/education">Education</a>
                        <a href="/investing">Investing</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    <div className="flex flex-col gap-3 px-6 py-4">
                        <button className="px-4 py-2 text-sm border border-[#1EA0E6] text-[#1EA0E6] rounded-lg">
                            Log in
                        </button>
                        <button className="px-4 py-2 text-sm bg-[#1EA0E6] text-white rounded-lg">
                            Sign up
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
}
