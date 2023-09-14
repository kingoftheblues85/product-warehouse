"use client";

import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";

import { ProductType } from "@/typings";
import { deleteProduct } from "../actions/ProductActions";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleDelete = (productId: number | undefined) => {
    deleteProduct(productId)
  };

  return (
    <div
      className={`
        flex 
        flex-col 
        justify-between 
        h-52 
        max-h-52  
        p-4 
        border-2
        transition-opacity
        duration-300
        ${fadeOut ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="font-semibold text-gray-800 mb-2">{product.name}</div>
      <div className="font-light text-gray-600 text-sm mb-2">
        {product.description}
      </div>
      <div className="text-sky-800 text-sm">${product.price}</div>
      <div className="flex justify-end">
        <HiTrash
          size={16}
          onClick={() => handleDelete(product.id)}
          className={`
          text-red-400 
          hover:text-red-600 
          cursor-pointer 
        `}
        />
      </div>
    </div>
  );
};

export default Product;
