import { pgTable, varchar, integer } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  clerkId: varchar("clerkId", { length: 255 }).primaryKey().default(""),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  credits: integer("credits").default(0),
});
