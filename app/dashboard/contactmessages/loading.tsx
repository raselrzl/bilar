// app/contact-messages/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container max-w-7xl mx-auto py-10 px-2">
      {/* Back to dashboard */}
      <div className="mb-4">
        <Skeleton className="h-10 w-48 rounded" />
      </div>

      {/* Heading */}
      <Skeleton className="h-8 w-72 mb-6" />

      {/* Total messages info */}
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-6 w-10" />
      </div>

      {/* Table Skeleton */}
      <div className="overflow-auto border border-red-200 rounded-none shadow-sm">
        <div className="min-w-full divide-y divide-gray-200">
          {/* Table Header Skeleton */}
          <div className="bg-red-100 text-red-800 grid grid-cols-6 gap-4 p-4 font-semibold">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-full" />
          </div>

          {/* Table Rows */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-4 p-4 border-t border-gray-200"
            >
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-8 w-10 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
