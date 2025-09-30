"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [resumeSections, setResumeSections] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();

        if (res.ok) {
          setUser(data.user);
          const sections = parseResume(data.user.resumeText || "");
          setResumeSections(sections);
        } else {
          Swal.fire("❌ Error", data.msg || "Failed to fetch profile", "error");
        }
      } catch (err) {
        Swal.fire("❌ Error", err.message, "error");
      }
    };

    fetchProfile();
  }, []);

  // Parse resume into sections
  const parseResume = (text) => {
    const sections = { Biography: [] };
    const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

    let current = "Biography";

    lines.forEach((line) => {
      const l = line.toLowerCase();
      if (l.includes("education")) current = "Education";
      else if (l.includes("experience")) current = "Experience";
      else if (l.includes("skills")) current = "Skills";
      else if (l.includes("certifications")) current = "Certifications";

      if (!sections[current]) sections[current] = [];
      sections[current].push(line);
    });

    Object.keys(sections).forEach((key) => {
      sections[key] = sections[key].join("\n");
    });

    return sections;
  };

  if (!user) return <p className="text-center mt-20 text-gray-600">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-300 to-indigo-100 h-40"></div>

      {/* Main Profile Card */}
      <div className="max-w-6xl mx-auto -mt-24 px-6">
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Header: Photo + Name + Email */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={user.photo ? `data:image/png;base64,${user.photo}` : "/images/default-avatar.png"}
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <InfoCard title="Speciality" value={user.speciality || "N/A"} />
            <InfoCard title="Experience" value={user.experience || "N/A"} />
            <InfoCard title="Languages" value={user.languages?.join(", ") || "N/A"} />
            <InfoCard title="Type" value={user.type || "N/A"} />
          </div>

          {/* Resume Sections */}
          <div className="mt-10 space-y-6">
            {Object.entries(resumeSections).map(([section, content]) => (
              <div key={section} className="bg-gray-50 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">{section}</h2>

                {/* If Skills, show badges */}
                {section === "Skills" ? (
                  <div className="flex flex-wrap gap-2">
                    {content.split(/,|\n/).map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-700 whitespace-pre-wrap">{content}</p>
                )}
              </div>
            ))}
          </div>

          {/* Logout Button */}
          <div className="mt-10 flex justify-end">
            <button
              onClick={() => {
                localStorage.removeItem("token");
                Swal.fire("✅ Logged out", "You have been logged out.", "info");
                window.location.href = "/login";
              }}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Quick Info Card Component
function InfoCard({ title, value }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <p className="text-gray-800 font-medium">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{title}</p>
    </div>
  );
}
