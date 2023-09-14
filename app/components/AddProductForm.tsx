'use client'

import React from "react";
import { useTransition } from 'react'

import { addProduct } from "../actions/ProductActions";
import Button from "./Button";

const AddProductForm = () => {


  return (
    <form
      action={addProduct}
      className="flex flex-col gap-5 max-w-xl mx-auto p-5 border-2 my-8 bg-neutral-50"
    >
      <h2 className="text-xl font-semibold text-center">Add Products</h2>
      <input
        name="name"
        type="text"
        placeholder="Product Name"
        className="text-sm border border-gray-300  p-2 rounded-md"
      />
      <input
        name="description"
        type="text"
        placeholder="Description"
        className="text-sm border border-gray-300  p-2 rounded-md"
      />
      <input
        name="price"
        type="text"
        placeholder="Price"
        className="text-sm border border-gray-300  p-2 rounded-md"
      />
    <Button>Submit</Button>
    </form>
  );
};

export default AddProductForm;
