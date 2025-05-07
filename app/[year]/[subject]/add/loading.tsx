import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
    return (
        <div className="flex flex-col items-center bg-[#0B1416] text-[#D7DADC] min-h-screen py-8 px-4">

            <div className="w-full max-w-3xl mb-8 text-center">
                <Skeleton className="h-8 w-[300px] mx-auto" />
            </div>

            <div className="w-full max-w-3xl bg-[#1A282D] p-6 rounded-lg shadow-lg border border-[#2A2A2A] space-y-6">
                <div className="space-y-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-32 w-full" />
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full" />
                </div>

                <div className="space-y-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-10 w-full" />
                </div>

                 <Skeleton className="
                    h-10 w-full
                    rounded-md shadow-sm
                    bg-[#0079D3]
                 " />
            </div>
        </div>
    );
}

export default loading;