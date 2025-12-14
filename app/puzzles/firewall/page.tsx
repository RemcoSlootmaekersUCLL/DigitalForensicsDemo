
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ConnectionRow from "@/components/ConnectionRow";
import FirewallHints from "@/components/FirewallHints";
import PuzzleLayout from "../layout";
import ProgressService from "@/services/ProgressService";

type Connection = {
  id: number;
  direction: "INBOUND" | "OUTBOUND";
  from: string;
  to: string;
  protocol: string;
  correct: "ALLOW" | "BLOCK";
};

export default function FirewallPuzzlePage() {
  const router = useRouter();
  const [choices, setChoices] = useState<
    Record<number, "ALLOW" | "BLOCK" | null>
  >({});
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState("");

  const connections: Connection[] = [
    {
      id: 1,
      direction: "OUTBOUND",
      from: "172.16.1.24",
      to: "1.1.1.1:443",
      protocol: "HTTPS",
      correct: "ALLOW",
    },
    {
      id: 2,
      direction: "INBOUND",
      from: "66.23.91.4",
      to: "172.16.1.24:80",
      protocol: "HTTP",
      correct: "ALLOW",
    },
    {
      id: 3,
      direction: "INBOUND",
      from: "203.44.12.7",
      to: "172.16.1.24:22",
      protocol: "SSH",
      correct: "BLOCK",
    },
    {
      id: 4,
      direction: "INBOUND",
      from: "39.117.8.22",
      to: "172.16.1.24:993",
      protocol: "IMAP",
      correct: "ALLOW",
    },
  ];

  const handleChoice = (id: number, choice: "ALLOW" | "BLOCK") => {
    setChoices((prev) => ({ ...prev, [id]: choice }));
  };

  const verifyChoices = () => {
    for (const conn of connections) {
      if (choices[conn.id] !== conn.correct) {
        setError("❌ Er zijn nog verkeerde keuzes. Probeer opnieuw.");
        return;
      }
    }
    setError("");
    setCompleted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="w-full flex flex-col items-center p-6 text-white">
        <h1 className="text-3xl font-bold mb-4">Firewall</h1>
        <p className="text-gray-300 max-w-xl text-center mb-6 font-semibold">
          Je moet 4 netwerkverbindingen beoordelen en beslissen of ze moeten
          worden toegestaan of geblokkeerd volgens de firewallregels.
          <br />
          Kies voor elke verbinding: <strong>ALLOW</strong> of{" "}
          <strong>BLOCK</strong>
        </p>

        <div className="flex gap-6 flex-wrap justify-center">
          <div className="space-y-4">
            {connections.map((conn) => (
              <ConnectionRow
                key={conn.id}
                connection={conn}
                selected={choices[conn.id] || null}
                onSelect={(choice) => handleChoice(conn.id, choice)}
                disabled={completed}
              />
            ))}
          </div>
          <FirewallHints />
        </div>

        <button
          onClick={verifyChoices}
          className="mt-6 px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
        >
          Verifieer keuzes
        </button>

        {error && <p className="text-red-400 mt-4">{error}</p>}

        {completed && (
          <>
            <div className="mt-6 bg-green-700 px-6 py-3 rounded shadow text-lg text-center">
              Firewall Config OK
              <br />
              Je hebt alle verbindingen correct beoordeeld!
            </div>
            <button
              className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
              onClick={() => {
                ProgressService.unlock(3);
                router.push("/puzzles/network");
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
}
