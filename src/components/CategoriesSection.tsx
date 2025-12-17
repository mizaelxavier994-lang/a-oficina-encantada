import { motion } from "framer-motion";
import { Drill, Hammer, Wrench, Paintbrush } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Ferramentas Elétricas",
    description: "Furadeiras, serras e mais",
    icon: Drill,
    color: "from-primary to-accent",
  },
  {
    id: 2,
    name: "Ferramentas Manuais",
    description: "Martelos, chaves e alicates",
    icon: Hammer,
    color: "from-accent to-safety-orange",
  },
  {
    id: 3,
    name: "Marcenaria",
    description: "Formões, plainas e grampos",
    icon: Wrench,
    color: "from-industrial-gray to-industrial-dark",
  },
  {
    id: 4,
    name: "Pintura e Acabamento",
    description: "Pincéis, rolos e lixas",
    icon: Paintbrush,
    color: "from-primary to-warning-yellow",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
            Explore por <span className="text-primary">Categoria</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontre a ferramenta perfeita para cada tipo de trabalho
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <category.icon className="h-8 w-8 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-sm font-display uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors">
                  Ver produtos
                  <svg
                    className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
