"use client";

import reviewData from "@/app/jsons/reviews.json";
import LazyLoad from "@/components/lazy-load/lazy-load";
import TextLink from "@/components/link/text-link";
import Marquee2 from "@/components/marqee/marqee";
import Section from "@/components/section/section";

const myItems = reviewData.map((review) => (
  <div
    key={review.user}
    className="flex h-70 w-full max-w-xs flex-col items-center justify-center px-6 text-center sm:max-w-xl"
  >
    {/* User Branding */}
    <TextLink className="text-xl font-bold" href={review.url} underline>
      {review.user}
    </TextLink>

    {/* Accessible 5-Star Rating */}
    <div
      className="mb-4 mt-2 flex items-center gap-0.5 text-yellow-400 drop-shadow-sm"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-xl" aria-hidden="true">
          ★
        </span>
      ))}
    </div>

    {/* The Blockquote */}
    <blockquote className="group relative w-full">
      {/* Decorative Top Quote */}
      <span
        className="transition-colors duration-(--duration-animate) absolute -left-2 -top-4 select-none font-serif text-4xl text-slate-500 dark:text-slate-400"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="relative z-10 px-4 text-xs italic leading-relaxed text-slate-800 line-clamp-6 dark:text-slate-200 sm:text-sm">
        {review.comment}
      </p>

      {/* Decorative Bottom Quote */}
      <span
        className="transition-colors duration-(--duration-animate) absolute -right-2 -bottom-6 select-none font-serif text-4xl text-slate-500 dark:text-slate-400"
        aria-hidden="true"
      >
        &rdquo;
      </span>
    </blockquote>
  </div>
));

export default function Reviews() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Marquee2
          pauseOnHover
          className="w-full transition-colors duration-(--duration-animate)"
        >
          {myItems}
        </Marquee2>
      </div>
    </Section>
  );
}
