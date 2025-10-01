"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; 
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  // ✅ profile image helper
  const getProfileImage = (profileImage) => {
    if (!profileImage) return "/images/default-avatar.png";

    // agar base64 string hai
    if (profileImage.startsWith("/9j/") || profileImage.startsWith("iVBOR")) {
      // "/9j/" jpeg ka typical start hota hai
      // "iVBOR" png ka start hota hai
      const type = profileImage.startsWith("/9j/") ? "jpeg" : "png";
      return `data:image/${type};base64,${profileImage}`;
    }

    // agar URL ya normal path hai
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
        <div className="hidden md:flex gap-4 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <NavLink to="/profile">
                <img
                  src={getProfileImage(user.profileImage)}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
              </NavLink>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
              >
                Logout
              </button>
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
          <div className="flex flex-col gap-3 px-6 py-4">
            {user ? (
              <>
                <NavLink to="/profile">
                  <div className="flex items-center gap-3">
                    <img
                      src={getProfileImage(user.profileImage)}
                      alt="Profile"
                      className="w-10 h-10 rounded-full border border-gray-300"
                    />
                    <span>{user.name}</span>
                  </div>
                </NavLink>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition"
                >
                  Logout
                </button>
              </>
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
        </div>
      )}
    </header>
  );
}
