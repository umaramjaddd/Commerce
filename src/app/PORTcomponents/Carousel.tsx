"use client";
import { useState } from "react";
import Link from "next/link";
import products from "./AllProducts";
const HorizontalScrollCarousel: React.FC = () => {


  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Trending Products</h2>
        
        <div className="flex space-x-4 overflow-x-auto pb-4 scroll-smooth">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.imgSrc} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.price}</p>
                <Link href={`/product/${product.id}`} className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
