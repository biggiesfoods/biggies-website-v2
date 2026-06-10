"use client";

import { ComponentProps, useState } from "react";
import Marquee from "react-fast-marquee";
import { twMerge } from "tailwind-merge";

export default function Marquee2({
  children,
  ...rest
}: ComponentProps<typeof Marquee>) {
  const [isPaused, setIsPaused] = useState(false);

  const overlayBase = twMerge(
    "absolute top-0 bottom-0 max-w-10 w-1/12 z-10 pointer-events-none",
    "transition-colors duration-(--duration-animate)",
    "from-(--brand-white) dark:from-(--brand-black) to-transparent"
  )

  return (
    <div
      // Handle Mobile Touch Events
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      className="relative w-full"
    >
      <div className={twMerge(overlayBase, "left-0 bg-linear-to-r")} />
      <div className={twMerge(overlayBase, "right-0 bg-linear-to-l")} />
      <Marquee
        // 2. Spread incoming props FIRST so your internal controls override them if necessary
        {...rest}
        // 3. Apply your custom play/pause logic safely
        play={!isPaused && (rest.play !== undefined ? rest.play : true)}
        pauseOnHover={rest.pauseOnHover ?? true}
        pauseOnClick={rest.pauseOnClick ?? true}
      >
        {children}
      </Marquee>
    </div>
  );
}
