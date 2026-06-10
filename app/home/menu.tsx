"use client";

import Section from "@/components/section/section";
import Accordion from "@/components/framer/accordion";
import IconButton from "@/components/button/icon-button";
import TextLink from "@/components/link/text-link";

import menuData from "@/app/jsons/menu.json";
import { MenuSection } from "@/components/menu/category";

export default function Menu({
  openId,
  setOpenId,
}: {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  return (
    <Section id="menu" noBackground>
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl mb-4">Menu</h1>
        <p className="mx-auto max-w-80 mb-4 text-center">
          While we serve pork on premise, our chicken and beef are halal and
          prepared seperately from the pork. Ask us in person to see our halal
          certificates.
        </p>

        {/* Menu */}
        {Object.entries(menuData).map(([key, value], index) => {
          // 1. Format the data object cleanly
          const category = {
            title: key,
            content: <MenuSection title={key} items={value} />,
          };

          // 2. Return the Accordion component directly within the single loop
          return (
            <Accordion
              key={1000 + index}
              id={category.title}
              title={category.title.toUpperCase()}
              content={category.content}
              isOpen={openId === category.title}
              onToggle={() => setOpenId(openId === category.title ? null : category.title)}
            />
          );
        })}

        {/* Promos */}
        <p className="mx-auto max-w-80 text-center my-4">
          Like what you see? Order in person or online on{" "}
          <TextLink
            href="https://www.skipthedishes.com/biggies-dixie-road"
            underline
          >
            Skip
          </TextLink>
          ,{" "}
          <TextLink href="https://www.doordash.com/store/33961549" underline>
            Doordash
          </TextLink>
          , and{" "}
          <TextLink
            href="https://www.ubereats.com/ca/store/biggies/LYtfmgsRTK6x6VoPvfcjbg"
            underline
          >
            Uber Eats
          </TextLink>
          .
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-2">
          <IconButton
            src="/assets/icons/uber-eats.svg"
            href="https://www.ubereats.com/ca/store/biggies/LYtfmgsRTK6x6VoPvfcjbg"
            alt="Uber Eats"
            size={48}
          />
          <IconButton
            src="/assets/icons/skip-the-dishes.svg"
            href="https://www.skipthedishes.com/biggies-dixie-road"
            alt="Skip"
            size={48}
          />
          <IconButton
            src="/assets/icons/doordash.svg"
            href="https://www.doordash.com/store/33961549"
            alt="Doordash"
            size={48}
          />
        </div>
      </div>
    </Section>
  );
}
