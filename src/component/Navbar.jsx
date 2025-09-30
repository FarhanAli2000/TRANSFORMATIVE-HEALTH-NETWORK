"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Consulting", path: "/consulting" },
    { name: "Education", path: "/education" },
    { name: "Investing", path: "/investing" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
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
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-[#1EA0E6] border-b-2 border-[#1EA0E6] pb-1"
                  : "hover:text-[#1EA0E6] transition"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <NavLink to="/login">
            <button className="px-4 py-2 text-sm border border-[#1EA0E6] text-[#1EA0E6] rounded-lg hover:bg-blue-50 transition">
              Log in
            </button>
          </NavLink>
          <NavLink to="/register">
            <button className="px-4 py-2 text-sm bg-[#1EA0E6] text-white rounded-lg hover:bg-blue-700 transition">
              Sign up
            </button>
          </NavLink>
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
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  isActive ? "text-[#1EA0E6] font-semibold" : "hover:text-[#1EA0E6] transition"
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-3 px-6 py-4">
            <NavLink to="/login">
              <button className="px-4 py-2 text-sm border border-[#1EA0E6] text-[#1EA0E6] rounded-lg hover:bg-blue-50 transition">
                Log in
              </button>
            </NavLink>
            <NavLink to="/register">
              <button className="px-4 py-2 text-sm bg-[#1EA0E6] text-white rounded-lg hover:bg-blue-700 transition">
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
