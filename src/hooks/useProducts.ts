import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type ProductCategory = 
  | 'ferramentas-manuais'
  | 'ferramentas-eletricas'
  | 'medicao'
  | 'fixacao'
  | 'acabamento'
  | 'seguranca';

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  original_price: number | null;
  category: ProductCategory;
  image_url: string | null;
  stock: number;
  rating: number | null;
  review_count: number | null;
  is_featured: boolean | null;
  is_new: boolean | null;
  created_at: string;
  updated_at: string;
}

export const useProducts = (featuredOnly = false) => {
  return useQuery({
    queryKey: ['products', { featuredOnly }],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (featuredOnly) {
        query = query.eq('is_featured', true);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      return data as Product | null;
    },
    enabled: !!id,
  });
};
