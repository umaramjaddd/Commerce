"use client"
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              MyStore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900 transition">
              Shop
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition">
              FAQs
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Cart Icon */}
          <div className="ml-4 flex items-center">
            <Link href="/cart" className="relative">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {/* Cart Item Count */}
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-gray-50 border-t border-gray-200">
          <div className="px-4 py-3 space-y-1">
            <Link href="/" className="block text-gray-600 hover:text-gray-900 transition">
              Home
            </Link>
            <Link href="/shop" className="block text-gray-600 hover:text-gray-900 transition">
              Shop
            </Link>
            <Link href="/about" className="block text-gray-600 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/contact" className="block text-gray-600 hover:text-gray-900 transition">
              Contact
            </Link>
            <Link href="/faq" className="block text-gray-600 hover:text-gray-900 transition">
              FAQs
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
