"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import PuzzleLayout from "@/components/PuzzleLayout";
import ProgressService from "@/services/ProgressService";

export default function PuzzlePage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const router = useRouter();

  useEffect(() => {
    if (!ProgressService.isUnlocked(id)) {
      router.push(`/puzzle/${ProgressService.getProgress() + 1}`);
    }
  }, [id, router]);

  return (
    <PuzzleLayout id={id}>
      <p className="text-gray-300">
        Dit is placeholder content voor puzzel {id}
        Hier komen de echte puzzels later te staan
      </p>
    </PuzzleLayout>
  );
}