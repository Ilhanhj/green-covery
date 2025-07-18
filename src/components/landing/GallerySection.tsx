"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SteamRevealImage } from "./SteamRevealImage";

import coffeProduct5 from "@/public/images/products/coffe-product-5.jpg";
import coffeProduct6 from "@/public/images/products/coffe-product-6.jpg";
import coffeProduct7 from "@/public/images/products/coffe-product-7.jpg";

const galleryImages = [
  {
    src: coffeProduct7,
    alt: "Green Bean Coffee Product 1",
    className: "col-span-2 row-span-2",
    hint: "coffee product lifestyle",
  },
  {
    src: coffeProduct5,
    alt: "Green Bean Coffee Product 2",
    className: "col-span-1 row-span-1",
    hint: "coffee beans",
  },
  {
    src: coffeProduct6,
    alt: "Green Bean Coffee Product 3",
    className: "col-span-1 row-span-1",
    hint: "coffee ingredients",
  },
];

export function GallerySection() {
  const variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="gallery" className="py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">Galeri Produk</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">Lihat lebih dekat bagaimana GREEN BEAN COFFEE dapat menjadi bagian dari gaya hidup sehat Anda.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 md:gap-6 h-[600px] md:h-[700px]">
          {galleryImages.map((image, index) => (
            <motion.div key={index} className={cn("relative overflow-hidden rounded-xl shadow-lg group", image.className)} variants={variants} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <SteamRevealImage src={image.src} alt={image.alt} data-ai-hint={image.hint} imgClassName="object-cover w-full h-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
