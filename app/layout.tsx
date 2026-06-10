import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Bricolage_Grotesque, Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import { twMerge } from "tailwind-merge";
// import ScrollTop from "@/components/ScrollTop";

const p = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-p",
  weight: ["400", "500", "600", "700"],
});

const header1 = localFont({
  src: "../public/fonts/AstounderSquaredBB.ttf", // Path to your font file
  variable: "--font-header-1", // Define a CSS variable name
});

const header = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-header",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Biggies - Mississauga, ON",
  // Char count must be less than 120 for mobile users.
  description: "Biggies Gourmet Foods Mississauga - Sandwiches, fusion food, and custom catering. Order now on our online menu!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={twMerge(
        "h-full",
        "antialiased",
        p.variable,
        header.variable,
        header1.variable,
        "font-sans",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          storageKey={undefined}
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          {/* {process.env.NODE_ENV === "development" && (
            <script
              src="https://unpkg.com/react-scan/dist/auto.global.js"
              crossOrigin="anonymous"
            />
          )} */}
          {/* <ScrollTop /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
