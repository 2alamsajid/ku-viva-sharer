import AddVivaForm from '@/components/reusable/AddVivaForm'
import ErrorPage from '@/components/reusable/ErrorPage';
import { Button } from '@/components/ui/button';
import { getGeminiSummary } from '@/lib/gemini.actions';
import { getVivas } from '@/lib/global-actions';
import { ParsedElement } from '@/lib/utils';
import { Link } from 'lucide-react';
import React from 'react'

interface Props {
    params: Promise<{ year: string; subject: string }>;
    searchParams: Promise<{
        am: string
    }>
}

const page = async (props: Props) => {

    const { year, subject } = await props.params;
    const { am } = await props.searchParams
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

    const compiledVivaContent = vivaList.map(viva => {
        return `Content: ${viva.content}\n---`;
    }).join('\n\n');


    const summary = await getGeminiSummary(compiledVivaContent, am)
    if (!summary) {
        return <ErrorPage error='Unable to Summarize ' />
    }


    return (
        <div className="flex flex-col min-h-screen px-4">
            <h1 className='text-2xl font-bold pb-8'>Ai Summary of {formattedSubjectName}</h1>
            <div className='grid grid-cols-1 gap-4 max-w-3xl mx-auto'>
                {ParsedElement(summary)}
            </div>
        </div>
    )
}

export default page