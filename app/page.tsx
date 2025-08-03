import CategoryFilter from "@/components/product/CategoryFilter";
import ProductGrid from "@/components/product/ProductGrid";
import ProductGridSkeleton from "@/components/product/ProductGridSkeleton";
import { fetchProducts, fetchCategories, fetchProductsByCategory } from "@/lib/api";
import { Typography } from "@mui/material";
import { Suspense } from "react";

interface HomeProps {
  searchParams: Promise<{
    category?: string;
  }>;
}


export default async function Home({ searchParams }: HomeProps) {
  const { category } = await searchParams;

  const categories = await fetchCategories();

  const products = category
    ? await fetchProductsByCategory(category)
    : await fetchProducts();

  return (
    <main>
      <Typography variant="h3" py={2}>Products</Typography>

      <CategoryFilter
        categories={categories}
        selectedCategory={category || ''}
      />

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid products={products} />
      </Suspense>
    </main>
  );
}