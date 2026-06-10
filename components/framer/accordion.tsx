import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ReactNode, useRef } from "react";
import Background from "../background/background";

interface AccordionItemProps {
  id?: string;
  title: string;
  content: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function getDurationMs() {
  return 200;
  // const rootStyles = window.getComputedStyle(document.documentElement);
  // const durationStr = rootStyles.getPropertyValue("--duration-animate").trim();
  // let durationMs = parseFloat(durationStr) || 1000;
  // if (durationStr.endsWith("s") && !durationStr.endsWith("ms"))
  //   durationMs *= 1000;
  // return durationMs;
}

const Accordion = ({
  id,
  title,
  content,
  isOpen,
  onToggle,
}: AccordionItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative scroll-mt-12">
      {/* Border */}
      <Background className="border-b border-(--brand-color-1-l)/40 dark:border-(--brand-color-1-d)/40" />

      {/* Trigger Button */}
      <button
        className="flex w-full items-center justify-between py-4 text-left font-medium focus:outline-none"
        onClick={() => {
          onToggle();
          if (!isOpen && containerRef.current) {
            const timer = setTimeout(() => {
              if (containerRef.current) {
                containerRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }, getDurationMs() + 50);
            return () => clearTimeout(timer);
          }
        }}
        aria-expanded={isOpen}
      >
        <span>
          <h3 className="text-lg">{title}</h3>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: getDurationMs() / 1000, ease: "easeInOut" }}
          className="text-(--brand-color-1-l) dark:text-(--brand-color-1-d)"
        >
          <ChevronDown className="h-5 w-5 transition-colors duration-(--duration-animate)" />
        </motion.div>
      </button>

      {/* Animated Content Wrapper */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: getDurationMs() / 1000,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <div className="pb-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
