"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageBanner } from "@/components/layout/PageBanner";
import { useCart } from "@/context/CartContext";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart } = useCart();
  const [placed, setPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setPlaced(true);
    clearCart();
  };

  return (
    <>
      <PageBanner
        title="Checkout"
        subtitle="Complete your order and sponsor vital non-profit initiatives."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Shop", href: "/shop" },
          { label: "Checkout" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          {placed ? (
            <div className="text-center py-16 bg-gray-50 border border-gray-100 rounded-3xl p-8 max-w-xl mx-auto">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
                <i className="fa-solid fa-check"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Order Placed Successfully!
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Thank you for your purchase! A confirmation email and tracking link have been sent. 100% of the profits from this order directly fund relief programs.
              </p>
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl text-sm transition inline-block"
              >
                Back To Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handleOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Billing Form */}
              <div className="lg:col-span-7 space-y-6">
                <h3 className="text-xl font-bold text-gray-900 pb-3 border-b border-gray-200">
                  Billing & Shipping Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="First Name *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Last Name *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Street Address *"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="City *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="State / Province *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Postal Code *"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 pb-3 border-b border-gray-200 mb-4">
                    Payment Method
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {["card", "paypal", "stripe"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setPaymentMethod(m)}
                        className={`p-3 rounded-xl border text-xs font-bold uppercase transition flex items-center justify-center gap-2 ${
                          paymentMethod === m
                            ? "border-amber-500 bg-amber-50 text-slate-900"
                            : "border-gray-200 text-gray-600"
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Items Review */}
              <div className="lg:col-span-5">
                <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 shadow-sm">
                  <h4 className="text-base font-bold text-gray-900 mb-4 pb-3 border-b border-gray-200">
                    Your Order Items
                  </h4>
                  <div className="divide-y divide-gray-200 mb-6 max-h-60 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.product.id} className="py-3 flex justify-between text-xs">
                        <div>
                          <strong className="text-gray-900 block">{item.product.name}</strong>
                          <span className="text-gray-500">Qty: {item.quantity}</span>
                        </div>
                        <span className="font-bold text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-3 border-t border-gray-200 text-sm mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-semibold text-green-600">Free</span>
                    </div>
                    <div className="pt-2 border-t border-gray-200 flex justify-between text-base font-black text-gray-900">
                      <span>Total Amount</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-sm shadow transition"
                  >
                    Pay & Place Order
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
