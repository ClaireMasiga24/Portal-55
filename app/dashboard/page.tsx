"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  // 🔐 Protect route
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  // 🧠 Dummy data
  const cases = [
    {
      id: 1,
      type: "Sexual Violence",
      hours: 18,
      status: "URGENT",
      action: "Administer HIV PEP immediately",
    },
    {
      id: 2,
      type: "Physical Violence",
      hours: 96,
      status: "Stable",
      action: "Continue standard care",
    },
  ];

  return (
    <main className="min-h-screen bg-purple-50 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-purple-800">
          Clinical Dashboard
        </h1>

        <button
          onClick={() => {
            localStorage.removeItem("isLoggedIn");
            router.push("/login");
          }}
          className="text-sm text-red-500"
        >
          Logout
        </button>
      </div>

      {/* METRICS */}
      <div className="grid md:grid-cols-3 gap-4 mb-8">

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Active Cases</p>
          <h2 className="text-xl font-bold text-purple-800">2</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Urgent Cases</p>
          <h2 className="text-xl font-bold text-red-600">1</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Referrals Needed</p>
          <h2 className="text-xl font-bold text-yellow-600">1</h2>
        </div>

      </div>

      {/* URGENT ALERT */}
      <div className="bg-red-100 border border-red-300 p-5 rounded-xl mb-8">
        <h2 className="text-lg font-bold text-red-700 mb-2">
          🚨 Urgent Clinical Alert
        </h2>
        <p className="text-sm text-red-700">
          A survivor presented within 18 hours of sexual violence.
          Immediate HIV PEP is required within the 72-hour window.
        </p>
      </div>

      {/* CASE LIST */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Recent Cases
        </h2>

        <div className="space-y-4">
          {cases.map((c) => (
            <div
              key={c.id}
              className="border p-4 rounded-lg flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{c.type}</p>
                <p className="text-sm text-gray-500">
                  {c.hours} hours since incident
                </p>
              </div>

              <div className="text-right">
                <p
                  className={`text-sm font-bold ${
                    c.status === "URGENT"
                      ? "text-red-600"
                      : "text-green-600"
                  }`}
                >
                  {c.status}
                </p>
                <p className="text-xs text-gray-500">
                  {c.action}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ACTION BUTTON */}
      <button
        onClick={() => router.push("/create-case")}
        className="mt-6 bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition"
      >
        + Create New Case
      </button>

    </main>
  );
}