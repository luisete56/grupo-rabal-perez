import { companies, type Company, type InsertCompany } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getCompanies(): Promise<Company[]>;
  createCompany(company: InsertCompany): Promise<Company>;
}

export class DatabaseStorage implements IStorage {
  async getCompanies(): Promise<Company[]> {
    // Order by ID to ensure consistent order (Palmeras, Gaviotas, etc.)
    return await db.select().from(companies).orderBy(companies.id);
  }

  async createCompany(insertCompany: InsertCompany): Promise<Company> {
    const [company] = await db
      .insert(companies)
      .values(insertCompany)
      .returning();
    return company;
  }
}

export const storage = new DatabaseStorage();
