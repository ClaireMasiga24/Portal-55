"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-purple-50 p-6 flex flex-col items-center">
      
      {/* HEADER */}
      <div className="w-full max-w-6xl flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-purple-800">Portal55</h1>

        <button
          onClick={() => router.push("/login")}
          className="bg-purple-700 text-white px-5 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Login
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="text-center max-w-3xl mb-12">
        <h2 className="text-4xl font-bold text-purple-900 mb-4 leading-tight">
          Integrated Care for GBV Survivors
        </h2>

        <p className="text-gray-600 mb-6 text-lg">
          Portal55 enables healthcare providers to deliver timely clinical care,
          document forensic evidence, and coordinate referrals — all within one
          secure, intelligent system.
        </p>

        {/* 🔐 ALL ACTIONS → LOGIN */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => router.push("/login")}
            className="bg-purple-700 text-white px-6 py-3 rounded-xl hover:bg-purple-600 transition"
          >
            Start Case
          </button>

          <button
            onClick={() => router.push("/login")}
            className="border border-purple-700 text-purple-700 px-6 py-3 rounded-xl hover:bg-purple-100 transition"
          >
            Access Dashboard
          </button>
        </div>
      </div>

      {/* FEATURES */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Clinical Decision Support
          </h3>
          <p className="text-gray-600 text-sm">
            Automatically guides providers through time-sensitive interventions
            such as HIV PEP within 72 hours, emergency contraception, and trauma care.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Forensic Documentation
          </h3>
          <p className="text-gray-600 text-sm">
            Structured digital records and body mapping ensure accurate,
            consistent, and court-admissible evidence collection.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            Intelligent Referral System
          </h3>
          <p className="text-gray-600 text-sm">
            Connects survivors to psychosocial and legal services instantly,
            ensuring continuity of care beyond the health facility.
          </p>
        </div>

      </div>

      {/* IMPACT SECTION 🔥 */}
      <div className="bg-purple-100 p-8 rounded-2xl max-w-4xl text-center mb-12">
        <h3 className="text-xl font-bold text-purple-900 mb-3">
          Why Portal55 Matters
        </h3>

        <p className="text-gray-700 text-sm">
          Delays in GBV response can lead to missed HIV prevention windows,
          poor evidence quality, and fragmented care. Portal55 ensures that
          no critical step is missed — improving both health outcomes and
          access to justice.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md w-full">
        <h3 className="text-xl font-bold text-purple-900 mb-3">
          Secure Access Required
        </h3>

        <p className="text-gray-600 mb-6 text-sm">
          This system is designed for authorized healthcare professionals.
          Please log in to continue.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="w-full bg-purple-700 text-white py-3 rounded-xl hover:bg-purple-600 transition"
        >
          Go to Login
        </button>
      </div>

    </main>
  );
}