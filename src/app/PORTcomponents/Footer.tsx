"use client";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link href="/shop" className="text-gray-600 hover:text-gray-900">Shop</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQs</Link>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>&copy; 2025 MyStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
