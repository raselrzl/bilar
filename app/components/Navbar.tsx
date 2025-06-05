"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when path changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Helper to style active link
  const linkClass = (path: string) =>
    `text-gray-700 hover:text-black font-medium py-1 text-lg ${
      pathname === path ? "border-b-4 border-red-800" : ""
    }`;

  return (
    <nav className="bg-[#f6f6f6] shadow-md sticky top-0 z-50 py-1 md:py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/logocar1111.png"
                alt="Logo"
                width={140}
                height={40}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
             <Link
              href="/blikund"
              className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
            >
              Bli kund
            </Link>
            <Link href="/hittabilar" className={linkClass("/hittabilar")}>
              Hitta bilar
            </Link>
            <Link href="/kopbilar" className={linkClass("/kopbilar")}>
              Köp bilar
            </Link>
                  <Link href="/kontakt" className={linkClass("/kontakt")}>
              Kontakt
            </Link>
           
            <SignedIn>
              <Link href="/admin" className={linkClass("/admin")}>
                Admin
              </Link>
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="px-4 py-2 bg-red-800 text-white rounded">
                  Login
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-red-800 focus:outline-none"
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
          <div>
            <SignedIn>
              <Link
                href="/blikund"
                className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition"
              >
                Bli kund
              </Link>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <button className="inline-block bg-red-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-red-700 transition">
                  Bli kund
                </button>
              </SignInButton>
            </SignedOut>
          </div>
          <Link href="/hittabilar" className={linkClass("/hittabilar")}>
            Hitta bilar
          </Link>
          <Link href="/kopbilar" className={linkClass("/kopbilar")}>
            Köp bilar
          </Link>
             <Link href="/kontakt" className={linkClass("/kontakt")}>
            Kontakt
          </Link>
         
          <SignedIn>
            <Link href="/admin" className={linkClass("/admin")}>
              Admin
            </Link>
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 bg-red-800 text-white rounded">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      )}
    </nav>
  );
}
