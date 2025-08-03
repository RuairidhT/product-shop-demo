import { fetchProductById, fetchProducts } from '@/lib/api';
import { Product } from '@/types/product';
import { useEffect, useState } from 'react';

interface UseProductsReturnMultiple {
  products: Product[];
  product: null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UseProductsReturnSingle {
  products: null;
  product: Product | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProducts(): UseProductsReturnMultiple;
export function useProducts(id: number): UseProductsReturnSingle;
export function useProducts(id?: number) {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      if (id !== undefined) {
        const fetchedProduct = await fetchProductById(id);
        setProduct(fetchedProduct);
        setProducts(null);
      } else {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        setProduct(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      setProducts(null);
      setProduct(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const refetch = () => {
    fetchData();
  };

  return {
    products,
    product,
    loading,
    error,
    refetch
  };
}