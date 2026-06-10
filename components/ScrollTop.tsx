"use client";

import { useEffect } from "react";

export default function ScrollTop() {
  useEffect(() => {
    // Force the browser to reset scroll history behaviors
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Immediately jump to the top of the viewport
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render any UI
}
