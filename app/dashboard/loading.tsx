// app/dashboard/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
      <div className="flex w-full flex-col gap-6">
        <div className="flex justify-left space-x-4 mb-6 overflow-x-auto">
          {[...Array(5)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-48 rounded-md" />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-md flex items-center space-x-4"
            >
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-7 w-16" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
