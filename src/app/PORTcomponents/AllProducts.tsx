const products = [
  {
    id: 1,
    name: "Geometric Circles T-Shirt",
    price: "$20.00",
    description: "A trendy t-shirt featuring geometric circle designs.",
    imgSrc:
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1080&q=75",
    sizesAvailable: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    additionalImages: [
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-1.png%3Fv%3D1689798965&w=1080&q=75",
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Ft-shirt-2.png%3Fv%3D1689798965&w=1080&q=75",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzWZCiDNbrdfuK6Lmoq2R43XHfj2YP-JOOkQ&s"
    ]
  },
  {
    id: 2,
    name: "Abstract Art T-Shirt",
    price: "$22.00",
    description: "A unique t-shirt with abstract art patterns.",
    imgSrc:
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-1.png%3Fv%3D1690003482&w=1080&q=75",
    sizesAvailable: ["S", "M", "L"],
    additionalImages: [
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-2.png%3Fv%3D1690003482&w=1080&q=75",
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-3.png%3Fv%3D1690003482&w=1080&q=75"
    ]
  },
  {
    id: 3,
    name: "Retro Stripes Hoodie",
    price: "$35.00",
    description: "A stylish hoodie with vintage stripes design.",
    imgSrc:
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-2.png%3Fv%3D1690003482&w=1080&q=75",
    sizesAvailable: ["M", "L", "XL"],
    additionalImages: [
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-4.png%3Fv%3D1690003482&w=1080&q=75",
      "https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0754%2F3727%2F7491%2Ffiles%2Fhoodie-5.png%3Fv%3D1690003482&w=1080&q=75"
    ]
  },
  {
    id: 4,
    name: "Mountain Explorer Jacket",
    price: "$65.00",
    description: "A durable jacket made for outdoor adventures.",
    imgSrc:
      "https://img.drz.lazcdn.com/static/pk/p/2a12c187b33b70caeff7fbdea9536846.jpg_960x960q80.jpg_.webp",
    sizesAvailable: ["M", "L", "XL"],
    additionalImages: [
      "https://img.drz.lazcdn.com/static/pk/p/2a12c187b33b70caeff7fbdea9536846-2.jpg_960x960q80.jpg_.webp",
      "https://img.drz.lazcdn.com/static/pk/p/2a12c187b33b70caeff7fbdea9536846-3.jpg_960x960q80.jpg_.webp"
    ]
  },
  {
    id: 5,
    name: "Cool Cats Sweatshirt",
    price: "$28.00",
    description: "A cozy sweatshirt featuring cute cat illustrations.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbS127vg2Ndo1X2n7PCe_83Ae-Fcf2VcFLoQ&s",
    sizesAvailable: ["S", "M", "L", "XL"],
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWotmlr5b0g31E-d90OdXFCwL5y1MpkcwvnEw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg-Y_Ll8bfY_kpQ8nxjH0hP6JkW7Onj4WyqUo&s"
    ]
  },
  {
    id: 6,
    name: "Vintage Denim Jacket",
    price: "$50.00",
    description: "A classic denim jacket with a worn-in, vintage look.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2WI0wolj-1sK7QcDVkWhJwv5eDptYq1V3vA&s",
    sizesAvailable: ["M", "L"],
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYjsHZ4hn5tqtn0TAH3Jz1ifGsQmDAhSwtK0&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UpMi3hTOvSBYsKQ_4cg9jU-jjrIm7IFb6Tk&s"
    ]
  },
  {
    id: 7,
    name: "Space Explorer Cap",
    price: "$15.00",
    description: "A cap with a space exploration theme.",
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkN2WuXOPjBa6sCzYW1pqfAE1XQC0W8Q2Oqg&s",
    sizesAvailable: ["One Size"],
    additionalImages: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vppFj69tyfj6m8VbyBiyJbt0DqZKss34zO4&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwpOLh5XbUE6V9hzRrC9V24qp9A35C1ll3FA&s"
    ]
  },
  {
    id: 8,
    name: "Floral Summer Dress",
    price: "$40.00",
    description: "A light and airy floral dress perfect for the summer.",
    imgSrc:
      "https://baraq.pk/media/products/images/BuyBest/padded.jpg",
    sizesAvailable: ["XS", "S", "M", "L"],
    additionalImages: [
      "https://baraq.pk/media/products/images/BuyBest/padded-2.jpg",
      "https://baraq.pk/media/products/images/BuyBest/padded-3.jpg"
    ]
  }
];

export default products;
