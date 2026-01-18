import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// === TABLE DEFINITIONS ===
export const companies = pgTable("companies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  sector: text("sector").notNull(),
  description: text("description").notNull(),
  services: jsonb("services").$type<string[]>().notNull(),
  url: text("url").notNull(), // Placeholder URL or real URL if known
  ctaText: text("cta_text").notNull().default("Visitar"),
});

// === BASE SCHEMAS ===
export const insertCompanySchema = createInsertSchema(companies).omit({ id: true });

// === EXPLICIT API CONTRACT TYPES ===
export type Company = typeof companies.$inferSelect;
export type InsertCompany = z.infer<typeof insertCompanySchema>;

export type CompanyResponse = Company;
export type CompaniesListResponse = Company[];
