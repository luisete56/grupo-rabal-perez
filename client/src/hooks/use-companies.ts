import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/routes";

export function useCompanies() {
  return useQuery({
    queryKey: [api.companies.list.path],
    queryFn: async () => {
      const res = await fetch(api.companies.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch companies");
      return api.companies.list.responses[200].parse(await res.json());
    },
  });
}
