import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, PenBoxIcon, XCircle } from "lucide-react";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/app/lib/db";

// Fetch all users
async function getAllUsers() {
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

const AllUsers = async () => {
  const users = await getAllUsers();

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
      {users.length === 0 ? (
        <>No users found</> // Display a message when there are no users
      ) : (
        <div className="p-4 lg:px-30 mt-14">
          <Card className="px-0 pt-0 rounded-none">
            <Tabs defaultValue="All Users" className="rounded-none">
              <TabsList className="grid w-full grid-cols-1 rounded-none mb-6">
                <TabsTrigger value="All Users" className="rounded-none">
                  All Users
                </TabsTrigger>
              </TabsList>
              <TabsContent value="All Users">
                <CardHeader>
                  <CardTitle>All Registered Users</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* User count in top right corner */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-gray-500">Total Users</div>
                    <div className="font-semibold text-lg">{users.length}</div>
                  </div>
                  
                  <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-red-100 text-red-800">
                          <TableHead className="border border-gray-300 p-4">Name</TableHead>
                          <TableHead className="border border-gray-300 p-4">Email</TableHead>
                          <TableHead className="border border-gray-300 p-4">Role</TableHead>
                          <TableHead className="border border-gray-300 p-4">Status</TableHead>
                          <TableHead className="border border-gray-300 p-4">Created On</TableHead>
                          <TableHead className="border border-gray-300 p-4 text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {users.map((user) => (
                          <TableRow key={user.id}>
                            <TableCell className="border border-gray-300 p-4">
                              {user.firstName} {user.lastName}
                            </TableCell>
                            <TableCell className="border border-gray-300 p-4">{user.email}</TableCell>
                            <TableCell className="border border-gray-300 p-4">{user.role}</TableCell>
                            <TableCell className="border border-gray-300 p-4">
                              {user.role === "ADMIN" ? "Admin" : "User"}
                            </TableCell>
                            <TableCell className="border border-gray-300 p-4">
                              {new Date(user.createdAt).toLocaleDateString("en-US", {
                                month: "long",
                                day: "numeric",
                                year: "numeric",
                              })}
                            </TableCell>
                            <TableCell className="border border-gray-300 p-4 text-right">
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="w-5 h-5" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                  <DropdownMenuItem asChild>
                                    <Link href={`/users/${user.id}/edit`}>
                                      <PenBoxIcon className="w-5 h-5 mr-2" />
                                      Edit
                                    </Link>
                                  </DropdownMenuItem>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem asChild>
                                    <Link href={`/users/${user.id}/delete`}>
                                      <XCircle className="w-5 h-5 mr-2" />
                                      Delete
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
                </CardContent>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AllUsers;
