import React from "react";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="grid gap-3 grid-cols-3 grid-rows-4">
      <div className="overflow-hidden relative w-full h-60">
        <Image
          src="/services_trio_1.jpeg"
          alt="woodfern floral design"
          className="block max-w-full w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="overflow-hidden relative w-full h-60">
        <Image
          src="/services_trio_1.jpeg"
          alt="woodfern floral design"
          width={200}
          className="block max-w-full w-full h-full object-cover"
          height={200}
        />
      </div>
      <div className="overflow-hidden relative w-full h-60">
        <Image
          src="/services_trio_1.jpeg"
          alt="woodfern floral design"
          width={200}
          className="block max-w-full w-full h-full object-cover"
          height={200}
        />
      </div>
      <div className="overflow-hidden relative w-full h-60">
        <Image
          src="/services_trio_1.jpeg"
          alt="woodfern floral design"
          width={200}
          className="block max-w-full w-full h-full object-cover"
          height={200}
        />
      </div>
      <div className="overflow-hidden relative w-full h-60">
        <Image
          src="/services_trio_1.jpeg"
          alt="woodfern floral design"
          width={200}
          className="block max-w-full w-full h-full object-cover"
          height={200}
        />
      </div>
    </div>
  );
}
