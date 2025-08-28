// app/hittabilar/loading.tsx

import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <>
      {/* Promo Image Section */}
      <div className="bg-[#f6f6f6]">
        <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col px-4 py-10 mb-2 md:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-5 w-full">
            <div className="md:col-span-2 h-[200px] md:h-[300px]">
              <div className="flex w-full h-full">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-1/3">
                    <Skeleton className="w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-3 h-[310px]">
              <div className="h-[310px] md:h-[300px] md:pl-20 pt-6 md:pt-10 pl-3 bg-gradient-to-b from-red-50 to-white">
                <Skeleton className="h-6 w-1/2 mb-4" />
                <Skeleton className="h-4 w-3/4 mb-2" />
                <Skeleton className="h-4 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-6" />
                <Skeleton className="h-10 w-64 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Controls (optional) */}
      {/* Uncomment if filters are used */}
      {/* 
      <div className="max-w-5xl xl:max-w-7xl mx-auto px-4 mb-2 md:mb-8">
        <div className="flex flex-wrap justify-center items-end gap-6 py-10 bg-gradient-to-b from-red-300 to-white rounded-xl shadow-2xl">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex flex-col space-y-2">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-10 w-[200px] rounded" />
            </div>
          ))}
          <Skeleton className="h-10 w-[180px] rounded" />
        </div>
      </div> 
      */}

      {/* Car Cards Skeletons */}
      <div className="max-w-5xl xl:max-w-7xl mx-auto flex-col px-2 py-10 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="border rounded shadow-sm bg-white p-4 space-y-3"
            >
              <Skeleton className="h-40 w-full rounded" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-2/3" />
              <Skeleton className="h-4 w-1/2" />
              <div className="flex justify-between items-center">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-4 w-1/4" />
              </div>
              <Skeleton className="h-10 w-full rounded" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
