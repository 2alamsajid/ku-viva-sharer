import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";


const loading = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0B1416] text-[#D7DADC] px-4">
            <div className="flex flex-col items-center justify-between gap-4 py-4 mb-8 max-w-3xl mx-auto w-full">
                <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
                    <Skeleton className="h-9 w-[200px] sm:w-[300px]" />
                </h1>
                 <Skeleton className="
                    h-10 w-[100px]
                    rounded-md shadow-sm
                    bg-[#0079D3]
                 " />
            </div>

            <div className="flex-1">
                <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Card key={i} className="w-full bg-[#1A282D] text-[#D7DADC] border border-[#2A2A2A] rounded-lg shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold text-white">
                                    <Skeleton className="h-6 w-[150px]" />
                                </CardTitle>
                                <CardDescription className="text-xs text-[#A5A5A5]">
                                    <Skeleton className="h-4 w-[75px]" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm text-[#D7DADC]">
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-[80%]" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default loading;