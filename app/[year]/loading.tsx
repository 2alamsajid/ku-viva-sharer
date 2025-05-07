import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";


type Props = {}


const loading = (props: Props) => {
    return (
        <div className="flex flex-col items-center justify-center bg-[#0B1416] text-[#D7DADC] min-h-screen py-8">
            <main className="flex flex-col items-center w-full flex-1 px-4 text-center max-w-screen-lg">
                <h1 className="text-4xl font-bold mb-4 text-white">
                    <Skeleton className="h-10 w-[200px]" />
                </h1>
                <p className="text-[#A5A5A5] mb-8">
                    <Skeleton className="h-4 w-[300px]" />
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <Card key={i} className="
                w-60 h-28 flex flex-col items-center justify-center
                bg-[#1A282D] text-[#D7DADC] border border-[#2A2A2A] rounded-lg
              ">
                            <CardHeader className="flex flex-col items-center p-4 px-28 pb-2">
                                <CardTitle className="text-xl font-semibold text-white flex items-center space-x-2">
                                    <Skeleton className="h-6 w-6 mr-2" />
                                    <Skeleton className="h-6 w-24" />
                                </CardTitle>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default loading