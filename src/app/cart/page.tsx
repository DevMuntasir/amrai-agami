"use client";

import React from "react";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, subtotal, clearCart } = useCart();

  return (
    <>
      <PageBanner
        title="Your Shopping Cart"
        subtitle="Review your items before proceeding to secure checkout."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Cart" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {cart.length === 0 ? (
            <div className="text-center py-16 bg-gray-50 border border-gray-100 rounded-3xl p-8">
              <div className="w-16 h-16 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mx-auto mb-4">
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Your cart is currently empty</h3>
              <p className="text-gray-500 text-sm mb-6">
                Explore our purpose-driven merchandise to support charity causes.
              </p>
              <Link
                href="/shop"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs rounded-xl shadow transition inline-block"
              >
                Visit Shop
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Items List */}
              <div className="lg:col-span-8 space-y-4">
                <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-gray-200 text-xs font-bold text-gray-500 uppercase">
                  <span className="col-span-6">Product</span>
                  <span className="col-span-2 text-center">Price</span>
                  <span className="col-span-2 text-center">Quantity</span>
                  <span className="col-span-2 text-right">Total</span>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.product.id}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 bg-gray-50 rounded-2xl border border-gray-100"
                  >
                    <div className="col-span-6 flex items-center gap-4">
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 text-sm"
                        aria-label="Remove item"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-16 h-16 object-contain bg-white rounded-xl p-1 border"
                      />
                      <div>
                        <h4 className="text-sm font-bold text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <span className="text-xs text-gray-500">{item.product.category}</span>
                      </div>
                    </div>

                    <div className="col-span-2 text-center text-sm font-semibold text-gray-700">
                      ${item.product.price.toFixed(2)}
                    </div>

                    <div className="col-span-2 flex items-center justify-center">
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-white">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-1 text-xs font-bold hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span className="px-3 py-1 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-1 text-xs font-bold hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 text-right text-sm font-bold text-slate-900">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}

                <div className="flex justify-between items-center pt-4">
                  <button
                    onClick={clearCart}
                    className="text-xs text-red-500 hover:underline font-semibold"
                  >
                    Clear Cart
                  </button>
                  <Link
                    href="/shop"
                    className="text-xs font-bold text-slate-900 hover:text-amber-600 transition"
                  >
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Summary Card */}
              <div className="lg:col-span-4">
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    Order Summary
                  </h4>
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Charity Donation Impact</span>
                      <span className="font-semibold text-green-600">100% of profit</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">FREE</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200 flex justify-between text-base font-extrabold text-gray-900">
                      <span>Total</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    href="/checkout"
                    className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-center block rounded-xl text-sm shadow transition"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
