import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { yearAndSubjects } from '@/lib/global-data';
import ErrorPage from '@/components/reusable/ErrorPage';
import { LucideIcon, icons } from 'lucide-react';

interface Props {
  params: { year: string };
}

const getIcon = (iconName?: string): LucideIcon | null => {
  if (!iconName) return null;
  const IconComponent = icons[iconName as keyof typeof icons];
  return IconComponent || null;
};

export default function SubjectPage({ params }: Props) {
  const { year } = params as { year: string };

  const subjects = yearAndSubjects[parseInt(year)];

  if (!subjects) {
    return <ErrorPage error={`Year ${year} not found`} />;
  }

  return (
    <div className="flex flex-col items-center justify-center bg-[#0B1416] text-[#D7DADC] min-h-screen py-8">
      <main className="flex flex-col items-center w-full flex-1 px-4 text-center max-w-screen-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Year {year} Subjects
        </h1>
        <p className="text-[#A5A5A5] mb-8">
          Select a subject to view Viva questions.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {subjects.map((subject) => {
            const IconComponent = getIcon(subject.icon);

            return (
              <Link key={subject.name} href={`/${year}/${subject.name}`} className="m-2">
                <Card className="
                  w-60 h-28 flex flex-col items-center justify-center
                  bg-[#1A282D] text-[#D7DADC] border border-[#2A2A2A] rounded-lg
                  hover:bg-[#2A2A2A] hover:shadow-lg transition-all duration-300
                  cursor-pointer
                ">
                  <CardHeader className="flex flex-col items-center p-4 px-28 pb-2">
                    <CardTitle className="text-xl font-semibold text-white flex items-center space-x-2">
                      {IconComponent && <IconComponent className="h-6 w-6" />}
                      <span>{subject.displayName}</span>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
