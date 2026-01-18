import { useCompanies } from "@/hooks/use-companies";
import { CompanyCard } from "@/components/CompanyCard";
import { StructureDiagram } from "@/components/StructureDiagram";
import { Button } from "@/components/ui/button";
import { ArrowDown, Building2, Globe, Layers } from "lucide-react";
import { motion } from "framer-motion";
import heroBackground from "@assets/image_1768755699510.png";

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
      {/* 1. HERO SECTION - Full width horizontal layout */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 z-0 bg-black/50" />

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-16 h-[2px] bg-white/40" />
              <span className="text-white/60 text-sm font-medium tracking-[0.2em] uppercase">
                Grupo Empresarial
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-display font-bold text-white leading-[1.05] tracking-tight">
              Grupo Rabal Pérez
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
              Grupo Rabal Pérez es una empresa del Mediterráneo que, gracias a la inteligencia artificial, democratiza servicios que antes solo estaban al alcance de compañías con grandes presupuestos.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
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
                className="text-base px-8 py-6 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => scrollToSection('group')}
                data-testid="button-about-group"
              >
                Luis Rabal Pérez
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4">
                <div className="flex items-center gap-4">
                  <span className="text-5xl md:text-6xl font-display font-bold text-white">5</span>
                  <div className="text-white/80">
                    <span className="text-lg font-semibold block">Empresas</span>
                    <span className="text-sm">activas</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-8 md:left-16 lg:left-24 flex items-center gap-3 text-white/50"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* 2. THE GROUP SECTION */}
      <section id="group" className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary">Luis Rabal Pérez</h2>
              <img 
                src={founderImage} 
                alt="Firma de Luis Rabal Pérez" 
                className="h-24 w-auto object-contain"
              />
            </div>
            <div className="w-20 h-1 bg-primary/30 rounded-full" />
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mi nombre es Luis Rabal Pérez, diseñador de producto murciano y fundador del grupo. Cuando apareció ChatGPT, como muchos otros, quedé impresionado por el potencial de la inteligencia artificial. Me di cuenta de que la IA podía ser una gran aliada para las empresas de mi entorno, en su mayoría pymes que no podían asumir los costes de las herramientas digitales habituales.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Por eso decidí no crear una única empresa, sino varias, cada una enfocada en resolver problemas concretos y acercar la tecnología a quienes realmente la necesitan.
            </p>
          </motion.div>
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
                    <span className="w-1.5 h-1.5 bg-primary-foreground rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
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
