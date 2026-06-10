import React from "react";
import { twMerge } from "tailwind-merge";

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  underline?: boolean;
}

export const linkUnderlineStyle = [
  "underline",
  "decoration-(--brand-color-1-l)/50",
  "dark:decoration-(--brand-color-1-d)/50",
  "hover:text-(--brand-color-1-l)",
  "dark:hover:text-(--brand-color-1-d)",
  "transition",
  "duration-(--duration-animate)"
].join(" ");

export default function TextLink({
  href,
  children,
  underline = false,
  className = "",
  ...props
}: TextLinkProps) {
  // Combine default styles with any custom classes passed in
  const combinedClasses = [
    "inline-flex gap-1",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={twMerge(combinedClasses, underline && linkUnderlineStyle)}
      {...props}
    >
        {children}
    </a>
  );
}
