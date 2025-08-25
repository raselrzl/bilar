// components/NavLink.tsx
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();

  const linkClass = pathname === href
    ? "text-gray-700 hover:text-black font-medium py-1 text-lg border-b-4 border-red-800"
    : "text-gray-700 hover:text-black font-medium py-1 text-lg";

  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}
