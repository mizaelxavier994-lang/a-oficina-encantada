import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star, ShoppingCart, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import drillImage from "@/assets/products/drill.jpg";
import circularSawImage from "@/assets/products/circular-saw.jpg";
import sanderImage from "@/assets/products/sander.jpg";
import jigsawImage from "@/assets/products/jigsaw.jpg";
import chiselSetImage from "@/assets/products/chisel-set.jpg";
import handPlaneImage from "@/assets/products/hand-plane.jpg";

const imageMap: Record<string, string> = {
  "/products/drill.jpg": drillImage,
  "/products/circular-saw.jpg": circularSawImage,
  "/products/sander.jpg": sanderImage,
  "/products/jigsaw.jpg": jigsawImage,
  "/products/chisel-set.jpg": chiselSetImage,
  "/products/hand-plane.jpg": handPlaneImage,
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Produto não encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para a loja
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const productImage = imageMap[product.image_url || ""] || product.image_url;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-xl bg-muted"
          >
            <img
              src={productImage}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.is_new && (
              <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                Novo
              </Badge>
            )}
            {product.original_price && (
              <Badge className="absolute top-4 right-4 bg-destructive text-destructive-foreground">
                Oferta
              </Badge>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            <Badge variant="outline" className="w-fit mb-4 text-xs uppercase tracking-wide">
              {product.category}
            </Badge>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating || 0)
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.review_count || 0} avaliações)
              </span>
            </div>

            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mb-8">
              {product.original_price ? (
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-primary">
                    {formatPrice(Number(product.price))}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(Number(product.original_price))}
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(Number(product.price))}
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mb-8">
              <span
                className={`text-sm font-medium ${
                  product.stock > 0 ? "text-green-600" : "text-destructive"
                }`}
              >
                {product.stock > 0
                  ? `${product.stock} unidades em estoque`
                  : "Produto indisponível"}
              </span>
            </div>

            <Button
              size="lg"
              className="w-full lg:w-auto"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
