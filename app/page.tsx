"use client"

import { useProducts } from "@/hooks/useProducts";
import Image from "next/image";

export default function Home() {
  const { products, loading, error } = useProducts();

  return (
    <>
    {
      loading && <p>Loading products...</p>
    }
    {
      error && <p>Error: {error}</p>
    }
    {
      products && products.map(product => (
        <div key={product.id} className="product">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))
    }
    </>
  );
}
