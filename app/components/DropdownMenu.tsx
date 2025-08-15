// components/DropdownMenu.tsx
"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CircleUser } from "lucide-react";
import Link from "next/link";

// Define the props for the DropdownMenu
interface DropdownMenuProps {
  user: {
    given_name: string;
    email: string;
  } | null;
}

export default function Dropdown({ user }: DropdownMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full mr-5 bg-red-800">
          <CircleUser className="w-5 h-5 text-white" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {/* Check if the user is logged in */}
        {user ? (
          <>
            <DropdownMenuLabel>{user.given_name}</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs text-gray-600">{user.email}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/logout">Logout</Link>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem asChild>
              <Link href="/login">Login</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/register">Register</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
