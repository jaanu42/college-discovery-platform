"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        <h1 className="text-lg sm:text-xl font-bold text-blue-600">
          CollegeFinder
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/colleges">Colleges</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/saved">Saved</Link>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-3 text-gray-700 text-sm">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/colleges" onClick={() => setOpen(false)}>Colleges</Link>
          <Link href="/compare" onClick={() => setOpen(false)}>Compare</Link>
          <Link href="/saved" onClick={() => setOpen(false)}>Saved</Link>
        </div>
      )}
    </nav>
  );
}