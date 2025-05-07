import { pgTable, text, integer, date } from "drizzle-orm/pg-core";

export const viva = pgTable("viva", {
  id: text("id").primaryKey(),
  year: integer("year").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  teacherName: text("teacher_name").notNull(),
  college: text("college").notNull(),
  date: text('date').notNull(),
});
