"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

export default function LoadingUsers() {
  return (
    <div className="container mx-auto py-10 max-w-7xl px-2 animate-pulse">
      {/* Back to Dashboard */}
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>

      {/* Total count skeleton */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Users</div>
        <div className="w-10 h-5 bg-gray-200 rounded"></div>
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-semibold mb-6 text-red-800">
        Registrerade Användare
      </h2>

      {/* Skeleton Table */}
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
            {Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="h-4 w-24 bg-gray-200 rounded"></div>
                </TableCell>
                <TableCell>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </TableCell>
                <TableCell>
                  <div className="h-4 w-16 bg-gray-200 rounded"></div>
                </TableCell>
                <TableCell>
                  <div className="h-4 w-20 bg-gray-200 rounded"></div>
                </TableCell>
                <TableCell>
                  <div className="h-4 w-10 bg-gray-200 rounded"></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
