"use client";

import footerData from "@/app/jsons/footer.json";
import socialData from "@/app/jsons/socials.json";
import IconButton from "@/components/button/icon-button";
import TextLink, { linkUnderlineStyle } from "@/components/link/text-link";
import dynamic from "next/dynamic";
import Background from "@/components/background/background";

const MapWithNoSSR = dynamic(() => import("@/components/map/map"), {
  ssr: false,
  loading: () => <div style={{ height: "200px" }}>Loading Map...</div>,
});

export default function Footer() {
  return (
    <footer className="relative w-full content-center text-center">
      <Background defaultColors />

      <div className="max-w-6xl w-full mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Location & Contact */}
          <div className="space-y-4">
            <div className="text-sm space-y-1 opacity-90">
              <MapWithNoSSR />
            </div>
          </div>

          {/* Column 2: Socials */}
          <div className="flex flex-col items-center md:items-center space-y-4">
            <h1 className="text-xl">{footerData.name}</h1>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="flex items-center gap-2 transition-all duration-(--duration-animate)">
                {footerData.address.street}
              </p>
              <p className="flex items-center gap-2 transition-all duration-(--duration-animate)">
                {footerData.address.city} {footerData.address.zip}
              </p>
              <span className="flex items-center gap-2">
                <TextLink href="tel:9052129393" className={linkUnderlineStyle}>
                  <p>{footerData.phone_number}</p>
                </TextLink>
              </span>
              {footerData.email !== "" && (
                <p className="flex items-center gap-2">
                  <TextLink
                    href={"mailto:" + footerData.email}
                    className={linkUnderlineStyle}
                  >
                    {footerData.email}
                  </TextLink>
                </p>
              )}
            </div>
            <div className="flex flex-wrap gap-2 justify-start md:justify-end">
              {Object.entries(socialData).map(
                ([key, value]) =>
                  value.href !== "" && (
                    <div key={key}>
                      <IconButton src={value.src} href={value.href} alt={key} />
                    </div>
                  ),
              )}
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="w-full flex flex-col items-center space-y-4">
            <div>
              <h3 className="text-xl w-60">Hours</h3>
            </div>
            <div className="w-50 sm:w-60">
              <ul className="text-xs sm:text-sm space-y-2 ">
                <li
                  className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-1
                                transition-all duration-(--duration-animate)"
                >
                  <span>Mon - Thu</span>
                  <span className="font-medium">11:00 AM - 7:00 PM</span>
                </li>
                <li
                  className="flex justify-between border-b border-zinc-200 dark:border-zinc-800 pb-1
                                transition-all duration-(--duration-animate)"
                >
                  <span>Friday</span>
                  <span className="font-medium">11:00 AM - 8:00 PM</span>
                </li>
                <li
                  className="flex justify-between 
                                transition-all duration-(--duration-animate)"
                >
                  <span>Saturday</span>
                  <span className="font-medium">11:30 AM - 7:00 PM</span>
                </li>
                <li
                  className="text-red-500 text-xs font-bold pt-1 italic
              transition-all duration-(--duration-animate)"
                >
                  Closed Sundays
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-300 dark:border-zinc-700 text-center text-xs opacity-70 transition-all duration-(--duration-animate)">
          <p>
            © {new Date().getFullYear() + " "} {footerData.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
