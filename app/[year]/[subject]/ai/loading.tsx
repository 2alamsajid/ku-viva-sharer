import React from 'react';
import { Skeleton } from '@/components/ui/skeleton'; // Assuming this path for Shadcn UI Skeleton

const page = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#0B1416] text-[#D7DADC] px-4 py-8">
      {/* Page Title Skeleton */}
      <div className="mb-8">
        <Skeleton className="h-9 w-3/4 bg-[#1A282D]" /> {/* Mimics h1 size */}
      </div>

      {/* Summary Section Skeletons */}
      <div className="max-w-3xl mx-auto w-full space-y-4">
        {/* Skeleton for "Viva Summary" heading */}
        <Skeleton className="h-6 w-48 bg-[#1A282D] mb-4" /> {/* Mimics <b>Viva Summary</b> */}

        {/* Skeletons for ordered list items */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={`summary-item-${i}`} className="h-5 w-full bg-[#1A282D]" />
        ))}

        {/* Space between sections */}
        <div className="h-8"></div> {/* Mimics <br><br> */}

        {/* Skeleton for "Comprehensive List of Topics" heading */}
        <Skeleton className="h-6 w-64 bg-[#1A282D] mb-4" /> {/* Mimics <b>Comprehensive List of Topics</b> */}

        {/* Skeletons for unordered list items */}
        {Array.from({ length: 15 }).map((_, i) => ( // Show more items for the comprehensive list
          <Skeleton key={`list-item-${i}`} className="h-5 w-full bg-[#1A282D]" />
        ))}
      </div>
    </div>
  );
};

export default page;