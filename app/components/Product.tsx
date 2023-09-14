"use client";

import React, { useState } from "react";
import { HiTrash } from "react-icons/hi";

import { ProductType } from "@/typings";
import { deleteProduct } from "../actions/ProductActions";

interface ProductProps {
  product: ProductType;
}

const Product: React.FC<ProductProps> = ({ product }) => {


  const handleDelete = (productId: number | undefined) => {
    deleteProduct(productId);
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
        bg-white
        rounded-md
        hover:shadow-md
        border-2
        transition
        duration-300

      `}
    >
      <div className="font-semibold text-gray-800 mb-2 overflow-clip">
        <h3 className="truncate">{product.name}</h3>
      </div>
      <div className="flex-1 justify-start items-start font-light overflow-clip text-gray-600 text-sm mb-2">
        <p className="text-clip">{product.description}</p>
      </div>
      <div className="flex items-center justify-between text-sky-800 text-sm">
        <div className="flex-1 overflow-clip mr-8">
          <span className="text-xs font-semibold py-2 px-2 bg-green-600 text-white rounded-md">
            ${product.price}
          </span>
        </div>
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
      <div className=""></div>
    </div>
  );
};

export default Product;
