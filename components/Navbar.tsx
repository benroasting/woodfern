import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div className="image_container">
        <Image
          src="/woodfern_logo.png"
          alt="woodfern floral design"
          width={200}
          height={200}
        />
      </div>
      <div className="nav_links_container flex">
        <ul className="flex flex-row">
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
