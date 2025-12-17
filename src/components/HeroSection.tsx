import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Shield, Headphones } from "lucide-react";
import heroImage from "@/assets/hero-tools.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ferramentas profissionais"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-industrial-dark via-industrial-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-display uppercase tracking-wider mb-6"
          >
            Nova Coleção 2024
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display text-secondary-foreground mb-6 leading-tight"
          >
            Ferramentas
            <span className="text-primary"> Profissionais</span>
            <br />
            para seu Projeto
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-secondary-foreground/70 mb-8 max-w-xl"
          >
            Descubra nossa linha completa de ferramentas para marcenaria e DIY. 
            Qualidade profissional com os melhores preços do mercado.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl">
              Ver Catálogo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="industrial" size="xl">
              Ofertas da Semana
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Features Bar */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute bottom-0 left-0 right-0 bg-primary/10 backdrop-blur-md border-t border-primary/20"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Truck className="h-6 w-6 text-primary" />
              <span className="text-sm text-secondary-foreground font-display uppercase tracking-wider">
                Frete Grátis acima de R$299
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-sm text-secondary-foreground font-display uppercase tracking-wider">
                Garantia de 2 Anos
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-end">
              <Headphones className="h-6 w-6 text-primary" />
              <span className="text-sm text-secondary-foreground font-display uppercase tracking-wider">
                Suporte Especializado
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
