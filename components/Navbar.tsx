import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex flex-col justify-center items-center mb-20">
      <div className="image_container m-auto p-6">
        <Image
          src="/woodfern_logo.png"
          alt="woodfern floral design"
          width={200}
          height={200}
        />
      </div>
      <div className="nav_links_container flex">
        <ul className="flex">
          <li className="mx-9 px-2 text-terracota font-sans font-thin uppercase">
            <Link href="/services">Services</Link>
          </li>
          <li className="mx-9 px-2 text-terracota font-sans font-thin uppercase">
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className="mx-9 px-2 text-terracota font-sans font-thin uppercase">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="mx-9 px-2 text-terracota font-sans font-thin uppercase">
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
