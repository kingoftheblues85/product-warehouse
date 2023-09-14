"use client";

import React from "react";
import Product from "./Product";
import { ProductType } from "@/typings";
import Link from "next/link";

interface ProductsProps {
  products: ProductType[];
}

const Products: React.FC<ProductsProps> = ({ products }) => {
  return (
    <>
      <div className=" mb-4 flex items-baseline">
        <h2 className="text-xl font-semibold">All Products</h2>
        <Link href="https://mockapi.io/" className="ml-4 text-blue-400 text-xs">
          (https://mockapi.io/)
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product: ProductType) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <p>No products to display</p>
        )}
      </div>
    </>
  );
};

export default Products;
