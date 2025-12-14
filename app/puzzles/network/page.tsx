"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PuzzleLayout from "../layout";
import ProgressService from "@/services/ProgressService";

const NetworkTracing = () => {
  const router = useRouter();

  const suspiciousIp = "185.203.116.42";

  const ipAddresses = ["10.0.12.5", "192.168.1.34", suspiciousIp, "172.16.4.9"];

  const [selected, setSelected] = useState<string | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);
  const [error, setError] = useState("");

  const handleSelect = (ip: string) => {
    if (completed) return;
    setSelected(ip);
  };

  const verifyChoice = () => {
    if (selected === suspiciousIp) {
      setError("");
      setCompleted(true);
    } else {
      setError(
        "❌ Dit IP-adres hoort bij een intern netwerk. Zoek het publieke IP."
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="w-full flex flex-col items-center p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">Netwerk Tracing</h1>
        <p className="text-gray-300 max-w-xl text-center mb-6 font-semibold">
          In het logbestand staan meerdere IP-adressen. Interne IP-adressen
          worden niet gerouteerd over het publieke netwerk (openbare internet).
          Zoek met deze informatie welk IP-adres hier duidelijk niet thuishoort.
          Klik op het verdachte IP-adres.
        </p>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 w-full max-w-md space-y-3">
          {ipAddresses.map((ip) => (
            <button
              key={ip}
              onClick={() => handleSelect(ip)}
              className={`w-full text-left px-4 py-2 rounded-md transition border ${
                selected === ip
                  ? "border-blue-500 bg-slate-800"
                  : "border-slate-700 hover:bg-slate-800"
              }`}
            >
              {ip}
            </button>
          ))}
        </div>
        <button
          onClick={verifyChoice}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
        >
          Verifieer IP
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {completed && (
          <>
            <div className="mt-6 bg-green-700 px-6 py-3 rounded shadow text-lg text-center">
              Verdacht IP gevonden
              <br />
              Dit IP-adres is publiek en hoort niet in het interne netwerk.
              <br />
              Code: <strong>NT-4821</strong>
            </div>
            <button
              className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
              onClick={() => {
                ProgressService.unlock(4);
                router.push("/puzzles/programming");
              }}
            >
              Volgende puzzel ➜
            </button>
          </>
        )}
      </div>
      </PuzzleLayout>
    </div>
  );
};

export default NetworkTracing;
