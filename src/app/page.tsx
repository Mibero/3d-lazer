"use client";

import { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Prices from "@/components/Prices";
import AvitoReviews from "@/components/AvitoReviews";
import Gallery from "@/components/Gallery";
import Calculator from "@/components/Calculator";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Home() {
  const [formOpen, setFormOpen] = useState(false);
  const calcRef = useRef<HTMLDivElement>(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToCalc = () => {
    calcRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onOpenForm={() => setFormOpen(true)} />
      <main>
        <Hero onCalcClick={scrollToCalc} />
        <Marquee />
        <Services onOpenForm={() => setFormOpen(true)} />
        <HowWeWork />
        <Prices onOpenForm={() => setFormOpen(true)} />
        <AvitoReviews />
        <Gallery onOpenForm={() => setFormOpen(true)} />
        <div ref={calcRef}>
          <Calculator onOpenForm={() => setFormOpen(true)} />
        </div>
        <ContactInfo />
      </main>
      <Footer />
      <ContactForm isOpen={formOpen} onClose={() => setFormOpen(false)} />
    </>
  );
}
