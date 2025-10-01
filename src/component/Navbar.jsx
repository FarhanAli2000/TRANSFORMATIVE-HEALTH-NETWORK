"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; 
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Click outside dropdown to close
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  const getProfileImage = (profileImage) => {
    if (!profileImage) return "/images/default-avatar.png";
    if (profileImage.startsWith("/9j/") || profileImage.startsWith("iVBOR")) {
      const type = profileImage.startsWith("/9j/") ? "jpeg" : "png";
      return `data:image/${type};base64,${profileImage}`;
    }
    return profileImage;
  };

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

        {/* Desktop Auth/Profile */}
        <div className="hidden md:flex gap-4 items-center relative" ref={dropdownRef}>
          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 focus:outline-none"
              >
                <img
                  src={getProfileImage(user.profileImage)}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300"
                />
                <ChevronDown size={20} />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-50">
                  <button
                    onClick={() => {
                      navigate("/profile");
                      setDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-lg"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-lg text-red-500"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
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

          {user && (
            <div className="flex flex-col gap-2 px-6 py-4 border-t">
              <button
                onClick={() => { navigate("/profile"); setIsOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg"
              >
                Profile
              </button>
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
