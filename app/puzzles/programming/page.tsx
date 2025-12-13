"use client";

import PuzzleLayout from "../layout";
import { useRouter } from "next/navigation";
import ProgressService from "@/services/ProgressService";

export default function ProgrammingPuzzle() {
  const router = useRouter();
  const handleNext = () => {
    ProgressService.unlock(5);
    router.push("/puzzles/recovery");
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="text-white text-center p-10">
        <h1 className="text-3xl font-bold mb-4">Programmeren</h1>
        <p className="text-gray-300 mb-6">Programmeer puzzel placeholder</p>
        <button
          className="mt-4 px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition"
          onClick={handleNext}
        >
          Volgende puzzel ➜
        </button>
      </div>
      </PuzzleLayout>
    </div>
  );
}
