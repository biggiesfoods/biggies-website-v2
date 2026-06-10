import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface IconButtonProps {
  id?: string;
  src?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  alt?: string;
  size?: number; // Size in pixels (e.g., 32, 48, 64)
}

const IconButton = ({
  id = "",
  src = "",
  href = "",
  onClick = () => {},
  className = "",
  alt = "icon",
  size = 32, // Defaulting to your original w-8 (32px)
}: IconButtonProps) => {
  // Calculate internal icon size (roughly 62.5% of container based on your 20px/32px ratio)
  const iconSize = Math.round(size * 0.625);

  return (
    <Link
      onClick={onClick}
      href={href}
      target={href === "" ? "" : "_blank"}
      style={{ width: size, height: size }}
      className={`group flex items-center justify-center rounded-full 
        transition-all duration-(--duration-animate) 
        hover:bg-slate-300 hover:dark:bg-slate-700 
        hover:shadow-sm hover:shadow-slate-300 hover:dark:shadow-slate-700 
        ${className}`}
    >
      <div
        className={twMerge(
          "bg-(--brand-color-1-l) dark:bg-(--brand-color-1-d)",
          "group-hover:bg-(--brand-color-1-l) dark:group-hover:bg-(--brand-color-1-d)",
          "transition-colors duration-(--duration-animate)",
        )}
        style={{
          width: iconSize,
          height: iconSize,
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          maskSize: "contain",
          WebkitMaskSize: "contain",
        }}
        aria-label={alt}
      />
    </Link>
  );
};

export default IconButton;
