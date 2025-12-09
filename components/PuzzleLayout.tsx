"use client";

import Link from "next/link";
import ProgressService from "@/services/ProgressService";

export default function PuzzleLayout({
  children,
  id,
}: {
  children: React.ReactNode;
  id: number;
}) {
  const next = id + 1;

  const goNext = () => {
    ProgressService.unlock(id);
  };

  return (
    <div className="w-[800px] mx-auto mt-10 text-white">
      <h1 className="text-3xl font-bold mb-4">Puzzel {id}</h1>

      <div className="bg-gray-800 p-6 rounded-xl shadow-lg">{children}</div>

      <div className="mt-6 flex justify-end">
        <Link
          href={`/puzzle/${next}`}
          onClick={goNext}
          className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg text-lg font-semibold transition"
        >
          ➜ Volgende puzzel
        </Link>
      </div>
    </div>
  );
}