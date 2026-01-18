import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.companies.list.path, async (_req, res) => {
    const companies = await storage.getCompanies();
    res.json(companies);
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existing = await storage.getCompanies();
  if (existing.length > 0) return;

  const companiesData = [
    {
      name: "PALMERAS",
      sector: "Comercio / Marketplaces",
      description: "Palmeras es una empresa centrada en la creación de marketplaces digitales para tiendas de muebles. Su objetivo es ayudar a las tiendas físicas a vender online de forma moderna, estructurada y escalable.",
      services: [
        "Creación de marketplaces propios para tiendas de muebles",
        "Digitalización de catálogos y stock",
        "Integraciones tecnológicas avanzadas"
      ],
      url: "https://palmeras-tienda-online--luigirabal.replit.app/",
      ctaText: "Visitar Palmeras"
    },
    {
      name: "GAVIOTAS",
      sector: "Restauración / Digitalización",
      description: "Gaviotas es una empresa especializada en la digitalización de restaurantes. Se centra en sistemas de pedidos sin camarero y optimización operativa.",
      services: [
        "Sistemas de pedidos digitales (pantallas, móvil, QR)",
        "Automatización de procesos",
        "Integraciones tecnológicas avanzadas"
      ],
      url: "https://firebrick-seahorse-545517.hostingersite.com/",
      ctaText: "Visitar Gaviotas"
    },
    {
      name: "LMS AUTOMÁTICO",
      sector: "Formación empresarial",
      description: "LMS Automático es una plataforma de formación para empresas que combina vídeos formativos, inteligencia artificial y evaluaciones. Está pensada para formar trabajadores de manera continua, medible y automatizada.",
      services: [
        "Vídeos formativos",
        "Evaluaciones con IA",
        "Seguimiento del rendimiento"
      ],
      url: "https://elegant-web-app--luigirabal.replit.app/",
      ctaText: "Visitar LMS Automático"
    },
    {
      name: "CALMA",
      sector: "Creatividad / Audiovisual / Videojuegos",
      description: "Calma es una productora creativa dedicada a la creación de contenido audiovisual y experiencias interactivas.",
      services: [
        "Cortometrajes",
        "Proyectos audiovisuales",
        "Videojuegos",
        "Encargos personalizados y proyectos culturales"
      ],
      url: "https://calmaproducciones.eu/",
      ctaText: "Visitar Calma"
    },
    {
      name: "ULTIMATE HORROR SURVIVAL",
      sector: "Plataforma social / experimental",
      description: "Ultimate Horror Survival es una plataforma experimental que explora el impacto de la IA en la sociedad, el futuro del trabajo y nuevos sistemas sociales.",
      services: [
        "Espacio de ideas",
        "Problemas y soluciones en evolución constante"
      ],
      url: "https://web-studio--luigirabal.replit.app/",
      ctaText: "Visitar Ultimate Horror Survival"
    }
  ];

  console.log("Seeding companies...");
  for (const company of companiesData) {
    await storage.createCompany(company);
  }
  console.log("Seeding complete.");
}
