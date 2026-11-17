"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck, 
  Truck
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { 
    items, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    subtotal, 
    shipping, 
    total,
    cartCount
  } = useCart();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isCartOpen) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const freeShippingThreshold = 500;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity duration-300 animate-fade-in"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] shadow-2xl flex flex-col border-l border-brand-gold/30 transform transition-transform duration-300">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 bg-white flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-brand-teal" />
              <h2 className="font-serif-luxury text-xl font-bold text-brand-teal tracking-wide">
                Your Acquisition Cart
              </h2>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-brand-coral/20 text-brand-terracotta">
                {cartCount} {cartCount === 1 ? "piece" : "pieces"}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-stone-400 hover:text-stone-700 rounded-full hover:bg-stone-100 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary shipping bar */}
          <div className="px-5 py-3 bg-brand-teal/5 border-b border-brand-teal/10">
            <div className="flex items-center justify-between text-xs text-brand-teal font-medium mb-1.5">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-brand-coral" />
                {amountNeededForFreeShipping === 0 ? (
                  <span className="font-semibold text-emerald-800">You unlocked complimentary insured art shipping!</span>
                ) : (
                  <span>Add <strong className="text-brand-terracotta">${amountNeededForFreeShipping}</strong> more for complimentary shipping</span>
                )}
              </span>
              <span>{Math.round(freeShippingProgress)}%</span>
            </div>
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-brand-coral h-full rounded-full transition-all duration-500"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4">
                <div className="w-20 h-20 rounded-full bg-brand-ivory border-2 border-dashed border-brand-coral/50 flex items-center justify-center text-brand-terracotta mb-4">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif-luxury text-2xl font-bold text-brand-teal">Your cart is empty</h3>
                <p className="text-sm text-stone-500 mt-2 max-w-xs leading-relaxed">
                  Every artwork by Lydia Malak is a unique handmade expression ready to elevate your living space.
                </p>
                <Link
                  href="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-teal text-white text-xs font-semibold uppercase tracking-wider hover:bg-brand-teal-light shadow-md transition-all"
                >
                  <span>Explore Artworks</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div 
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-white border border-stone-200/80 shadow-sm relative group hover:border-brand-gold/40 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 border border-stone-200">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="font-serif-luxury text-base font-bold text-brand-teal hover:text-brand-terracotta transition-colors line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-stone-400 hover:text-red-500 transition-colors p-1"
                          title="Remove artwork"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-stone-500 capitalize">{item.product.category}</p>
                      {item.selectedFraming && (
                        <p className="text-[11px] text-brand-terracotta font-medium mt-0.5">
                          Frame: {item.selectedFraming}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-stone-300 rounded-md bg-stone-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors rounded-l-md"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-stone-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 hover:bg-stone-200 text-stone-600 transition-colors rounded-r-md"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-serif-luxury text-base font-bold text-brand-teal">
                        ${item.product.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-white space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">${subtotal}</span>
                </div>
                <div className="flex justify-between text-stone-600">
                  <span>Art Insurance & Delivery</span>
                  <span>{shipping === 0 ? <strong className="text-emerald-700 font-semibold">FREE</strong> : `$${shipping}`}</span>
                </div>
                <div className="flex justify-between text-base font-bold text-brand-teal pt-2 border-t border-stone-200">
                  <span>Total Amount</span>
                  <span className="font-serif-luxury text-xl font-bold">${total}</span>
                </div>
                <p className="text-[10px] text-stone-400 text-right">Demo sample prices • Payment coordinated upon dispatch</p>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-brand-teal text-white font-semibold text-sm hover:bg-brand-teal-light shadow-art hover:shadow-art-lg transition-all"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-brand-coral" />
                </Link>

                <div className="flex gap-2">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 text-center py-2.5 px-3 rounded-lg border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors"
                  >
                    View Full Cart
                  </Link>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 py-2.5 px-3 rounded-lg border border-transparent text-xs font-semibold text-brand-terracotta hover:bg-brand-coral/10 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                <span>Original art packaging with Certificate of Authenticity</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
