import Link from "next/link";

const Header = () => {
  const links = [
    { href: "/", label: "Case" },
    { href: "/evidence", label: "Bewijs" },
    { href: "/hints", label: "Hints" },
  ];

  return (
    <header>
      <nav>
        <ul>
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
