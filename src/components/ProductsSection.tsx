import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useProducts, Product } from "@/hooks/useProducts";

import drillImg from "@/assets/products/drill.jpg";
import circularSawImg from "@/assets/products/circular-saw.jpg";
import handPlaneImg from "@/assets/products/hand-plane.jpg";
import chiselSetImg from "@/assets/products/chisel-set.jpg";
import sanderImg from "@/assets/products/sander.jpg";
import jigsawImg from "@/assets/products/jigsaw.jpg";

// Map database image paths to imported images
const imageMap: Record<string, string> = {
  '/products/drill.jpg': drillImg,
  '/products/circular-saw.jpg': circularSawImg,
  '/products/hand-plane.jpg': handPlaneImg,
  '/products/chisel-set.jpg': chiselSetImg,
  '/products/sander.jpg': sanderImg,
  '/products/jigsaw.jpg': jigsawImg,
};

const formatPrice = (price: number) => {
  return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const getBadge = (product: Product) => {
  if (product.is_new) return "Novo";
  if (product.original_price && product.original_price > product.price) return "Oferta";
  if (product.is_featured) return "Destaque";
  return null;
};

const ProductsSection = () => {
  const { data: products, isLoading, error } = useProducts();

  if (error) {
    console.error('Error fetching products:', error);
  }

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

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products?.map((product, index) => {
              const badge = getBadge(product);
              const imageUrl = product.image_url ? imageMap[product.image_url] || product.image_url : drillImg;
              
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/produto/${product.id}`} className="block">
                    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border cursor-pointer">
                    {/* Image Container */}
                    <div className="relative aspect-square bg-muted overflow-hidden">
                      <img
                        src={imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Badge */}
                      {badge && (
                        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-display uppercase tracking-wider ${
                          badge === "Oferta" 
                            ? "bg-accent text-accent-foreground" 
                            : badge === "Novo"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}>
                          {badge}
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
                            {product.rating || 0}
                          </span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({product.review_count || 0} avaliações)
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
                        {product.original_price && (
                          <span className="text-sm text-muted-foreground line-through">
                            {formatPrice(product.original_price)}
                          </span>
                        )}
                      </div>

                      {/* Installments */}
                      <p className="text-sm text-muted-foreground mt-1">
                        ou 12x de {formatPrice(product.price / 12)}
                      </p>
                    </div>
                  </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
