import React from "react";
import Image from "next/image";
import Link from "next/link";

const servicesImages = [
  {
    src: "/../public/services_trio_1.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/services_trio_2.jpeg",
    alt: "woodfern floral design",
  },
  {
    src: "/../public/services_trio_3.jpeg",
    alt: "woodfern floral design",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col justify-center w-1/2 m-auto">
      <h2 className="text-sm uppercase mb-8 text-center">
        We are a wedding florist serving the Nashville area + all of middle
        Tennessee + anywhere else your wedding takes us!
      </h2>
      <div className="m-auto mb-9">
        <Image
          src="/services_arrangement.jpeg"
          alt="woodfern floral arrangement"
          width={600}
          height={350}
        />
      </div>
      <p className="text-sm text-center leading-6 uppercase mb-9">
        We offer a couple of different service options, but no matter which one
        is the best fit for you--our top priorities are to make you feel heard,
        known + understood and to make the flower planning process totally
        stress-free!
      </p>
      <div className="services_content">
        <h4 className="uppercase text-sm">Full Service</h4>
        <p className="text-sm font-sans font-light leading-6 text-slate-500 mb-9">
          Full-service floral design for weddings is our bread and butter. Full
          service means we take care of every floral detail for you! This
          includes a beautiful, customized design plan + adjustments if needed;
          unlimited communication during our business hours; hardgood (candles,
          vases, etc.) rentals, travel, delivery, set-up/on-site design, + tear
          down at the end of your event. Packages may include bouquets,
          corsages, boutonnieres, ceremony focal point, centerpieces,
          installations, and other decor. Pricing starts at $3500.
        </p>
        <h4 className="uppercase text-sm">Elopements + Intimate Events</h4>
        <p className="text-sm font-sans font-light leading-6 text-slate-500">
          We LOVE designing for elopements and more intimate events. Generally,
          this service will focus on personal items –bouquets + boutonnieres +
          corsages. We can also add in additional items such as centerpieces and
          installations based on your needs. Design and delivery included.
          Pricing starting at $500.
        </p>
      </div>
      <div className="grid gap-3 grid-cols-3 grid-rows-1 p-9">
        {servicesImages.map((image) => (
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
      <div className="services_options mb-9">
        <h4 className="text-sm text-center leading-6 uppercase mb-6">
          We&apos;ll help you decide which option is the best fit for you!
          Here&apos;s what the next steps look like:
        </h4>
        <ol className="text-sm font-sans font-light leading-6 text-slate-500">
          <li>1. Fill out our contact form.</li>
          <li>
            2. We&apos;ll schedule a complimentary 30 minute call to get to know
            you + your vision.
          </li>
          <li>
            3. After our meeting, we&apos;ll put together a detailed design
            proposal to bring your vision to life and schedule a meeting to
            discuss.
          </li>
          <li>4. Book your flowers!</li>
          <li>
            5. We&apos;ll stay in touch and can continue to tweak your design
            plan as needed up until 30 days prior to your date.
          </li>
          <li>
            6. We&apos;ll have a final consultation to confirm all of the last
            minute details.
          </li>
          <li>
            7. Once your day is finally here, our team will bring your vision to
            life and you won&apos;t have to worry about a thing!
          </li>
        </ol>
      </div>
      <div className="flex justify-center mb-9 text-xs uppercase">
        <Link
          className="border-2 border-black rounded-full p-3 tracking-widest font-sans text-xs uppercase"
          href="/contact"
        >
          Let&apos;s Get Started!
        </Link>
      </div>
      <div>
        <h2 className="text-terracota font-sans font-thin uppercase text-center tracking-widest">
          MY BIGGEST GOALS AS WE WORK TOGETHER ARE FOR YOU FEEL HEARD +
          UNDERSTOOD AND TO BRING A SENSE OF PEACE + CALM TO THE ENTIRE PROCESS.
        </h2>
      </div>
    </div>
  );
}
