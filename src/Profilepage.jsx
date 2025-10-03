"use client";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { baseUrl } from "./constants";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [resumeSections, setResumeSections] = useState({});
  const [editSection, setEditSection] = useState(null);
  const [editContent, setEditContent] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${baseUrl}/auth/profile`, {
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
      else if (l.includes("projects")) current = "Projects";

      if (!sections[current]) sections[current] = [];
      sections[current].push(line);
    });

    Object.keys(sections).forEach((key) => {
      sections[key] = sections[key].join("\n");
    });

    return sections;
  };

  // Save Edited Section
  const handleSave = () => {
    setResumeSections((prev) => ({
      ...prev,
      [editSection]: editContent,
    }));
    setEditSection(null);
    Swal.fire("✅ Updated", `${editSection} updated successfully`, "success");
  };

  if (!user)
    return <p className="text-center mt-20 text-gray-600">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gray-100 relative">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-400 to-indigo-200 h-40"></div>

      {/* Main Profile Card */}
      <div className="max-w-6xl mx-auto -mt-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src={
                user.photo
                  ? `data:image/png;base64,${user.photo}`
                  : "/images/default-avatar.png"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white shadow-md"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
              <p className="text-gray-500">{user.email}</p>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            <InfoCard title="Speciality" value={user.speciality || "N/A"} />
            <InfoCard title="Experience" value={user.experience || "N/A"} />
            <InfoCard title="Languages" value={user.languages?.join(", ") || "N/A"} />
            <InfoCard title="Type" value={user.type || "N/A"} />
          </div>

          {/* Resume Sections */}
          <div className="mt-10 space-y-6">
            {Object.entries(resumeSections).map(([section, content]) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg shadow p-6 relative"
              >
                {/* Section Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">{section}</h2>
                  <button
                    onClick={() => {
                      setEditSection(section);
                      setEditContent(content);
                    }}
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    ✏️ Edit
                  </button>
                </div>

                {/* Custom Rendering */}
                {section === "Skills" ? (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {content.split(/,|\n/).map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                ) : section === "Projects" ? (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                    {content.split("\n").map((proj, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
                      >
                        <h3 className="font-semibold text-gray-700">
                          📌 {proj.split("-")[0]}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {proj.split("-")[1] || ""}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : section === "Experience" ? (
                  <div className="border-l-4 border-indigo-500 pl-4 mt-3 space-y-3">
                    {content.split("\n").map((exp, idx) => (
                      <p key={idx} className="text-gray-700">
                        • {exp}
                      </p>
                    ))}
                  </div>
                ) : section === "Biography" ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="text-gray-700 leading-relaxed mt-3"
                  >
                    {content}
                  </motion.p>
                ) : (
                  <p className="text-gray-700 mt-3 whitespace-pre-wrap">{content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex justify-between">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
            >
              ← Back to Home
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("token");
                Swal.fire("✅ Logged out", "You have been logged out.", "info");
                navigate("/login");
              }}
              className="px-6 py-3 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
            >
              Log Out
            </button>
          </div>
        </motion.div>
      </div>

      {/* Back to Top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-indigo-700"
      >
        ⬆ Top
      </button>

      {/* Edit Modal */}
      {editSection && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Edit {editSection}</h2>
            <textarea
              className="w-full border rounded p-3 h-40"
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => setEditSection(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Info Card Component
function InfoCard({ title, value }) {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-sm">
      <p className="text-gray-800 font-medium">{value}</p>
      <p className="text-xs text-gray-500 mt-1">{title}</p>
    </div>
  );
}
