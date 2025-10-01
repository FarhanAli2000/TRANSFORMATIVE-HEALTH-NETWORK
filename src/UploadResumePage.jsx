"use client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function UploadResumePage() {
  const [resume, setResume] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      Swal.fire("❌ Error", "File size must be less than 5MB", "error");
      return;
    }

    if (type === "resume") setResume(file);
    if (type === "photo") setPhoto(file);
  };

  const handleUpload = async () => {
    if (!resume || !photo) {
      Swal.fire("❌ Error", "Please upload both resume and photo.", "error");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("resume", resume);
    formData.append("photo", photo);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/auth/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      setLoading(false);

      if (res.ok) {
        Swal.fire("✅ Success", "Resume & Photo uploaded successfully!", "success");
        navigate("/profile");
      } else {
        Swal.fire("❌ Error", data.msg || "Upload failed", "error");
      }
    } catch (err) {
      setLoading(false);
      Swal.fire("❌ Error", err.message, "error");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      {/* Left Image */}
      <div className="hidden md:flex items-center justify-center bg-gray-100">
        <img src="/images/doctors.jpg" alt="Doctors" className="max-h-[80%] rounded-lg shadow" />
      </div>

      {/* Right Form */}
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-2">Upload Your Resume</h2>

        {/* Resume Upload */}
        <div className="w-full max-w-md border rounded-lg p-4 mb-4">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="hidden"
            id="resumeUpload"
            onChange={(e) => handleFileChange(e, "resume")}
          />
          <label htmlFor="resumeUpload" className="cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 rounded inline-block">
            📄 {resume ? resume.name : "Upload Resume"}
          </label>
        </div>

        {/* Photo Upload */}
        <div className="w-full max-w-md border rounded-lg p-4 mb-6">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="photoUpload"
            onChange={(e) => handleFileChange(e, "photo")}
          />
          <label htmlFor="photoUpload" className="cursor-pointer px-4 py-2 bg-blue-100 text-blue-600 rounded inline-block">
            📷 {photo ? photo.name : "Upload Photo"}
          </label>
        </div>

        <button
          onClick={handleUpload}
          className="w-full max-w-md bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Upload & Continue"}
        </button>
      </div>
    </div>
  );
}
