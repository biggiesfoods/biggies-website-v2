"use client"

import MainBackground from "@/components/background/main-bg";
import Header from "@/components/header/header";
import Welcome from "./home/welcome";
import About from "./home/about";
import Showcase from "./home/showcase";
import Menu from "./home/menu";
import Catering from "./home/catering";
import Reviews from "./home/reviews";
import Contact from "@/components/form/contact";
import Footer from "@/components/footer/footer";
import { useState } from "react";
import Promos from "./home/promos";

export default function Home() {
  const [openId, setOpenId] = useState<string | null>(null);
  
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <MainBackground />
      <Header />
      <Promos />
      <Welcome />
      <About />
      <Showcase setOpenId={setOpenId}/>
      <Menu openId={openId} setOpenId={setOpenId}/>
      <Catering openId={openId} setOpenId={setOpenId}/>
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}
