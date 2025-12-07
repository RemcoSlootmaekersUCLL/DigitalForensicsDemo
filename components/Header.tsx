import Link from "next/link";

const Header = () => {
  const links = [
    { href: "/", label: "Case" },
    { href: "/evidence", label: "Bewijs" },
    { href: "/hints", label: "Hints" },
    { href: "/terminal", label: "Terminal" },
  ];

  return (
    <header>
      <nav>
        <ul
          className="font-sans text-2xl text-white flex justify-center gap-2"
          style={{ backgroundColor: "var(--ucll-red)" }}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
