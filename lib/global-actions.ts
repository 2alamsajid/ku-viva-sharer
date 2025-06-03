'use server'

import { eq, and, InferInsertModel } from "drizzle-orm";
import db from "./drizzle/db";
import { viva } from "./drizzle/schema";
import { TCreateViva, TViva } from "./global-types";

export async function getVivas(year: string, subject: string): Promise<{ data: TViva[] | null, message: string }> {
  try {
    const data = await db.select()
      .from(viva)
      .where(and(
        eq(viva.year, parseInt(year)),
        eq(viva.subject, subject)
      ));

    if (!data || data.length === 0) {
      return { data: null, message: 'No viva questions found' };
    }

    return { data: data, message: '' };
  } catch (error: any) {
    console.error("Error fetching vivas:", error);
    return { data: null, message: 'Failed to fetch viva questions' };
  }
}

export async function addViva(vivaData: TViva): Promise<{ data: TViva | null, message: string }> {
  try {
    console.log('sdsdsdsds', vivaData);

    // Use InferInsertModel<typeof viva> to get the correct type for insertion
    // This type will automatically exclude columns with default values like 'id'

    const currentDate = new Date()
    const randomId = crypto.randomUUID()
    const dataToInsert: InferInsertModel<typeof viva> = {
      id: randomId,
      year: vivaData.year,
      subject: vivaData.subject,
      content: vivaData.content,
      teacherName: vivaData.teacherName,
      college: vivaData.college,
      date: currentDate.toString(),
    };

    // Drizzle insert with .values() expects an object matching InferInsertModel<typeof viva>
    const insertedVivas = await db.insert(viva).values(dataToInsert).returning();

    console.log(insertedVivas);

    const newViva = insertedVivas[0] || null;

    if (!newViva) {
      return { data: null, message: 'Failed to add viva question' };
    }

    return { data: newViva as TViva, message: '' };
  } catch (error: any) {
    console.error("Error adding viva:", error);
    return { data: null, message: 'Failed to add viva question' };
  }
}

export const getViva = async (id: string): Promise<{ data: TViva | null, message: string }> => {
  try {
    const data = await db.select()
      .from(viva)
      .where(eq(viva.id, id))
      .limit(1); // Limit to 1 since we expect a single result by ID

    const vivaItem = data[0] || null;

    if (!vivaItem) {
      return { data: null, message: 'Viva question not found' };
    }

    return { data: vivaItem, message: '' };
  } catch (error: any) {
    console.error("Error fetching single viva:", error);
    return { data: null, message: 'Failed to fetch viva question' };
  }
}


// export async function updateAllVivasCollegeToMCOMS(): Promise<{ success: boolean, message: string }> {
//   try {
//     // 1. Fetch all viva entries (optional, but good for verification or if you need to process them before update)
//     // You could technically skip this select if you only need to update without prior checks.
//     const allVivasBeforeUpdate: TViva[] = await db.select().from(viva);
//     console.log(`Found ${allVivasBeforeUpdate.length} vivas before update.`);

//     // 2. Update the college name for all viva entries to 'MCOMS'
//     // In Drizzle, an update without a `where` clause updates all rows.
//     const result = await db.update(viva)
//       .set({ college: 'MCOMS' });

//     // Drizzle's `update` operation returns a result object. The structure might vary slightly
//     // based on the database driver (e.g., `rowsAffected` or similar property).
//     // For many drivers, a simple `result` indicates success if no error is thrown.
//     // Let's assume `result` is non-null/non-empty on success.
//     console.log("Update operation result:", result);

//     return { success: true, message: 'Successfully updated college name for all vivas to MCOMS.' };

//   } catch (error: any) {
//     console.error("Error updating vivas college name:", error);
//     return { success: false, message: `Failed to update college name for all vivas: ${error.message}` };
//   }
// }

