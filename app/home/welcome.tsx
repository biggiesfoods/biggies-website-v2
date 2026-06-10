import Image from "next/image";

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="flex flex-col items-center justify-center p-4 text-center"
    >
      {/* 
         1. Container uses aspect-video (16/9) or a fixed aspect ratio.
         This prevents CLS because the height is calculated before the video loads.
      */}
      <div className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-900">
        {/* Logo Overlay - Simplified Z-index and centering */}
        <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
          <div className="w-1/2 md:w-1/3 transition-all duration-(--duration-animate)">
            <Image
              src="/assets/logo-name.svg"
              width={288}
              height={160}
              alt="Biggies Logo"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Brand Overlay Mask */}
        <div className="absolute inset-0 z-20 opacity-30 bg-(--brand-white) dark:bg-(--brand-black) transition-all" />

        {/* 
           2. Video Fix: 
           - 'object-cover' ensures it fills the aspect-ratio container without distorting.
           - 'muted' and 'playsInline' are required for autoPlay on macOS/iOS Safari.
        */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-10"
          poster="/assets/welcome/welcome.jpg" // 3. Improves LCP by showing an image while video buffers
        >
          <source src="/assets/welcome/welcome.m4v" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
