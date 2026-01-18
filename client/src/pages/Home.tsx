import { useCompanies } from "@/hooks/use-companies";
import { CompanyCard } from "@/components/CompanyCard";
import { StructureDiagram } from "@/components/StructureDiagram";
import { Button } from "@/components/ui/button";
import { ArrowDown, Building2, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const { data: companies, isLoading } = useCompanies();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 selection:text-primary">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden border-b border-border/40">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-secondary/50 border border-border text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4">
            Corporate Portfolio
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-primary leading-[1.1]">
            Grupo Rabal Pérez
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed text-balance">
            Grupo empresarial creado por Luis Rabal Pérez que reúne proyectos tecnológicos, creativos y sociales orientados al futuro.
          </p>

          <div className="max-w-xl mx-auto text-base md:text-lg text-muted-foreground/80 leading-relaxed">
            Todas las empresas, plataformas y proyectos desarrollados por Luis Rabal Pérez forman parte de un mismo grupo, pero cada uno aborda un problema distinto desde una empresa especializada.
          </div>

          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/10 hover:shadow-2xl hover:shadow-primary/20 transition-all hover:-translate-y-1"
              onClick={() => scrollToSection('companies')}
            >
              Explorar empresas
              <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 2. THE GROUP SECTION */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">El Grupo</h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                Grupo Rabal Pérez es la matriz de un ecosistema diverso. Todas las creaciones pertenecen a Luis Rabal Pérez, agrupando tanto empresas activas como proyectos experimentales en desarrollo.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cada empresa opera de forma independiente con su propia web, producto y audiencia, pero todas comparten una visión común de innovación y excelencia.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border/60 rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Layers className="w-64 h-64" />
              </div>
              <blockquote className="relative z-10 text-xl md:text-2xl font-display italic text-foreground/80 leading-relaxed">
                "Grupo Rabal Pérez es un ecosistema de empresas que trabajan en: Automatización, Digitalización de sectores tradicionales, Nuevas formas de interacción entre personas, empresas y tecnología, Creatividad, formación y exploración social."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. COMPANIES SECTION */}
      <section id="companies" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Nuestras Empresas</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Diversificación estratégica en tecnología, creatividad y bienestar.
            </p>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-secondary/20 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
              {companies?.map((company, idx) => (
                <CompanyCard key={company.id} company={company} index={idx} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 4. STRUCTURE DIAGRAM */}
      <section className="py-24 px-4 bg-gradient-to-b from-secondary/20 to-background border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Estructura Corporativa</h2>
            <p className="text-lg text-muted-foreground">La organización del ecosistema</p>
          </motion.div>
          
          <StructureDiagram />
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="bg-primary text-primary-foreground py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">Grupo Rabal Pérez</h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Todas las creaciones de Luis Rabal Pérez. Un futuro construido sobre la innovación y la calidad humana.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-primary-foreground/10 pb-2 inline-block">Empresas</h4>
            <ul className="space-y-2">
              {companies?.map((company) => (
                <li key={company.id}>
                  <a 
                    href={company.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary-foreground/70 hover:text-white hover:underline transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {company.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold border-b border-primary-foreground/10 pb-2 inline-block">Contacto</h4>
            <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
              <Globe className="w-4 h-4" />
              <span>www.gruporabalperez.com</span>
            </div>
            <div className="flex items-center space-x-2 text-primary-foreground/70 text-sm">
              <Building2 className="w-4 h-4" />
              <span>Sede Central: España</span>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} Grupo Rabal Pérez. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
