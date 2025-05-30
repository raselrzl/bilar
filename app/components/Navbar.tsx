"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#f6f6f6] shadow-md sticky top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src="/logo.png" alt="Logo" width={120} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-2 items-center">
            <Link href="/hittabilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
              Hitta bilar
            </Link>
            <Link href="/kopbilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
              Köp bilar
            </Link>
            <Link href="/saljbilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
              Sälj bilar
            </Link>
            <Link href="/priser" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
              Priser
            </Link>
            <Link href="/login" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
              Logga in
            </Link>
            <Link
              href="/blikund"
              className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Bli kund
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#f6f6f6] shadow-md z-40 flex flex-col items-center text-center space-y-2 py-6">
          <Link href="/hittabilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
            Hitta bilar
          </Link>
          <Link href="/kopbilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
            Köp bilar
          </Link>
          <Link href="/saljbilar" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
            Sälj bilar
          </Link>
          <Link href="/priser" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
            Priser
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-black font-medium w-24 px-2 py-1">
            Logga in
          </Link>
          <Link
            href="/blikund"
            className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Bli kund
          </Link>
        </div>
      )}
    </nav>
  );
}
