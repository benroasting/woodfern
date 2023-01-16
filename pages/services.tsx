import React from "react";
import Image from "next/image";

export default function Services() {
  return (
    <div>
      <h2 className="text-xs uppercase mb-8">
        We are a wedding florist serving the Nashville area + all of middle
        Tennessee + anywhere else your wedding takes us!
      </h2>
      <div className="m-auto">
        <Image
          src="/services_arrangement.jpeg"
          alt="woodfern floral arrangement"
          width={600}
          height={350}
        />
      </div>
      <p className="">We </p>
    </div>
  );
}
