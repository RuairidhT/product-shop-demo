import ProductDetails from '@/components/product/ProductDetails';
import ProductDetailsSkeleton from '@/components/product/ProductDetailsSkeleton';
import { fetchProductById } from '@/lib/api';
import { Suspense } from 'react';

interface ProductPageProps {
  params: { id: string | Promise<string> };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await fetchProductById(Number(id));

  return (
    <Suspense fallback={<ProductDetailsSkeleton />}>
      <ProductDetails product={product} />
    </Suspense>
  );
}
