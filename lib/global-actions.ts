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
