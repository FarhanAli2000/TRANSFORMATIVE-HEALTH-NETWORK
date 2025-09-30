import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const email = location.state?.email;
  const expiresIn = location.state?.expiresIn || 30; // default 30 sec

  // Start countdown
  useEffect(() => {
    setTimeLeft(expiresIn);

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [expiresIn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (timeLeft <= 0) {
      Swal.fire("⏳ Expired", "Code has expired. Please request a new one.", "error");
      return;
    }

    const res = await fetch("http://localhost:5000/api/auth/verify-code", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, code }),
    });
    const data = await res.json();

    if (res.ok) {
      Swal.fire("✅ Verified", "Code is correct.", "success");
      navigate("/reset-password", { state: { email } });
    } else {
      Swal.fire("❌ Error", data.msg, "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 shadow rounded bg-white"
    >
      <h2 className="text-xl font-bold mb-4">Verify Code</h2>
      <input
        type="text"
        placeholder="Enter 6-digit code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        className="w-full border p-2 rounded mb-4"
      />
      <button
        type="submit"
        disabled={timeLeft <= 0}
        className={`w-full p-2 rounded ${
          timeLeft > 0 ? "bg-blue-600 text-white" : "bg-gray-400 text-gray-200"
        }`}
      >
        Verify
      </button>

      {/* Timer display */}
      <p className="text-center mt-4 text-gray-600">
        {timeLeft > 0
          ? `⏳ Code expires in ${timeLeft} seconds`
          : "⚠️ Code expired. Please request again."}
      </p>
    </form>
  );
}
