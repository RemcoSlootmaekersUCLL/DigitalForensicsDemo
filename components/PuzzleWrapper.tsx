"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PuzzleWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();

  useEffect(() => {
    const unlocked = document.cookie.includes("unlocked=true");
    if (!unlocked) router.push("/lock");
  }, []);

  return <>{children}</>;
}
