"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Check, Eye } from "lucide-react";
import { ArtworkProduct } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: ArtworkProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, "Natural Wood");
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  const displayImage = isHovered && product.images[1] ? product.images[1] : product.images[0];

  return (
    <div 
      className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-art-lg transition-all duration-300 flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with Badges */}
      <div className="relative aspect-[4/5] bg-stone-100 overflow-hidden">
        <Link href={`/shop/${product.slug}`} className="block w-full h-full">
          <Image
            src={displayImage}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </Link>

        {/* Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.isOneOfAKind && (
            <span className="bg-brand-teal/90 backdrop-blur-md text-brand-ivory text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              Original • 1 of 1
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-brand-coral/95 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
              New Arrival
            </span>
          )}
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-white/90 backdrop-blur-md text-brand-teal text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm border border-brand-gold/30">
            {product.category}
          </span>
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-brand-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 pointer-events-none">
          <Link
            href={`/shop/${product.slug}`}
            className="pointer-events-auto p-3 rounded-full bg-white text-brand-teal shadow-lg hover:bg-brand-teal hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-1.5 text-xs font-semibold"
          >
            <Eye className="w-4 h-4" />
            <span>View Artwork</span>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Palette notes */}
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[10px] uppercase tracking-wider text-stone-400 font-medium">Palette:</span>
            <div className="flex -space-x-1">
              {product.palette.map((color, idx) => (
                <span
                  key={idx}
                  className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
            <span className="text-[11px] text-stone-400 ml-auto font-mono">{product.year}</span>
          </div>

          {/* Title */}
          <Link href={`/shop/${product.slug}`} className="block group-hover:text-brand-terracotta transition-colors">
            <h3 className="font-serif-luxury text-lg font-bold text-brand-teal line-clamp-1 leading-snug">
              {product.name}
            </h3>
          </Link>

          {/* Short description / dimensions */}
          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <p className="text-[11px] text-brand-teal/70 font-medium mt-2">
            Dimensions: {product.dimensions}
          </p>
        </div>

        {/* Pricing and Action */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="font-serif-luxury text-xl font-bold text-brand-teal">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] text-stone-400 block -mt-0.5">Sample Demo Price</span>
          </div>

          <button
            onClick={handleQuickAdd}
            disabled={isAdded}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center gap-1.5 ${
              isAdded
                ? "bg-emerald-600 text-white"
                : "bg-brand-teal text-white hover:bg-brand-teal-light shadow-sm hover:shadow"
            }`}
            aria-label={`Add ${product.name} to acquisition cart`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-brand-coral" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
