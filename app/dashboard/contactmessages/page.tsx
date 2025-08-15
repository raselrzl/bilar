import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { format } from "date-fns"; // Import date-fns for date formatting
import prisma from "@/app/lib/db";
import Link from "next/link";

// Fetch contact message data from the database
export async function getData() {
  const data = await prisma.contactMessage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

export default async function ContactMessagesTable() {
  const data = await getData();

  return (
    <div className="container max-w-7xl mx-auto py-10 px-2">
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>
      <h2 className="text-2xl font-semibold text-red-800 mb-6">
        All Contact Messages
      </h2>
       <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Messages</div>
        <div className="font-semibold text-lg">{data.length}</div> {/* Display count */}
      </div>
      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead className="border border-gray-300 p-4">Name</TableHead>
              <TableHead className="border border-gray-300 p-4">Email</TableHead>
              <TableHead className="border border-gray-300 p-4">Phone</TableHead>
              <TableHead className="border border-gray-300 p-4">Message</TableHead>
              <TableHead className="border border-gray-300 p-4">Received At</TableHead>
              <TableHead className="border border-gray-300 p-4">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="border border-gray-300 p-4">{message.name}</TableCell>
                <TableCell className="border border-gray-300 p-4">{message.email}</TableCell>
                <TableCell className="border border-gray-300 p-4">{message.phone ?? "N/A"}</TableCell>
                <TableCell className="border border-gray-300 p-4">{message.message}</TableCell>
                <TableCell className="border border-gray-300 p-4">
                  {format(new Date(message.createdAt), "dd/MM/yyyy HH:mm:ss")}
                </TableCell>
                <TableCell className="border border-gray-300 p-4">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreVertical className="w-5 h-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
