import Background from "../background/background";
import HeaderButton from "./header-button";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <Background className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-black" />
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="text-xl font-bold tracking-tighter">
          <div className="relative h-10 w-10 sm:hidden">
            <Image
              src="/assets/logo.png"
              width={40}
              height={40}
              alt="Biggies Logo"
              className="image-render-quality"
              priority
            />
          </div>
          <div className="relative h-10 w-18 hidden sm:flex items-center justify-center">
            <Image
              src="/assets/logo-name.svg"
              width={288}
              height={160}
              alt="Biggies Logo"
              priority
            />
          </div>
        </div>
        <nav className="flex items-center gap-3 sm:gap-6 text-sm font-medium">
          <HeaderButton href="#menu">Menu</HeaderButton>
          <HeaderButton href="#catering">Catering</HeaderButton>
          <HeaderButton href="#contact">Contact</HeaderButton>
        </nav>
        <div className="flex gap-6">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
