import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

import drillImg from "@/assets/products/drill.jpg";
import circularSawImg from "@/assets/products/circular-saw.jpg";
import handPlaneImg from "@/assets/products/hand-plane.jpg";
import chiselSetImg from "@/assets/products/chisel-set.jpg";
import sanderImg from "@/assets/products/sander.jpg";
import jigsawImg from "@/assets/products/jigsaw.jpg";

const products = [
  {
    id: 1,
    name: "Furadeira de Impacto 20V",
    price: 459.90,
    originalPrice: 599.90,
    rating: 4.8,
    reviews: 234,
    image: drillImg,
    badge: "Mais Vendido",
  },
  {
    id: 2,
    name: "Serra Circular 1800W",
    price: 789.90,
    originalPrice: null,
    rating: 4.9,
    reviews: 156,
    image: circularSawImg,
    badge: null,
  },
  {
    id: 3,
    name: "Plaina Manual N°4",
    price: 289.90,
    originalPrice: 349.90,
    rating: 4.7,
    reviews: 89,
    image: handPlaneImg,
    badge: "Oferta",
  },
  {
    id: 4,
    name: "Kit Formões Profissional",
    price: 199.90,
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    image: chiselSetImg,
    badge: null,
  },
  {
    id: 5,
    name: "Lixadeira Orbital 300W",
    price: 329.90,
    originalPrice: 399.90,
    rating: 4.8,
    reviews: 145,
    image: sanderImg,
    badge: "Novo",
  },
  {
    id: 6,
    name: "Serra Tico-Tico 650W",
    price: 419.90,
    originalPrice: null,
    rating: 4.5,
    reviews: 112,
    image: jigsawImg,
    badge: null,
  },
];

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const ProductsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Produtos em <span className="text-primary">Destaque</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              As melhores ferramentas selecionadas para você
            </p>
          </div>
          <Button variant="industrial" className="mt-4 md:mt-0">
            Ver Todos
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border">
                {/* Image Container */}
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider ${
                      product.badge === "Oferta" 
                        ? "bg-accent text-accent-foreground" 
                        : product.badge === "Novo"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}>
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Add Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Button variant="hero" className="w-full">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Adicionar
                    </Button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="ml-1 text-sm font-medium text-foreground">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.reviews} avaliações)
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-lg text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-display text-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Installments */}
                  <p className="text-sm text-muted-foreground mt-1">
                    ou 12x de {formatPrice(product.price / 12)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
