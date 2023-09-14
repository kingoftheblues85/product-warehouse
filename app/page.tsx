import { ProductType } from "@/typings";
import AddProductForm from "./components/AddProductForm";
import Products from "./components/Products";
import Link from "next/link";
import { getProducts } from "./actions/ProductActions";

export default async function Home() {
  const products: ProductType[] = await getProducts();

  return (
    <main className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mt-8">
        Products Warehouse
      </h1>

      <AddProductForm />

      <div className="mx-2 sm:mx-4">
        <Products products={products} />
      </div>
    </main>
  );
}
