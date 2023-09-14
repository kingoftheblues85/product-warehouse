"use server";

import { revalidateTag } from "next/cache";
import { ProductType } from "@/typings";

export const getProducts = async () => {
  try {
    // Fetch the products with caching disabled
    const response = await fetch(
      "https://64ff6515f8b9eeca9e2a12d6.mockapi.io/api/products",
      {
        cache: "no-store", // Disable caching
        next: {
          tags: ["products"],
        },
      }
    );

    if (!response.ok) {
      // Handle non-successful responses (e.g., 404 Not Found)
      console.error(
        `Failed to fetch products. Status code: ${response.status}`
      );
      return response.status
    }

    const products = await response.json();
    return products;

  } catch (error) {
    // Handle network errors or exceptions
    console.error("Error fetching products:", error);
    throw error;
  }


};

export const addProduct = async (e: FormData) => {
  const name = e.get("name")?.toString();
  const description = e.get("description")?.toString();
  const price = e.get("price")?.toString();

  if (!name || !description || !price) return;

  const newProduct: ProductType = {
    name,
    description,
    price,
  };

  await fetch("https://64ff6515f8b9eeca9e2a12d6.mockapi.io/api/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      "Content-Type": "application/json",
    },
  });

  revalidateTag("products");
};

export const deleteProduct = async (productId: number | undefined) => {
  if (!productId) {
    console.log("No productID");
    return;
  }

  try {
    const response = await fetch(
      `https://64ff6515f8b9eeca9e2a12d6.mockapi.io/api/products/${productId}`,
      {
        method: "Delete",
      }
    );

    if (!response.ok) {
      // Handle non-successful responses (e.g., 404 Not Found)
      console.error(
        `Failed to delete product with ID ${productId}. Status code: ${response.status}`
      );
      return response.status;
    } else {
      console.log(`Product with ID ${productId} deleted.`);
      revalidateTag("products");
      return response.status;
    }
  } catch (error) {
    // Handle network errors or exceptions
    console.error("Error deleting product:", error);
    return error;
  }
};
