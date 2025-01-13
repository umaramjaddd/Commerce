"use client";

import { usePathname } from "next/navigation"; 
import { useState, useEffect } from "react";
import products from "@/app/PORTcomponents/AllProducts";

const ProductView: React.FC = () => {
  const pathname = usePathname();
  const idd = pathname?.split("/").pop();
  const id = parseInt(idd as string);
  console.log(id);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [mainImage, setMainImage] = useState<string>("");

  // Fetch the product by ID
  useEffect(() => {
    if (id) {
      setLoading(true); // Set loading to true when fetching data
      const foundProduct = products.find((p) => p.id === id);
      setProduct(foundProduct);
      setMainImage(foundProduct?.imgSrc || ""); // Set the main image when product is found
      setLoading(false); // Stop loading once data is found
    }
  }, [id]);

  if (loading) {
    return <p className="text-center mt-20 text-lg text-gray-500">Loading product...</p>;
  }

  if (!product) {
    return (
      <p className="text-center mt-20 text-lg text-red-500">
        Product not found! Please go back to the homepage.
      </p>
    );
  }

  const handleImageClick = (imageSrc: string) => {
    setMainImage(imageSrc); // Change the main image when a thumbnail is clicked
  };

  const handleNextImage = () => {
    const currentIndex = product.additionalImages.indexOf(mainImage);
    const nextIndex = (currentIndex + 1) % product.additionalImages.length;
    setMainImage(product.additionalImages[nextIndex]);
  };

  const handlePrevImage = () => {
    const currentIndex = product.additionalImages.indexOf(mainImage);
    const prevIndex = (currentIndex - 1 + product.additionalImages.length) % product.additionalImages.length;
    setMainImage(product.additionalImages[prevIndex]);
  };

  return (
    <main className="bg-gray-50 py-8 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Product Details */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="relative w-full md:w-1/2">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-lg shadow-lg object-cover"
            />
            {/* Arrows to swipe left and right */}
            {product.additionalImages?.length > 1 && (
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                <button
                  className="text-teal-700 p-2 bg-white rounded-full shadow-md"
                  onClick={handlePrevImage}
                >
                  &#8592;
                </button>
              </div>
            )}
            {product.additionalImages?.length > 1 && (
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                <button
                  className="text-teal-700 p-2 bg-white rounded-full shadow-md"
                  onClick={handleNextImage}
                >
                  &#8594;
                </button>
              </div>
            )}
          </div>
          
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-teal-600 mb-6">{product.price}</p>

            {/* Size Selector */}
            <div className="mb-6">
              <p className="text-lg text-gray-600 mb-2">Available Sizes:</p>
              <div className="flex flex-wrap gap-2">
                {product.sizesAvailable.map((size: string) => (
                  <button
                    key={size}
                    className="border-2 border-teal-700 text-teal-700 py-2 px-6 rounded-[20px] hover:bg-teal-300 transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg shadow transition-colors">
              Buy Now
            </button>
          </div>
        </div>

        {/* Thumbnails of additional images */}
        {product.additionalImages && (
          <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
            {product.additionalImages.map((image: string, index: number) => (
              <img
                key={index}
                src={image}
                alt={`Additional image ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg cursor-pointer"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductView;
