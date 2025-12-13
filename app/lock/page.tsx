"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LockScreen() {
  const [showFolder, setShowFolder] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const correctPassword = "1985"; // geboortejaar netwerkbeheerder +1

  const submitPassword = () => {
  if (password === correctPassword) {
    Cookies.set("unlocked", "true");
    Cookies.set("puzzleProgress", "1");
    router.push("/");
  } else {
    setError(true);
    setTimeout(() => setError(false), 600);
  }
};

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative font-sans">

      {/* Tip Post-it */}
      <div className="absolute top-6 right-6 bg-yellow-200 text-black p-4 rounded shadow-xl w-60 rotate-2 border border-yellow-300">
        <p className="text-sm font-semibold">
          🎉 Vandaag viert de netwerkbeheerder zijn verjaardag!
        </p>
        <p className="text-sm font-semibold">
          💡 Tip: De jaren kloppen bijna… maar iedereen lijkt nét iets te vroeg geboren.
        </p>
      </div>

      {/* Title */}
      <h1 className="text-4xl mb-8 font-bold drop-shadow-lg">
        🔒 Toegang vereist
      </h1>

      {/* Folder Icon */}
      <div
        onClick={() => setShowFolder(true)}
        className="flex flex-col items-center cursor-pointer group mb-8"
      >
        <div className="bg-yellow-400 w-24 h-16 rounded-t-md shadow-md relative group-hover:brightness-110 transition">
          <div className="absolute top-0 left-0 bg-yellow-300 w-12 h-4 rounded-t-md"></div>
        </div>
        <p className="mt-2 text-sm opacity-80 group-hover:opacity-100 transition">
          Personeelsmap
        </p>
      </div>

      {/* Folder modal */}
      {showFolder && (
        <div className="bg-gray-800/95 border border-gray-600 p-6 rounded-xl shadow-2xl w-[420px] animate-fadeIn mb-8 text-center">
          <h2 className="text-xl font-bold mb-4">📁 Personeelslijst</h2>

          <ul className="text-sm leading-7">
            <li><strong>Noah S.</strong> – Admin – 1999</li>
            <li><strong>Emma V.</strong> – IT – 2002</li>
            <li><strong>Klaas A.</strong> – Consultant – 1983</li>
            <li><strong>Lotte D.</strong> – HR – 1995</li>
            <li><strong>Sven B.</strong> – Helpdesk – 2000</li>
            <li><strong>Amira K.</strong> – Data Analyst – 1994</li>
            <li><strong>Tom R.</strong> – Netwerkbeheerder – 1984</li>
            <li><strong>Victor D.</strong> – Security Analyst – 1991</li>
            <li><strong>Nina F.</strong> – Frontend Developer – 1999</li>
          </ul>

          <button
            onClick={() => setShowFolder(false)}
            className="mt-5 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
          >
            Sluit map
          </button>
        </div>
      )}

      {/* Password box */}
      <div className="flex items-center gap-3">
        <input
          type="password"
          placeholder="Wachtwoord..."
          className={`px-4 py-2 rounded-lg text-black text-lg bg-white shadow-lg focus:ring-2 focus:ring-blue-400 ${
            error ? "animate-shake border-2 border-red-500" : "border border-gray-300"
          }`}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={submitPassword}
          className="bg-blue-600 px-5 py-2 rounded-lg text-lg font-semibold hover:bg-blue-500 shadow-lg transition"
        >
          Unlock
        </button>
      </div>
    </div>
  );
}
