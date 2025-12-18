"use client";

import React, { useState } from "react";
import PuzzleLayout from "../layout";

const FILES = [
  { name: "systeem.log", suspicious: false },
  { name: "fin_admin.xlsx", suspicious: false },
  { name: "kernel32.dll", suspicious: true },
  { name: "backup_2025-12-01.zip", suspicious: false },
  { name: "invoice_2025.pdf", suspicious: false },
  { name: "malware.exe", suspicious: true },
  { name: "readme.txt", suspicious: false },
  { name: "config.sys", suspicious: false },
];

export default function RecoveryPuzzle() {
  // step state: 0=file, 1=network, 2=password, 3=done
  const [step, setStep] = useState(0);

  const [selected, setSelected] = useState<number[]>([]);
  const [error, setError] = useState("");

  const CABLES = [
    { id: 1, label: "Kabel A", color: "red" },
    { id: 2, label: "Kabel B", color: "blue" },
    { id: 3, label: "Kabel C", color: "green" },
  ];
  const PORTS = ["Poort 1", "Poort 2", "Poort 3"];
  // oplossing: kabel A → poort 2, kabel B → poort 3, kabel C → poort 1
  const SOLUTION = ["Poort 2", "Poort 3", "Poort 1"];
  const [connections, setConnections] = useState<(string | null)[]>([
    null,
    null,
    null,
  ]);
  const [netError, setNetError] = useState("");

  // wachtwoord is base64 van "robert123g-rout" => cm9iZXJ0MTIzZy1yb3V0
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");

  const [showEnd, setShowEnd] = useState(false);

  const handleToggle = (idx: number) => {
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };
  const handleRecover = () => {
    setError("");
    const correct = FILES.map((f, i) => (f.suspicious ? i : null)).filter(
      (i) => i !== null
    );
    if (
      selected.length === correct.length &&
      correct.every((i) => selected.includes(i!))
    ) {
      setStep(1);
    } else {
      setError("Niet alle verdachte/corrupte bestanden zijn geselecteerd!");
    }
  };

  const handleSelect = (cableIdx: number, port: string) => {
    setConnections((prev) => {
      const newArr = [...prev];
      newArr[cableIdx] = port;
      return newArr;
    });
  };
  const handleCheck = () => {
    setNetError("");
    if (connections.every((val, idx) => val === SOLUTION[idx])) {
      setStep(2);
    } else {
      setNetError(
        "Niet alle kabels zijn correct aangesloten! Gebruik de hints."
      );
    }
  };

  const handlePw = () => {
    setPwError("");
    if (pwInput.trim() === "robert123g-rout") {
      setStep(3);
      setTimeout(() => setShowEnd(true), 1200);
    } else {
      setPwError(
        "Wachtwoord onjuist. Hint: decodeer de base64-string van 'cm9iZXJ0MTIzZy1yb3V0'."
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="text-white text-center p-10">
          <h1 className="text-3xl font-bold mb-4">Recovery</h1>

          {step === 0 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-2">1. File Recovery</h2>
              <p className="text-gray-300 mb-4">
                De server is gecrasht door corrupte of verdachte bestanden.
                <br />
                Ga terug naar{" "}
                <a
                  className="text-blue-500 hover:text-blue-400"
                  href="https://remcoslootmaekersucll.github.io/workshopDemoTerminal/"
                >
                  de terminal
                </a>{" "}
                en kijk naar de details van de bestanden met het commando{" "}
                <code>ls</code>.
                <br />
                Selecteer alle verdachte/corrupte bestanden in de lijst
                hieronder en klik op{" "}
                <span className="text-green-300 font-semibold">Herstel</span> om
                het systeem te repareren.
              </p>
              <div className="max-w-sm mx-auto bg-gray-800/70 rounded-xl p-6 shadow-lg mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                      <th className="py-2">Bestandsnaam</th>
                      <th>Selecteer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FILES.map((file, idx) => (
                      <tr
                        key={file.name}
                        className={
                          selected.includes(idx) ? "bg-yellow-900/40" : ""
                        }
                      >
                        <td className="py-2 font-mono">{file.name}</td>
                        <td>
                          <input
                            type="checkbox"
                            checked={selected.includes(idx)}
                            onChange={() => handleToggle(idx)}
                            className="w-5 h-5 accent-green-500"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {error && <div className="text-red-400 mt-3">{error}</div>}
                <button
                  className="mt-6 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white font-semibold transition"
                  onClick={handleRecover}
                >
                  Herstel
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-2">2. Netwerk Herstel</h2>
              <p className="text-gray-300 mb-4">
                De netwerkverbindingen zijn losgekoppeld!
                <br />
                Verbind elke kabel met de juiste poort. Gebruik de hints:
              </p>
              <div className="mb-4 text-left max-w-lg mx-auto text-yellow-200 text-sm">
                <ul className="list-disc pl-6">
                  <li>Kabel A hoort niet op Poort 1.</li>
                  <li>Kabel B hoort op een hogere poort dan Kabel A.</li>
                  <li>Kabel C hoort niet op Poort 2.</li>
                </ul>
              </div>
              <div className="max-w-lg mx-auto bg-gray-800/70 rounded-xl p-6 shadow-lg mb-4">
                <table className="w-full text-sm mb-4">
                  <thead>
                    <tr className="text-gray-400 border-b border-gray-700">
                      <th className="py-2">Kabel</th>
                      <th>Verbind met poort</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CABLES.map((cable, idx) => (
                      <tr key={cable.id}>
                        <td
                          className="py-2 font-semibold"
                          style={{ color: cable.color }}
                        >
                          {cable.label}
                        </td>
                        <td>
                          <select
                            className="px-3 py-1 rounded bg-gray-900 border border-gray-700 text-white"
                            value={connections[idx] || ""}
                            onChange={(e) => handleSelect(idx, e.target.value)}
                          >
                            <option value="">Kies poort</option>
                            {PORTS.map((port) => (
                              <option key={port} value={port}>
                                {port}
                              </option>
                            ))}
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {netError && (
                  <div className="text-red-400 mb-2">{netError}</div>
                )}
                <button
                  className="mt-4 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white font-semibold transition"
                  onClick={handleCheck}
                >
                  Controleer verbindingen
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-2">3. Wachtwoord Herstel</h2>
              <p className="text-gray-300 mb-4">
                Het beheerderswachtwoord is gecodeerd.
                <br />
                Decodeer de volgende string en vul het wachtwoord in:
                <br />
                <span className="text-green-300 font-mono">
                  cm9iZXJ0MTIzZy1yb3V0
                </span>
              </p>
              <div className="max-w-md mx-auto bg-gray-800/70 rounded-xl p-6 shadow-lg mb-4">
                <input
                  type="text"
                  value={pwInput}
                  onChange={(e) => setPwInput(e.target.value)}
                  className="w-full px-3 py-2 rounded bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500 font-mono mb-3"
                  placeholder="Wachtwoord..."
                />
                {pwError && <div className="text-red-400 mb-2">{pwError}</div>}
                <button
                  className="mt-2 px-6 py-2 bg-green-700 hover:bg-green-600 rounded-lg text-white font-semibold transition"
                  onClick={handlePw}
                >
                  Herstel wachtwoord
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
              <div className="bg-gray-900 rounded-xl p-10 shadow-2xl text-center max-w-lg mx-auto">
                <h2 className="text-3xl font-bold text-green-400 mb-4">
                  Systeem Volledig Hersteld!
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  Alle recovery taken zijn succesvol afgerond.
                  <br />
                  <span className="text-green-300">
                    Gefeliciteerd, je hebt het systeem volledig hersteld!
                  </span>
                </p>
                <div className="text-2xl mb-2">🎉</div>
              </div>
            </div>
          )}
        </div>
      </PuzzleLayout>
    </div>
  );
}
