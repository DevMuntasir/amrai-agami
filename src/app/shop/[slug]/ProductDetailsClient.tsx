"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

export const ProductDetailsClient: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 bg-gray-50 border border-gray-100 rounded-3xl p-10 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-h-80 w-auto object-contain"
            />
          </div>

          <div className="md:col-span-6">
            <span className="text-xs font-extrabold text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full mb-3 inline-block">
              {product.category}
            </span>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <div className="rating flex items-center text-amber-400 text-sm">
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < product.rating
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star text-gray-300"
                    }
                  ></i>
                ))}
              </div>
              <span className="text-xs text-gray-500 font-semibold">
                ({product.reviewsCount} Customer Reviews)
              </span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-black text-slate-900">
                ${product.price.toFixed(2)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-gray-400 line-through">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm"
                >
                  -
                </button>
                <span className="px-4 py-2.5 text-sm font-bold text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold text-sm"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className={`px-8 py-3.5 rounded-xl font-bold text-sm transition shadow-md flex items-center gap-2 ${
                  added
                    ? "bg-green-600 text-white"
                    : "bg-amber-500 hover:bg-amber-600 text-slate-950"
                }`}
              >
                <i className={added ? "fa-solid fa-check" : "fa-solid fa-cart-shopping"}></i>
                <span>{added ? "Added To Cart!" : "Add To Cart"}</span>
              </button>
            </div>

            <div className="pt-6 border-t border-gray-100 text-xs text-gray-500 space-y-1">
              <p>
                <strong>Availability:</strong>{" "}
                <span className="text-green-600 font-bold">
                  {product.inStock ? "In Stock (Ships in 24h)" : "Out of Stock"}
                </span>
              </p>
              <p>
                <strong>Impact Guarantee:</strong> 100% of proceeds fund emergency relief projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
