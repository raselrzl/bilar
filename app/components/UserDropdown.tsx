import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface iAppProps {
  email: string;
  name: string;
  userImage: string;
}

export function UserDropdown({ email, name, userImage }: iAppProps) {
  const isAdmin = email === "rasel6041@gmail.com" || "jonas.wieselgren@gmail.com";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-7 w-7 md:h-10 md:w-10">
            <AvatarImage src={userImage} alt="User Image" />
            <AvatarFallback className="font-bold bg-primary text-white">
              {name.slice(0, 1).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-64 bg-background text-foreground shadow-lg border border-muted"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="flex flex-col space-y-0.5">
          <p className="text-sm font-medium truncate">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{email}</p>
        </DropdownMenuLabel>

        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            <DropdownMenuLabel className="text-xs text-muted-foreground">
              Admin Panel
            </DropdownMenuLabel>
            <div className="px-2 space-y-1">
              <DropdownMenuItem asChild>
                <Link href="/dashboard" className="flex items-center justify-between w-full">
                  Dashboard <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/registeredcompanies" className="flex items-center justify-between w-full">
                  Registered Companies <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/allvehicles" className="flex items-center justify-between w-full">
                  All Vehicles <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/contactmessages" className="flex items-center justify-between w-full">
                  Contact Messages <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/user" className="flex items-center justify-between w-full">
                  All Users <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/addcar" className="flex items-center justify-between w-full">
                  Add a New Car <ArrowRight size={16} />
                </Link>
              </DropdownMenuItem>
            </div>
          </>
        )}

        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <LogoutLink className="w-full">Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
