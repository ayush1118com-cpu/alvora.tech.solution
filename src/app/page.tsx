import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Team } from "@/components/sections/Team";
import { Portfolio } from "@/components/sections/Portfolio";
import { DigitalMarketing } from "@/components/sections/DigitalMarketing";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2 — Hero */}
        <Hero />

        {/* Section 3 — About Us */}
        <About />

        {/* Section 4 — Our Services */}
        <Services />

        {/* Section 5 — Our Products (Restaurant POS & KDS) */}
        <Products />

        {/* Section 6 — Why Choose Alvora */}
        <WhyChooseUs />

        {/* Section 7 — Our Team */}
        <Team />

        {/* Section 8 — Portfolio */}
        <Portfolio />

        {/* Section 9 — Digital Marketing (Artful Creation) */}
        <DigitalMarketing />

        {/* Section 10 — Contact / Lead Generation */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
