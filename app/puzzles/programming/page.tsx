"use client";

import PuzzleLayout from "../layout";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressService from "@/services/ProgressService";

const INITIAL_CODE = `function average(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  
  let avg = total / numbers.length;
  return avg;
}`;
const SOLUTION_CODE = `function average(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let avg = total / numbers.length;
  return avg;
}`;

export default function ProgrammingPuzzle() {
  const [code, setCode] = useState(INITIAL_CODE);
  const [output, setOutput] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleRun = () => {
    const codeLines = code
      .trim()
      .split(/\r?\n/)
      .map((line) => line.trim());
    const expectedLines = [
      "function average(numbers) {",
      "let total = 0;",
      "for (let i = 0; i < numbers.length; i++) {",
      "total += numbers[i];",
      "}",
      "let avg = total / numbers.length;",
      "return avg;",
      "}",
    ];
    let match = true;
    for (let i = 0; i < expectedLines.length - 1; i++) {
      if (codeLines[i] !== expectedLines[i]) {
        match = false;
        break;
      }
    }
    const hasClosingBracket = codeLines
      .slice(expectedLines.length - 1)
      .some((line) => line === "}");
    if (match && hasClosingBracket) {
      setOutput("Goed gedaan! De functie is nu correct afgesloten!");
      setSuccess(true);
    } else {
      setOutput("Could not compile. '}' missing on line 9");
      setSuccess(false);
    }
  };

  const handleNext = () => {
    ProgressService.unlock(5);
    router.push("/puzzles/recovery");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <PuzzleLayout>
        <div className="text-white max-w-xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4">Programmeren</h1>
          <p className="text-gray-300 mb-6">
            Hieronder zie je een functie die het gemiddelde van een lijst
            getallen berekent. Klik op "Uitvoeren" om te zien wat er mis is. Los
            het probleem op zodat de code correct kan compileren. Tip: er is
            geen fout in de logica van de code. Zoek naar problemen in de
            syntax.
          </p>
          <textarea
            className="w-full h-80 bg-gray-900 text-green-200 font-mono rounded p-3 mb-2 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck={false}
            disabled={success}
          />

          {success && (
            <div className="mb-5">
              <code>Output: 432378</code>
              <br />
              <br />
              <code className="mb-4">
                G-Rout heeft in de laatste 3 maanden gemiddeld €432.378 winst
                gemaakt.
              </code>
            </div>
          )}

          <div className="flex gap-4 mb-4">
            <button
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold"
              onClick={handleRun}
              disabled={success}
            >
              Uitvoeren
            </button>
            <button
              className="px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition font-semibold disabled:opacity-50"
              onClick={handleNext}
              disabled={!success}
            >
              Volgende puzzel ➜
            </button>
          </div>
          {output && success && (
            <>
              <div className="mt-6 bg-green-700 px-6 py-3 rounded shadow text-lg text-center">
                Goed gedaan! De functie is nu correct afgesloten!
              </div>
            </>
          )}
          {output && !success && (
            <div
              className="mt-2 p-3 rounded bg-red-900 text-red-200"
              dangerouslySetInnerHTML={{ __html: output }}
            />
          )}
        </div>
      </PuzzleLayout>
    </div>
  );
}
