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
      <p className="">
        We offer a couple of different service options, but no matter which one
        is the best fit for you--our top priorities are to make you feel heard,
        known + understood and to make the flower planning process totally
        stress-free!
      </p>
      <div className="services_content">
        <h4>Full Service</h4>
        <p>
          Full-service floral design for weddings is our bread and butter. Full
          service means we take care of every floral detail for you! This
          includes a beautiful, customized design plan + adjustments if needed;
          unlimited communication during our business hours; hardgood (candles,
          vases, etc.) rentals, travel, delivery, set-up/on-site design, + tear
          down at the end of your event. Packages may include bouquets,
          corsages, boutonnieres, ceremony focal point, centerpieces,
          installations, and other decor. Pricing starts at $3500.
        </p>
        <h4>Elopements + Intimate Events</h4>
        <p>
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
      <div className="services_options">
        <h4>
          We&apos;ll help you decide which option is the best fit for you!
          Here&apos;s what the next steps look like:
        </h4>
        <ol>
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
      <div className="mb-9 text-xs uppercase">
        <Link
          className="border-2 border-black rounded-full p-3"
          href="/contact"
        >
          Let&apos;s Bring Your Vision To Life!
        </Link>
      </div>
      <div>
        <h2 className="text-terracota font-sans font-thin uppercase">
          MY BIGGEST GOALS AS WE WORK TOGETHER ARE FOR YOU FEEL HEARD +
          UNDERSTOOD AND TO BRING A SENSE OF PEACE + CALM TO THE ENTIRE PROCESS.
        </h2>
      </div>
    </div>
  );
}
