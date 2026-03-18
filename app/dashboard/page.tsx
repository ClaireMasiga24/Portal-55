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

  // 🧠 MVP-focused cases (Sexual violence timing logic)
  const cases = [
    {
      id: 1,
      type: "Sexual Violence",
      hours: 18,
    },
    {
      id: 2,
      type: "Sexual Violence",
      hours: 80,
    },
  ];

  // 🧠 Helper logic
  const getCaseStatus = (hours: number) => {
    if (hours < 24) return "CRITICAL";
    if (hours < 72) return "URGENT";
    return "STABLE";
  };

  const getTimeRemaining = (hours: number) => {
    const remaining = 72 - hours;
    return remaining > 0 ? `${remaining} hrs remaining` : "Window missed";
  };

  const urgentCases = cases.filter((c) => c.hours < 72).length;

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
          <h2 className="text-xl font-bold text-purple-800">
            {cases.length}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Within 72hr Window</p>
          <h2 className="text-xl font-bold text-red-600">
            {urgentCases}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-sm text-gray-500">Missed Window</p>
          <h2 className="text-xl font-bold text-gray-700">
            {cases.length - urgentCases}
          </h2>
        </div>

      </div>

      {/* URGENT ALERT */}
      {urgentCases > 0 && (
        <div className="bg-red-100 border border-red-300 p-5 rounded-xl mb-8">
          <h2 className="text-lg font-bold text-red-700 mb-2">
            🚨 Time-Critical Cases Detected
          </h2>
          <p className="text-sm text-red-700">
            {urgentCases} case(s) are still within the 72-hour HIV prevention window.
            Immediate clinical action is required.
          </p>
        </div>
      )}

      {/* CASE LIST */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">
          Active Cases
        </h2>

        <div className="space-y-4">
          {cases.map((c) => {
            const status = getCaseStatus(c.hours);

            return (
              <div
                key={c.id}
                onClick={() => router.push(`/case/${c.id}?hours=${c.hours}`)}
                className="border p-4 rounded-lg flex justify-between items-center cursor-pointer hover:bg-purple-50 transition"
              >
                <div>
                  <p className="font-semibold">{c.type}</p>
                  <p className="text-sm text-gray-500">
                    {c.hours} hours since incident
                  </p>
                  <p className="text-xs text-gray-500">
                    {getTimeRemaining(c.hours)}
                  </p>
                </div>

                <div className="text-right">
                  <p
                    className={`text-sm font-bold ${
                      status === "CRITICAL"
                        ? "text-red-700"
                        : status === "URGENT"
                        ? "text-orange-600"
                        : "text-green-600"
                    }`}
                  >
                    {status}
                  </p>

                  <p className="text-xs text-gray-500">
                    {c.hours < 72
                      ? "PEP may still be administered"
                      : "Provide follow-up care"}
                  </p>
                </div>
              </div>
            );
          })}
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