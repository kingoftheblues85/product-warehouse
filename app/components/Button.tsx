'use client'

interface ButtonProps {
  children: string;
}
import React, { useTransition } from "react";

const Button: React.FC<ButtonProps> = ({ children }) => {
  const [isPending, startTransition] = useTransition();

  
  return (
    <button
      type="submit"
      className="rounded-md border bg-blue-600 text-white px-4 py-2 hover:bg-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;
