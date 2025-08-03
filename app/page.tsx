import ProductGrid from "@/components/product/ProductGrid";
import ProductGridSkeleton from "@/components/product/ProductGridSkeleton";
import { fetchProducts } from "@/lib/api";
import { Typography } from "@mui/material";
import { Suspense } from "react";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main>
      <Typography variant="h3" py={2}>Products</Typography>
      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid products={products} />
      </Suspense>
    </main >
  );
}
