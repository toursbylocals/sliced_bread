import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg font-medium">
          © {new Date().getFullYear()} Heaven&apos;s Elixir. All rights
          reserved.
        </p>
        <p className="text-sm mt-2">
          Crafted with care and passion. The pinnacle of refreshment.
        </p>
      </div>
    </footer>
  );
}
