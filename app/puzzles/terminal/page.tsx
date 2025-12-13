"use client";

import PuzzleLayout from "../layout";
import { useRouter } from "next/navigation";
import ProgressService from "@/services/ProgressService";
import { useState } from "react";

export default function TerminalPuzzle() {
  const [name, setName] = useState<string>("");
  const [serverName, setServerName] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [completed, setCompleted] = useState<boolean>(false);

  const router = useRouter();

  const handleNext = () => {
    ProgressService.unlock(2);
    router.push("/puzzles/firewall");
  };

  const verifyInputs = () => {
    setError(null);
    if (!name || !serverName || !timezone) {
      setError("Je hebt niet alle velden ingevuld!");
    }

    if (timezone.trim().toLowerCase() !== "gmt-6") {
      setError(`${timezone} is niet juist.`);
      return;
    }

    if (serverName.trim().toLowerCase() !== "g-rout") {
      setError(`${serverName} is niet juist.`);
      return;
    }

    if (name.trim().toLowerCase() !== "robert grant") {
      setError(`${name} is niet juist.`);
      return;
    }

    setCompleted(true);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="text-white text-center p-10">
          <h1 className="text-3xl font-bold mb-4">Terminal</h1>
          <p className="text-gray-300 mb-6">
            Klik op de knop hieronder om de web-based terminal te openen. Voer
            daar de opdrachten uit zoals gevraagd.
          </p>
          <a
            href="https://remcoslootmaekersucll.github.io/workshopDemoTerminal/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 mb-6 px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
          >
            Open Terminal ↗
          </a>
          <h2 className="text-gray-300 mb-6">
            Het systeem wil dat we ons opnieuw verifiëren:
          </h2>

          <div className="flex justify-center">
            <div className="w-full max-w-xl bg-gray-800/60 rounded-xl p-5 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Kent"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Server name:
                </label>
                <input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                  placeholder="e.g. Google Public DNS Server"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1">
                  Timezone:
                </label>
                <input
                  type="text"
                  value={timezone}
                  onChange={(e) => setTimezone(e.target.value)}
                  placeholder="e.g. Europe/Brussels"
                  className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
              onClick={verifyInputs}
            >
              Verifieer
            </button>
          </div>

          {error && <p className="text-red-400 mt-4">{error}</p>}
          {completed && (
            <>
              <div className="flex justify-center mt-6">
                <div className="w-full max-w-2xs bg-green-700 px-6 py-3 rounded shadow text-lg text-center">
                  ✅ Geverifieerd
                  <br />
                  Code: <strong>TM-849</strong>
                </div>
              </div>

              <button
                className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
                onClick={handleNext}
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
