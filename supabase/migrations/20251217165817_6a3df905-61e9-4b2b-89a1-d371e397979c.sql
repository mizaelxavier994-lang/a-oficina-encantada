-- Create categories enum
CREATE TYPE public.product_category AS ENUM (
  'ferramentas-manuais',
  'ferramentas-eletricas',
  'medicao',
  'fixacao',
  'acabamento',
  'seguranca'
);

-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10, 2) NOT NULL,
  original_price DECIMAL(10, 2),
  category product_category NOT NULL,
  image_url TEXT,
  stock INTEGER NOT NULL DEFAULT 0,
  rating DECIMAL(2, 1) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  is_new BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Public read access for products (anyone can view the catalog)
CREATE POLICY "Products are viewable by everyone"
ON public.products
FOR SELECT
USING (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_products_updated_at
BEFORE UPDATE ON public.products
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample products
INSERT INTO public.products (name, description, price, original_price, category, image_url, stock, rating, review_count, is_featured, is_new) VALUES
  ('Furadeira de Impacto Pro', 'Furadeira profissional 750W com 2 velocidades e mandril 13mm', 349.90, 449.90, 'ferramentas-eletricas', '/products/drill.jpg', 25, 4.8, 127, true, false),
  ('Serra Circular 7"', 'Serra circular potente 1400W, ideal para cortes precisos em madeira', 459.90, NULL, 'ferramentas-eletricas', '/products/circular-saw.jpg', 15, 4.6, 89, true, false),
  ('Plaina Manual #4', 'Plaina de bancada clássica em ferro fundido, lâmina de aço carbono', 189.90, 229.90, 'ferramentas-manuais', '/products/hand-plane.jpg', 30, 4.9, 64, true, false),
  ('Kit Formões Premium', 'Conjunto 6 formões profissionais com cabo em madeira de lei', 279.90, NULL, 'ferramentas-manuais', '/products/chisel-set.jpg', 20, 4.7, 52, false, true),
  ('Lixadeira Orbital', 'Lixadeira 300W com coletor de pó e base de velcro', 199.90, 249.90, 'ferramentas-eletricas', '/products/sander.jpg', 18, 4.5, 73, false, false),
  ('Serra Tico-Tico 650W', 'Serra tico-tico com guia laser e base ajustável', 289.90, NULL, 'ferramentas-eletricas', '/products/jigsaw.jpg', 12, 4.4, 41, false, true);