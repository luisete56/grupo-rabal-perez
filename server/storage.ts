import { type Company, type InsertCompany } from "@shared/schema";

export interface IStorage {
  getCompanies(): Promise<Company[]>;
  createCompany(company: InsertCompany): Promise<Company>;
}

// Almacenamiento en memoria - no requiere base de datos
export class MemoryStorage implements IStorage {
  private companies: Company[] = [];
  private nextId = 1;

  async getCompanies(): Promise<Company[]> {
    return this.companies;
  }

  async createCompany(insertCompany: InsertCompany): Promise<Company> {
    const company: Company = {
      id: this.nextId++,
      name: insertCompany.name,
      sector: insertCompany.sector,
      description: insertCompany.description,
      services: insertCompany.services,
      url: insertCompany.url,
      ctaText: insertCompany.ctaText || "Visitar",
    };
    this.companies.push(company);
    return company;
  }
}

export const storage = new MemoryStorage();
