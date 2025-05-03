import * as z from "zod"

// Define a type for subject objects
type TSubjectData = {
    name: string; 
    displayName: string; 
    icon?: string; 
}


export type TYearAndSubjects = {
    [key: number]: TSubjectData[]
}


export const vivaSchema = z.object({
    id: z.string(),
    year: z.number({
        required_error: "Year is required",
    }),
    subject: z.string({
        required_error: "Subject is required",
    }),
    content: z.string({
        required_error: "Content is required.",
    }).min(1, {
        message: "Content is required.",
    }),
    teacherName: z.string({
        required_error: "Teacher's name is required.",
    }).min(1, {
        message: "Teacher's name is required.",
    }),
    college: z.string({
        required_error: "College is required.",
    }).min(1, {
        message: "College is required.",
    }),
    date: z.date({
        required_error: "A date is required.",
    }),
})

export const createVivaSchema = vivaSchema.omit({
    id: true
})

export type TViva = z.infer<typeof vivaSchema>
export type TCreateViva = z.infer<typeof createVivaSchema>