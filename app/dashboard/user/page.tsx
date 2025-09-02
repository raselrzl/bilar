import prisma from "@/app/lib/db";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";

// Define the user type
interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  profileImage: string | null;
  role: "ADMIN" | "USER";
  createdAt: Date;
}

// Fetch all users from the database
async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      profileImage: true,
      role: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return users;
}

export default async function AllUsers() {
  noStore();
  const users = await getAllUsers();

  return (
    <div className="container mx-auto py-10 max-w-7xl px-2">
      {/* Back to Dashboard */}
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>

      {/* Total count */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Users</div>
        <div className="font-semibold text-lg">{users.length}</div>
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-red-800">
        Registrerade Användare
      </h2>

      {/* If no users */}
      {users.length === 0 ? (
        <div className="text-center text-gray-500 p-6 overflow-auto border border-red-200 rounded-none shadow-sm">
          <p>Inga användare hittades.</p>
        </div>
      ) : (
        <div className="overflow-auto border border-red-200 rounded-none shadow-sm">
          <Table>
            <TableHeader>
              <TableRow className="bg-red-100 text-red-800">
                <TableHead>Namn</TableHead>
                <TableHead>E-post</TableHead>
                <TableHead>Roll</TableHead>
                <TableHead>Skapad</TableHead>
                <TableHead>Åtgärder</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    {user.firstName} {user.lastName}
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    {user.role === "ADMIN" ? "Admin" : "User"}
                  </TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString("sv-SE", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/user/${user.id}/delete`}>
                            Radera
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
