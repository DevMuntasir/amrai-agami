"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product__item group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between h-full">
      <div className="product__thumb relative overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
        <Link href={`/shop/${product.slug}`} className="w-full flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-44 h-44 object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        {product.oldPrice && (
          <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md">
            Sale
          </span>
        )}
      </div>
      <div className="product__content p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="rating flex items-center gap-1 text-amber-400 text-xs mb-2">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={i < product.rating ? "fa-solid fa-star" : "fa-regular fa-star text-gray-300"}
              ></i>
            ))}
            <span className="text-gray-400 text-[11px] ml-1">({product.reviewsCount})</span>
          </div>
          <h4 className="text-base font-bold text-gray-900 hover:text-amber-600 transition mb-2">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h4>
          <p className="text-gray-500 text-xs mb-4 line-clamp-2">{product.description}</p>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="price flex items-baseline gap-2">
            <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-xs text-gray-400 line-through">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <button
            onClick={handleAdd}
            aria-label="Add to cart"
            className={`px-3 py-2 rounded-lg font-bold text-xs transition flex items-center gap-1.5 ${
              added
                ? "bg-green-600 text-white"
                : "bg-amber-500 hover:bg-amber-600 text-slate-950"
            }`}
          >
            <i className={added ? "fa-solid fa-check" : "fa-solid fa-cart-shopping"}></i>
            {added ? "Added!" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
};
