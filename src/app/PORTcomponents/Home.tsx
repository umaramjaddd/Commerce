"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import products from "./AllProducts";
import HorizontalScrollCarousel from "./Carousel";

const Home: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <main className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-8 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">
          Welcome to <span className="text-teal-600">Acme Store</span>
        </h1>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden transform hover:scale-105"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>
                <p className="text-lg font-semibold text-teal-500">{product.price}</p>
                <Link
                  href={`/product/${product.id}`}
                  className="text-sm font-medium text-white bg-teal-500 hover:bg-teal-600 rounded-full px-4 py-2 inline-block mt-4 transition-colors"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <HorizontalScrollCarousel />
    </main>
  );
};

export default Home;
