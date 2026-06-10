"use client";

import Marquee2 from "@/components/marqee/marqee";
import Section from "@/components/section/section";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import LazyLoad from "@/components/lazy-load/lazy-load";

import menuData from "@/app/jsons/menu.json";
import { formatPrice } from "@/components/menu/category";
import PriceTag from "@/components/menu/price-tag";
import { getDurationMs } from "@/components/framer/accordion";

export function menuItems(onClick: () => void) {
  return menuData.sandwiches.map((sandwich) => (
    <button
      key={sandwich.item}
      onClick={() => {
        onClick();

        setTimeout(() => {
          const targetElement = document.getElementById(sandwich.item);

          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, getDurationMs() + 50);
      }}
    >
      <div className="group/menu-display overflow-hidden relative w-50 sm:w-75 h-50 sm:h-75 rounded-xl mx-4 transform-gpu">
        <Image
          src={`/assets/menu/sandwiches/${sandwich.image}.jpg`}
          alt={sandwich.item || "Sandwich"}
          fill
          // This tells Next.js exactly how wide the image will be on screen
          sizes="(max-width: 640px) 200px, 300px"
          className={twMerge(
            "object-cover transform-gpu will-change-transform",
            "transition-transform duration-(--duration-animate) ease-out",
            "group-hover/menu-display:scale-120",
          )}
          priority
        />

        <div
          className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
        >
          <div
            className="absolute inset-0
                bg-linear-to-t from-0% to-20%
                dark:from-(--brand-black) dark:to-transparent
                from-(--brand-white) to-transparent
                transition-colors duration-(--duration-animate)"
          />
        </div>

        <div
          className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
        >
          <div
            className="absolute inset-0
                bg-linear-to-b from-0% to-20%
                dark:from-(--brand-black) dark:to-transparent
                from-(--brand-white) to-transparent
                transition-colors duration-(--duration-animate)"
          />
        </div>

        <div className="absolute w-full h-full p-2 flex flex-col items-end justify-between">
          <div
            className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
          >
            <h3 className="text-lg sm:text-xl drop-shadow-md text-end">
              {sandwich.item}
            </h3>
          </div>
          <div
            className="
          transition-opacity duration-(--duration-animate)
          opacity-100 group-hover/menu-display:opacity-0 group-active/menu-display:opacity-0"
          >
            <PriceTag>${formatPrice(sandwich.price)}</PriceTag>
          </div>
        </div>
      </div>
    </button>
  ));
}

export default function Showcase({
  setOpenId,
}: {
  setOpenId: (id: string | null) => void;
}) {
  return (
    <Section>
      <Marquee2
        autoFill
        pauseOnHover
        className="w-full transition-colors duration-(--duration-animate)"
      >
        {menuItems(() => {
          setOpenId("sandwiches");
        })}
      </Marquee2>
    </Section>
  );
}
