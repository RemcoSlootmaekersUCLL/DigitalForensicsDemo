"use client";


import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import ProgressService from "@/services/ProgressService";

export default function PuzzleWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Only enforce for puzzle pages
    const puzzleMatch = pathname.match(/\/puzzles\/(\w+)/);
    if (puzzleMatch) {
      const puzzleOrder = [
        "lock",
        "terminal",
        "firewall",
        "network",
        "programming",
        "recovery",
      ];
      let idx = puzzleOrder.indexOf(puzzleMatch[1]);
      // If on /lock, allow always
      if (puzzleMatch[1] === "lock") return;
      if (idx > 0 && !ProgressService.isUnlocked(idx)) {
        // Not unlocked yet, redirect to previous unlocked puzzle
        const prev = puzzleOrder[Math.max(0, ProgressService.getProgress())];
        if (prev === "lock") {
          router.replace(`/lock`);
        } else {
          router.replace(`/puzzles/${prev}`);
        }
      }
    }
  }, [pathname]);

  return <>{children}</>;
}
