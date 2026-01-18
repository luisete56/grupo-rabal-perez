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
      {/* 1. HERO SECTION - Full screen dark hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 z-0">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
          
          {/* Diagonal lines accent */}
          <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 80px, rgba(255,255,255,0.1) 80px, rgba(255,255,255,0.1) 81px)`
          }} />
          
          {/* Gradient overlay */}
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary via-transparent to-transparent" />
          
          {/* Accent glow */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-[2px] bg-accent" />
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                  Grupo Empresarial
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-primary-foreground leading-[1.05] tracking-tight">
                Grupo<br />
                <span className="text-accent">Rabal</span> Pérez
              </h1>
              
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl leading-relaxed">
                Proyectos tecnológicos, creativos y sociales orientados al futuro. Un ecosistema de empresas que impulsa la innovación.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="text-base px-8 py-6 font-semibold"
                  onClick={() => scrollToSection('companies')}
                  data-testid="button-explore-companies"
                >
                  Explorar empresas
                  <ArrowDown className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-base px-8 py-6 border-primary-foreground/20 text-primary-foreground bg-transparent"
                  onClick={() => scrollToSection('group')}
                  data-testid="button-about-group"
                >
                  Sobre el grupo
                </Button>
              </div>
            </motion.div>

            {/* Right - Stats/Numbers */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 space-y-2">
                  <div className="text-5xl font-display font-bold text-accent">5</div>
                  <div className="text-primary-foreground/60 text-sm">Empresas activas</div>
                </div>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 space-y-2">
                  <div className="text-5xl font-display font-bold text-primary-foreground">+</div>
                  <div className="text-primary-foreground/60 text-sm">Proyectos en desarrollo</div>
                </div>
                <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 space-y-2 col-span-2">
                  <div className="text-2xl font-display font-semibold text-primary-foreground">Automatización · Digitalización · Creatividad</div>
                  <div className="text-primary-foreground/60 text-sm">Sectores de especialización</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/40"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* 2. THE GROUP SECTION */}
      <section id="group" className="py-24 px-4 bg-secondary/30">
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
