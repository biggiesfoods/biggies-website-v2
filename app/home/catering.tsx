"use client";

import Section from "@/components/section/section";
import Accordion from "@/components/framer/accordion";
import CateringForm from "@/components/form/catering";

import cateringData from "@/app/jsons/catering.json";
import { MenuSection } from "@/components/menu/category";

export default function Catering({
  openId,
  setOpenId,
}: {
  openId: string | null;
  setOpenId: (id: string | null) => void;
}) {
  const categories = [
    {
      title: "Menu",
      content: <MenuSection title={"catering"} items={cateringData}/>},
    {
      title: "Custom",
      content: <CateringForm />,
    },
  ];

  return (
    <Section id="catering" noBackground>
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-2xl sm:text-4xl mb-4">Catering</h1>
        <p className="mx-auto max-w-80 mb-4 text-center">
          Want to feed a large crowd? We offer catering! Looking for something
          off the menu? We accept custom requests!
        </p>
        {categories.map((category, index) => (
          <Accordion
            key={index}
            id={category.title}
            title={category.title.toUpperCase()}
            content={category.content}
            isOpen={openId === category.title}
            onToggle={() => setOpenId(openId === category.title ? null : category.title)}
          />
        ))}
      </div>
    </Section>
  );
}
