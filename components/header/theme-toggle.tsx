"use client";

import { SVGProps } from "react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function IoSunny(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="#000000"
      stroke="currentColor"
      strokeWidth="0"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44zM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45zM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56zM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"></path>
    </svg>
  );
}

function IoMoon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="#ffffff"
      stroke="currentColor"
      strokeWidth="0"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z"></path>
    </svg>
  );
}

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    (() => {
      setMounted(true);
    })();
  }, []);

  if (!mounted) return <div className="h-8 w-8 rounded-full" aria-hidden />;

  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <button
      onClick={() => {
        setTheme(
          theme === "light" || (theme === "system" && !isDarkMode)
            ? "dark"
            : "light",
        );
      }}
      className="relative h-8 w-8 rounded-full flex justify-center items-center
                  hover:bg-slate-300 hover:dark:bg-slate-700 
                  hover:shadow-sm hover:shadow-slate-300 hover:dark:shadow-slate-700 
                  transition duration-(--duration-animate)"
    >
      <IoSunny className="absolute h-5 w-5 rotate-0 scale-100 transition-all duration-(--duration-animate) dark:-rotate-90 dark:scale-0" />
      <IoMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-(--duration-animate) dark:rotate-0 dark:scale-100" />
    </button>
  );
}
