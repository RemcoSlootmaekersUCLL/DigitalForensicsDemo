"use client";

import HintsService from "@/services/HintsService";
import { useEffect, useState } from "react";

const HintsPage = () => {
  const [hints, setHints] = useState<String[] | null>(null);
  const [showHints, setShowHints] = useState<boolean>(false);

  useEffect(() => {
    setHints(HintsService.getHints());
  });

  return (
    <div className="m-auto w-[800px] p-2">
      <h2 className="text-2xl font-serif">Hints</h2>
      <button
        onClick={() => setShowHints(!showHints)}
        style={{ marginBottom: "1rem", padding: "0.3rem 0.5rem" }}
      >
        {showHints ? "Verberg hints" : "Bekijk hints"}
      </button>
      {showHints && (
        <ul style={{ marginTop: "1rem" }}>
          {hints &&
            hints.length > 0 &&
            hints.map((hint, i) => <li key={i}>{hint}</li>)}
        </ul>
      )}
    </div>
  );
};

export default HintsPage;
