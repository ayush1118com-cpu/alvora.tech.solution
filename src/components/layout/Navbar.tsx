"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { companyData } from "@/data/company";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Why Alvora", href: "#why-us" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Digital Marketing", href: "#digital-marketing" },
  { label: "Contact", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks
        .map((link) => link.href.substring(1))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top micro bar for phone / contact notice */}
      <div className="bg-[#123B8A] text-white text-[11px] py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-blue-200">
              {companyData.tagline}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyData.phones[0].replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
            >
              <Phone className="w-3 h-3 text-[#38A5FF]" />
              <span>{companyData.phones[0]}</span>
            </a>
            <span className="text-blue-300/40">|</span>
            <a
              href={`mailto:${companyData.email}`}
              className="hover:text-blue-200 transition-colors"
            >
              {companyData.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200/80"
            : "bg-white py-3.5 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-[#1677E8]"
            aria-label="Alvora Tech Solution Home"
          >
            <div className="relative h-11 w-auto max-w-[170px] sm:max-w-[200px] flex items-center">
              <Image
                src="/logo/alvora-logo-nav.png"
                alt="Alvora Tech Solution Logo"
                width={200}
                height={52}
                priority
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-slate-700"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const target = link.href.substring(1);
              const isActive = activeSection === target;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg transition-all duration-150 ${
                    isActive
                      ? "text-[#123B8A] bg-[#1677E8]/10 font-bold"
                      : "hover:text-[#123B8A] hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#123B8A] hover:bg-[#0C2860] text-white text-xs font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-[#123B8A] hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#1677E8] cursor-pointer"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-down / Full Screen Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs xl:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <Image
                  src="/logo/alvora-logo-nav.png"
                  alt="Alvora Tech Solution"
                  width={150}
                  height={38}
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-slate-500 hover:bg-slate-100 cursor-pointer"
                  aria-label="Close navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const target = link.href.substring(1);
                  const isActive = activeSection === target;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                        isActive
                          ? "bg-[#1677E8]/10 text-[#123B8A] font-bold"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#123B8A]"
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#1677E8]" />}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#123B8A] text-white font-bold text-sm shadow-sm hover:bg-[#0C2860] transition-colors"
              >
                <span>Start Project Inquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400 block mb-1">Direct Phone Support</span>
                <a
                  href={`tel:${companyData.phones[0].replace(/\s+/g, "")}`}
                  className="text-xs font-bold text-[#1677E8] hover:underline"
                >
                  {companyData.phones[0]}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
