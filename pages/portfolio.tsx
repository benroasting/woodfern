import React from "react";
import Image from "next/image";
import Link from "next/link";

const topImages = [
  {
    src: "/../public/portfolio/portfolio_arrangement_1.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_bridal_bouquet_1.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_3.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_tree_installation.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_bridal_bouquet_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_4.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_floor_installation.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_5.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers_3.jpeg",
    alt: "woodfern floral design",
  },
];

const bottomImages = [
  {
    src: "/../public/portfolio/portfolio_arrangement_1.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_bridal_bouquet_1.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_3.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_tree_installation.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_bridal_bouquet_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_4.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_floor_installation.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_arrangement_5.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/portfolio/portfolio_closeup_flowers_3.jpeg",
    alt: "woodfern floral design",
  },
];

export default function Portfolio() {
  return (
    <div>
      <div className="grid gap-3 grid-cols-3 grid-rows-4 p-9">
        {topImages.map((image) => (
          <div key={image.src} className="overflow-hidden relative w-82 h-60">
            <Image
              src={image.src}
              alt={image.alt}
              className="block max-w-full w-full h-full object-cover"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="border-2 border-black rounded-full p-3 tracking-widest font-sans text-xs uppercase"
          href="/contact"
        >
          Let&apos;s Bring Your Vision To Life!
        </Link>
      </div>
      <div className="grid gap-3 grid-cols-3 grid-rows-4 p-9">
        {bottomImages.map((image) => (
          <div key={image.src} className="overflow-hidden relative w-82 h-60">
            <Image
              src={image.src}
              alt={image.alt}
              className="block max-w-full w-full h-full object-cover"
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mb-9">
        <Link
          className="border-2 border-black rounded-full tracking-widest p-3  font-sans text-xs uppercase"
          href="/contact"
        >
          Get A Quote
        </Link>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-terracota font-sans font-thin uppercase">
          Flowers Inspired By Nature + Intentionally Designed To Tell Your Story
        </h2>
        <h2 className="text-xs uppercase mb-8">
          Nashville + Middle Tennessee Wedding Florist
        </h2>
      </div>
    </div>
  );
}
