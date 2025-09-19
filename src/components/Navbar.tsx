"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  path: string;
  label: string;
};

export const navItems: NavItem[] = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/gallery", label: "Gallery" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-3 bg-gray-600 px-4">
      <h2 className="font-semibold">
        <Link href="/">NEXT JS</Link>
      </h2>
      <div className="space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            className={`font-medium text-lg ${
              pathname === item.path ? "text-green-300" : ""
            }`}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
