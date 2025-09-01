import Image from "next/image";
import Link from "next/link";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NavLink } from "./NavLink";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucide-react";

export default async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="bg-[#f6f6f6] shadow-md sticky top-0 z-50 py-1 md:py-4">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/bill.png"
                alt="Logo"
                width={180}
                height={60}
                className="w-24 h-8 sm:w-32 sm:h-12 md:w-40 md:h-14 lg:w-48 lg:h-16 cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {user ? (
              <Link
                href="/blikund"
                className="inline-block bg-green-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-green-700 transition cursor-pointer"
              >
                Bli kund
              </Link>
            ) : (
              <LoginLink
                className="inline-block bg-green-800 text-white text-lg font-medium px-6 py-2 rounded-full hover:bg-green-700 transition cursor-pointer"
                postLoginRedirectURL="/blikund"
              >
                Bli kund
              </LoginLink>
            )}

            {/* Replacing with NavLink */}
            <NavLink href="/hittabilar">Hitta bilar</NavLink>
            <NavLink href="/kopbilar">Köp bilar</NavLink>
            <NavLink href="/kontakt">Kontakt</NavLink>
            <div className="flex items-center">
              {user ? (
                <>
                  <UserDropdown
                    email={user.email as string}
                    name={user.given_name as string}
                    userImage={
                      user.picture ??
                      `https://avatar.vercel.sh/${user.given_name}`
                    }
                  />
                </>
              ) : (
                <div className="flex md:flex md:flex-1 md:items-center md:justify-end md:space-x-1 cursor-pointer">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="text-lg cursor-pointer">
                        <User className="w-6 h-6 text-gray-700 cursor-pointer" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <LoginLink>Sign in</LoginLink>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <RegisterLink>Register</RegisterLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* mobile nav Menu */}
        <div className="md:hidden flex flex-row space-x-1 items-center justify-between w-full px-2 pb-3">
          {/* Replacing with NavLink */}
          <NavLink href="/hittabilar">Hitta bilar</NavLink>
          <NavLink href="/kopbilar">Köp bilar</NavLink>
          {user ? (
            <Link
              href="/blikund"
              className="inline-block bg-green-800 text-white text-sm font-medium px-2 py-1 rounded-full hover:bg-green-700 transition"
            >
              Bli kund
            </Link>
          ) : (
            <LoginLink
              className="inline-block bg-green-800 text-white text-sm font-medium px-2 py-1 rounded-full hover:bg-green-700 transition"
              postLoginRedirectURL="/blikund"
            >
              Bli kund
            </LoginLink>
          )}
          <NavLink href="/kontakt">Kontakt</NavLink>

          <div className="flex items-center">
            {user ? (
              <>
                <UserDropdown
                  email={user.email as string}
                  name={user.given_name as string}
                  userImage={
                    user.picture ??
                    `https://avatar.vercel.sh/${user.given_name}`
                  }
                />
              </>
            ) : (
              <div className="flex md:flex md:flex-1 md:items-center md:justify-end md:space-x-1">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-lg">
                      <User className="w-6 h-6 text-gray-700" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <LoginLink>Sign in</LoginLink>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <RegisterLink>Register</RegisterLink>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
