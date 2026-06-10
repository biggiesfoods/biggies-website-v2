import { ReactNode } from "react";

export default function PriceTag({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-full px-3 py-1 text-sm font-semibold 
                    bg-orange-700 text-orange-100
                    dark:bg-orange-100 dark:text-orange-700 
                      transition-colors duration-(--duration-animate)"
    >
      {children}
    </div>
  );
}
