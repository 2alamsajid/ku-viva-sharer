import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getVivas } from '@/lib/global-actions';
import Link from 'next/link';

import ErrorPage from '@/components/reusable/ErrorPage';
import { TViva } from '@/lib/global-types';


interface Props {
    params: Promise<{ year: string; subject: string }>;
}


export default async function VivaListPage({ params }: Props) {
    const { year, subject } = await params;
    const { data: vivaList, message } = await getVivas(year, subject);

    if (!vivaList || vivaList.length === 0) {
        const errorMessage = message || `No viva questions found for Year ${year} ${subject}.`;
        return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-[#0B1416] text-[#D7DADC] px-4">
              <ErrorPage error={errorMessage}>
                  <Link href={`/${year}/${subject}/add`}>
                      <Button className="
                          mt-4
                          bg-[#0079D3] text-white font-semibold
                          px-4 py-2 rounded-md shadow-sm
                          hover:bg-[#0063B0] transition duration-200
                          focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                          ">Add Viva</Button>
                  </Link>
              </ErrorPage>
          </div>
        );
    }

    const formattedSubjectName = subject.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return (
        <div className="flex flex-col min-h-screen bg-[#0B1416] text-[#D7DADC] px-4">
            <div className="flex flex-col items-center justify-between gap-4 py-4  mb-8 max-w-3xl mx-auto w-full">
                <h1 className="text-3xl font-bold text-white mb-4 sm:mb-0">
                    {formattedSubjectName}
                </h1>
                <Link href={`/${year}/${subject}/add`}>
                    <Button className="
                        bg-[#0079D3] text-white font-semibold cursor-pointer
                        px-4 py-2 rounded-md shadow-sm
                        hover:bg-[#0063B0] transition duration-200
                        focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                    ">Add Viva</Button>
                </Link>
            </div>
            <div className="flex-1">
                <div className="grid grid-cols-1 gap-4 max-w-3xl mx-auto">
                    {vivaList.map((viva: TViva) => (
                        <Card key={viva.id} className="bg-[#1A282D] text-[#D7DADC] border border-[#2A2A2A] rounded-lg shadow-md">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-base font-semibold text-white">
                                    {viva.college} | {viva.teacherName}
                                </CardTitle>
                                <CardDescription className="text-xs text-[#A5A5A5]">
                                    {new Date(viva.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="pt-0 text-sm text-[#D7DADC]">
                                {viva.content}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
