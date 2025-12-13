"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Case" },
    {
      href: "https://remcoslootmaekersucll.github.io/workshopDemoTerminal/",
      label: "Terminal",
    },
  ];

  return (
    <header className="bg-gray-900 shadow-md">
      <nav>
        <ul className="font-sans text-lg text-white flex justify-center gap-6 py-3">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="my-1">
                <Link
                  href={link.href}
                  className={`px-3 py-1 rounded-md transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
