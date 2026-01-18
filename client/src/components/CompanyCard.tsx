import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { CompanyResponse } from "@shared/schema";
import { motion } from "framer-motion";

interface CompanyCardProps {
  company: CompanyResponse;
  index: number;
}

export function CompanyCard({ company, index }: CompanyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <div className="group h-full flex flex-col bg-card rounded-2xl border border-border/50 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300">
        <div className="p-6 md:p-8 flex-1 flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/5 text-primary tracking-wide uppercase mb-3">
              {company.sector}
            </span>
            <h3 className="text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors">
              {company.name}
            </h3>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            {company.description}
          </p>

          <div className="space-y-4">
            <div className="h-px bg-border/50 w-full" />
            <div className="flex flex-wrap gap-2">
              {company.services.map((service, i) => (
                <span 
                  key={i} 
                  className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8 pt-0 mt-auto">
          <Button 
            className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground"
            variant="outline"
            onClick={() => window.open(company.url, '_blank')}
          >
            {company.ctaText}
            <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
