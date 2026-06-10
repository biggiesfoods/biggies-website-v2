import Section from "@/components/section/section";
import Image from "next/image";
export default function About() {
  return (
    <Section id="about" noBackground>
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8 sm:flex sm:items-center">
        <div className="sm:max-w-1/2 flex justify-center">
          <Image
            src="/assets/logo.png"
            width={400}
            height={400}
            alt="Biggies Logo"
            priority
          />
        </div>
        <div className="sm:max-w-1/2">
          <h1 className="text-2xl sm:text-4xl mb-4">
            About Us
          </h1>
          <p>
            At Biggies, we offer big sandwiches, and bigger plates of fusion
            food. If that&apos;s not enough, we offer Biggies custom catering.
            Everything on our menu is made to satisfy.
          </p>
        </div>
      </div>
    </Section>
  );
}
