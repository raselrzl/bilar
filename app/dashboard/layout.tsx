// app/layouts/DashboardLayout.tsx
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { CircleUser, MenuIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { unstable_noStore as noStore } from "next/cache";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  noStore();
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || user.email !== "rasel6041@gmail.com") {
    return redirect("/");
  }
  return (
    <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-white rounded-lg">
        <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6 ml-6"></nav>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="rounded-full mr-5"
            >
              <CircleUser className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{user.given_name}</DropdownMenuLabel>
            <DropdownMenuLabel className="text-xs text-gray-600">
              {user.email}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="my-5">{children}</main>
    </div>
  );
}
