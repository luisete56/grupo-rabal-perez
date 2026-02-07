import { motion } from "framer-motion";

const companies = [
  "Palmeras",
  "Gaviotas",
  "LMS Automático",
  "Bro",
  "Calma",
  "Asistente de Moda",
  "Ultimate Horror Survival",
];

export function StructureDiagram() {
  return (
    <div className="relative py-20 px-4 max-w-5xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <div className="inline-block p-6 rounded-2xl bg-primary text-primary-foreground shadow-xl border border-primary/50 relative z-10">
          <h3 className="text-2xl font-bold font-display">Grupo Rabal Pérez</h3>
          <p className="text-sm opacity-80 mt-1">La Matriz</p>
        </div>
        
        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground">
          Grupo Rabal Pérez es la matriz. Todas las empresas dependen del grupo.
        </p>
      </motion.div>

      <div className="relative">
        {/* Connection Lines (Desktop) */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-primary/50 to-border" />
        <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-border" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 md:mt-0 relative">
           {companies.map((name, index) => (
             <motion.div
               key={name}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className="relative"
             >
               {/* Vertical line for desktop */}
               <div className="hidden md:block absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-border" />
               
               <div className="bg-card hover:bg-secondary/20 transition-colors p-4 rounded-xl border border-border shadow-sm h-full flex items-center justify-center">
                 <span className="font-medium text-foreground text-sm">{name}</span>
               </div>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
}
