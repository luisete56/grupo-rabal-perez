import { z } from 'zod';
import { companies, insertCompanySchema } from './schema';

export const errorSchemas = {
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  companies: {
    list: {
      method: 'GET' as const,
      path: '/api/companies',
      responses: {
        200: z.array(z.custom<typeof companies.$inferSelect>()),
      },
    },
  },
};

// Helper for URL building
export function buildUrl(path: string, params?: Record<string, string | number>): string {
  let url = path;
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (url.includes(`:${key}`)) {
        url = url.replace(`:${key}`, String(value));
      }
    });
  }
  return url;
}

export type CompaniesListResponse = z.infer<typeof api.companies.list.responses[200]>;
