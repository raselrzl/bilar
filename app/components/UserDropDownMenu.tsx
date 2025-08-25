// File: components/UserDropDownMenu.tsx
"use client";

import { useState, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

interface User {
  given_name: string;
  email: string;
}
export default function UserDropDownMenu({ user }: { user: User | null }) {
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    setUserData(user);
  }, [user]);

  if (userData) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full mr-5 bg-red-800"
          >
            <CircleUser className="w-5 h-5 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>{userData.given_name}</DropdownMenuLabel>
          <DropdownMenuLabel className="text-xs text-gray-600">
            {userData.email}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <LogoutLink>Sign out</LogoutLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full mr-5 bg-red-800"
          >
            <CircleUser className="w-5 h-5 text-white" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Button variant="ghost" asChild>
              <LoginLink>Sign in</LoginLink>
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }
}
