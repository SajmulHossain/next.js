import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-3 bg-gray-600 px-4">
      <h2 className="font-semibold">
        <Link href="/">NEXT JS</Link>
      </h2>
      <div className="space-x-4">
        <Link className="font-medium text-lg" href="/">
          Home
        </Link>
        <Link href="/products">Products</Link>
        <Link href="/gallery">Gallery</Link>
        <Link className="font-medium text-lg" href="/about">
          About
        </Link>
        <Link className="font-medium text-lg" href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
