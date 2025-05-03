'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { addViva } from '@/lib/global-actions';
import { createVivaSchema } from '@/lib/global-types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { useState } from 'react';

interface Props {
    year: number;
    subject: string;
}


export default function AddVivaForm({ year, subject }: Props) {
    const [isAdding, setIsAdding] = useState(false);
    const router = useRouter()

    const form = useForm<z.infer<typeof createVivaSchema>>({
        resolver: zodResolver(createVivaSchema),
        defaultValues: {
            content: "",
            teacherName: "",
            college: "",
            date: new Date(),
            year: year,
            subject: subject
        },
    })

    async function onSubmit(values: z.infer<typeof createVivaSchema>) {
        try {
            setIsAdding(true);
            const { data, message } = await addViva({
                content: values.content,
                teacherName: values.teacherName,
                college: values.college,
                date: values.date,
                year: year,
                subject: subject
            })

            if (!data) {
                setIsAdding(false);
                return toast.error('Something went wrong.', {
                    description: message,
                    className: 'bg-red text-white'
                })
            }

            setIsAdding(false);
            router.push(`/${year}/${subject}`);
            return toast.success('Viva added successfully!', {
                className: 'bg-green text-white'
            });


        } catch (error) {
            setIsAdding(false); // Ensure loading state is reset on error
            return toast.warning('Something went wrong.');
        }
    }

    // Format the subject name for display
    const formattedSubjectName = subject.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());


    return (
        // Apply dark theme background and text colors, add padding
        <div className="flex flex-col items-center bg-[#0B1416] text-[#D7DADC] min-h-screen py-8 px-4">
            {/* Title section */}
            <div className="w-full max-w-3xl mb-8">
                <h1 className="text-3xl font-bold text-white text-center">
                    Add Viva Question for Year {year} {formattedSubjectName}
                </h1>
            </div>

            {/* Form container */}
            <div className="w-full max-w-3xl bg-[#1A282D] p-6 rounded-lg shadow-lg border border-[#2A2A2A]">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6"> {/* Adjusted spacing */}
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#D7DADC]">Content</FormLabel> {/* Styled Label */}
                                    <FormControl>
                                        <Textarea
                                            placeholder="Enter viva question content"
                                            {...field}
                                            className="bg-[#0B1416] text-[#D7DADC] border border-[#2A2A2A] placeholder:text-[#A5A5A5] focus-visible:ring-[#0079D3]" // Styled Textarea
                                        />
                                    </FormControl>

                                    <FormMessage /> {/* FormMessage usually has default styling */}
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="teacherName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#D7DADC]">Teacher Name</FormLabel> {/* Styled Label */}
                                    <FormControl>
                                        <Input
                                            placeholder="Enter teacher's name"
                                            {...field}
                                            className="bg-[#0B1416] text-[#D7DADC] border border-[#2A2A2A] placeholder:text-[#A5A5A5] focus-visible:ring-[#0079D3]" // Styled Input
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="college"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-[#D7DADC]">College</FormLabel> {/* Styled Label */}
                                    <FormControl>
                                        <Input
                                            placeholder="Enter college name"
                                            {...field}
                                            className="bg-[#0B1416] text-[#D7DADC] border border-[#2A2A2A] placeholder:text-[#A5A5A5] focus-visible:ring-[#0079D3]" // Styled Input
                                        />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Submit Button styled for dark theme */}
                        <Button
                            type="submit"
                            disabled={isAdding}
                            className="
                                w-full
                                bg-[#0079D3] text-white font-semibold
                                cursor-pointer
                                px-4 py-2 rounded-md shadow-sm
                                hover:bg-[#0063B0] transition duration-200
                                focus:outline-none focus:ring-2 focus:ring-[#0079D3] focus:ring-opacity-50
                                disabled:opacity-50 disabled:cursor-not-allowed
                            "
                        >
                            {isAdding ? 'Adding...' : 'Add Viva'}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}
