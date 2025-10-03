import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { baseUrl } from "./constants";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${baseUrl}/auth/forgot-password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();

    if (res.ok) {
      Swal.fire("✅ Code Sent", "Check your email for the reset code.", "success");

      // yahan expiresIn bhi bhej dein (backend ne bheja tha)
      navigate("/verify-code", { state: { email, expiresIn: data.expiresIn } });
    } else {
      Swal.fire("❌ Error", data.msg || "Something went wrong", "error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-20 p-6 shadow rounded bg-white"
    >
      <h2 className="text-xl font-bold mb-4">Forgot Password</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded">
        Send Code
      </button>
    </form>
  );
}
