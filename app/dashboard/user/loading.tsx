// app/dashboard/user/loading.tsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SkeletonRow = () => (
  <TableRow>
    {[...Array(6)].map((_, idx) => (
      <TableCell className="border border-gray-300 p-4" key={idx}>
        <Skeleton className="h-4 w-full" />
      </TableCell>
    ))}
  </TableRow>
);

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-8">
      {/* Dashboard button */}
      <div className="mb-4">
        <Link href="/dashboard" passHref>
          <Button className="bg-red-800 hover:bg-red-700 text-white cursor-pointer">
            Gå till Dashboard
          </Button>
        </Link>
      </div>

      {/* Card and Tabs */}
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
                {/* User count */}
                <div className="flex justify-between items-center mb-4">
                  <div className="text-gray-500">Total Users</div>
                  <Skeleton className="h-5 w-8 rounded" />
                </div>

                {/* Skeleton Table */}
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
                      {[...Array(5)].map((_, index) => (
                        <SkeletonRow key={index} />
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
}
