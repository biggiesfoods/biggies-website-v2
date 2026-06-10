import { twMerge } from "tailwind-merge";
import Background from "../background/background";
import FadeIn from "../framer/fade-in";
import LazyLoad from "../lazy-load/lazy-load";

interface SectionProps extends React.ComponentPropsWithoutRef<"section"> {
  noBackground?: boolean;
  lazy?: boolean;
}

export default function Section({
  id,
  children,
  noBackground = false,
  lazy = false,
  className,
  ...props
}: SectionProps) {
  const ret = (
    <section id={id} className={twMerge(className, "scroll-mt-12")} {...props}>
      {!noBackground && <Background defaultColors />}
      <FadeIn>{children}</FadeIn>
    </section>
  );
  if (lazy === true) return <LazyLoad>{ret}</LazyLoad>;
  return ret;
}
