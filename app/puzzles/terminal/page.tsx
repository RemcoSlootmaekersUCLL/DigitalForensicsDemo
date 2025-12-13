"use client";

import PuzzleLayout from "../layout";
import { useRouter } from "next/navigation";
import ProgressService from "@/services/ProgressService";

export default function TerminalPuzzle() {
  const router = useRouter();
  const handleNext = () => {
    ProgressService.unlock(2);
    router.push("/puzzles/firewall");
  };
  return (
    <PuzzleLayout>
      <div className="text-white text-center p-10">
        <h1 className="text-3xl font-bold mb-4">Terminal</h1>
        <p className="text-gray-300 mb-6">
          Klik op de knop hieronder om de web-based terminal te openen. Voer daar de opdrachten uit zoals gevraagd.
        </p>
        <a
          href="https://remcoslootmaekersucll.github.io/workshopDemoTerminal/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-2 bg-blue-700 hover:bg-blue-600 rounded-lg text-white font-semibold transition"
        >
          Open Terminal ↗
        </a>
        <div className="mt-8">
          <button
            className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
            onClick={handleNext}
          >
            Volgende puzzel ➜
          </button>
        </div>
      </div>
    </PuzzleLayout>
  );
}
