import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          Heaven&apos;s Elixir
        </Link>
        <div className="space-x-4">
          <Link
            href="/"
            className="hover:text-blue-300 transition duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            href="/order/all"
            className="hover:text-blue-300 transition duration-200 font-medium"
          >
            My Orders
          </Link>
        </div>
      </div>
    </nav>
  );
}
