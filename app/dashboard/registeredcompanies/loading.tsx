// app/dashboard/registeredcompanies/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Link from "next/link";
import React from "react";

const SkeletonRow = () => (
  <TableRow>
    {[...Array(15)].map((_, index) => (
      <TableCell key={index}>
        <Skeleton className="h-4 w-full" />
      </TableCell>
    ))}
  </TableRow>
);

export default function Loading() {
  return (
    <div className="container mx-auto py-10 max-w-7xl px-2">
      {/* Go to Dashboard button */}
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>

      {/* Table header and skeleton count */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-500">Total Registrerade Företag</div>
        <Skeleton className="h-5 w-10 rounded" />
      </div>

      <h2 className="text-2xl font-semibold mb-6 text-red-800">Registrerade Företag</h2>

      {/* Skeleton Table */}
      <div className="overflow-auto border border-red-200 rounded-md shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-red-100 text-red-800">
              <TableHead>VAT-nummer</TableHead>
              <TableHead>Företag</TableHead>
              <TableHead>Adress</TableHead>
              <TableHead>Postnummer</TableHead>
              <TableHead>Stad</TableHead>
              <TableHead>Verksamhet</TableHead>
              <TableHead>Medarbetare</TableHead>
              <TableHead>Hemsida</TableHead>
              <TableHead>Förnamn</TableHead>
              <TableHead>Efternamn</TableHead>
              <TableHead>E-post</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Kommentarer</TableHead>
              <TableHead>Samtycke</TableHead>
              <TableHead>Åtgärder</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {[...Array(5)].map((_, i) => (
              <SkeletonRow key={i} />
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
