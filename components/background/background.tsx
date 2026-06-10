import { twMerge } from "tailwind-merge";

export default function Background({
  className = "",
  defaultColors = false,
  children = null,
}: {
  className?: string;
  defaultColors?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={twMerge(
        "-z-1",
        "absolute inset-0 transition-colors duration-(--duration-animate)",
        defaultColors ? "bg-(--brand-white) dark:bg-(--brand-black)" : "",
        className,
      )}
    >
      {children}
    </div>
  );
}
