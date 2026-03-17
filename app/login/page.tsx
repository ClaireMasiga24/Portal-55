"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setError("");

    setTimeout(() => {
      if (email === "doctor@portal55.com" && password === "1234") {
        localStorage.setItem("isLoggedIn", "true");
        router.push("/dashboard");
      } else {
        setError("Invalid credentials. Please try again.");
        setLoading(false);
      }
    }, 800);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-purple-800 mb-2 text-center">
          Portal55
        </h1>

        <p className="text-sm text-gray-500 mb-6 text-center">
          Secure login for healthcare professionals
        </p>

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleLogin()}
        />

        {/* PASSWORD WITH SHOW/HIDE */}
        <div className="relative mb-2">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-sm text-purple-600"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right mb-4">
          <button
            onClick={() => alert("Password reset feature coming soon")}
            className="text-xs text-purple-600 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <p className="text-red-500 text-sm mb-3">{error}</p>
        )}

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-600 transition disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Login"}
        </button>

        {/* SIGN UP */}
        <p className="text-sm text-gray-500 mt-6 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => alert("Signup page coming soon")}
            className="text-purple-700 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>

        {/* DEMO NOTE */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          Demo: doctor@portal55.com / 1234
        </p>

      </div>
    </main>
  );
}