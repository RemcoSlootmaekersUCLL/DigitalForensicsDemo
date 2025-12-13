"use client";


import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ProgressService from "@/services/ProgressService";


const PUZZLES = [
  { href: "/lock", label: "Login" },
  { href: "/puzzles/terminal", label: "Terminal" },
  { href: "/puzzles/firewall", label: "Firewall" },
  { href: "/puzzles/network", label: "Netwerk tracing" },
  { href: "/puzzles/programming", label: "Programmeren" },
  { href: "/puzzles/recovery", label: "Recovery" },
];

const Header = () => {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(ProgressService.getProgress());
    // Listen for cookie changes to update progress reactively
    const interval = setInterval(() => {
      const newProgress = ProgressService.getProgress();
      setProgress((prev) => (prev !== newProgress ? newProgress : prev));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-900 shadow-md">
      <nav>
        <ul className="font-sans text-lg text-white flex justify-center gap-6 py-3 items-center">
          {[{ href: "/", label: "Case" }, ...PUZZLES].map((item, idx) => {
            const isActive = pathname === item.href;
            // Case button always enabled
            if (item.href === "/") {
              return (
                <li key={item.href} className="my-1">
                  <Link
                    href={item.href}
                    className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            // Puzzle buttons
            const unlocked = progress >= (idx - 1);
            return (
              <li key={item.href} className="my-1">
                {unlocked ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-700 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="px-3 py-1 rounded-md bg-gray-700 text-gray-400 cursor-not-allowed opacity-60">
                    {item.label}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
