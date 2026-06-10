"use client";

import Image from "next/image";

export default function MainBackground() {
  return (
    <div
      id="background"
      className="bg-(--brand-white) dark:bg-(--brand-black)
                  transition-colors duration-(--duration-animate) 
                  fixed top-0 left-0 w-screen h-screen z-[-1]"
    >
      <Image
        src="/assets/background/bg.jpg"
        fill
        alt="interior"
        className="object-cover opacity-6"
      />
    </div>
  );
}
