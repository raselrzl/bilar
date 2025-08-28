// app/dashboard/allvehicles/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const SkeletonRow = () => (
  <TableRow>
    <TableCell className="border border-gray-300 p-4">
      <Skeleton className="w-[80px] h-[50px] rounded-sm" />
    </TableCell>
    {[...Array(9)].map((_, i) => (
      <TableCell className="border border-gray-300 p-4" key={i}>
        <Skeleton className="h-4 w-full" />
      </TableCell>
    ))}
    <TableCell className="border border-gray-300 p-4">
      <Skeleton className="w-8 h-4 ml-auto" />
    </TableCell>
  </TableRow>
);

export default function Loading() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-2">
      {/* Back to dashboard button */}
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>

      {/* Page Title */}
      <h2 className="text-2xl font-semibold mb-6 text-red-800">Fordon i systemet</h2>

      {/* Total vehicles info */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Vehicles</div>
        <Skeleton className="h-5 w-10 rounded" />
      </div>

      {/* Skeleton Table */}
      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table className="border-collapse">
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead className="border border-gray-300 p-4">Bild</TableHead>
              <TableHead className="border border-gray-300 p-4">Märke</TableHead>
              <TableHead className="border border-gray-300 p-4">Modell</TableHead>
              <TableHead className="border border-gray-300 p-4">Motor</TableHead>
              <TableHead className="border border-gray-300 p-4">Miltal</TableHead>
              <TableHead className="border border-gray-300 p-4">Bränsle</TableHead>
              <TableHead className="border border-gray-300 p-4">Växellåda</TableHead>
              <TableHead className="border border-gray-300 p-4">Fordonstyp</TableHead>
              <TableHead className="border border-gray-300 p-4">Registreringsdatum</TableHead>
              <TableHead className="border border-gray-300 p-4">Skapad</TableHead>
              <TableHead className="border border-gray-300 p-4">Åtgärder</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(5)].map((_, index) => (
              <SkeletonRow key={index} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
