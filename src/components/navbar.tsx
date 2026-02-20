"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      rootMargin: "-80px 0px -60% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleMobileClick = (href: string) => {
    setIsMobileOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-slate-800/50 bg-[#030712]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <a
          href="#"
          className="group text-lg font-semibold tracking-tight text-slate-100 transition-colors hover:text-white"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          victor.dev
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute inset-0 rounded-lg bg-slate-800/60"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#contato"
          className="hidden rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:border-accent/50 hover:bg-accent/20 md:inline-flex"
        >
          Entrar em contato
        </a>

        {/* Mobile Menu Button */}
        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-label={isMobileOpen ? "Fechar menu" : "Abrir menu"}
        >
          <div className="flex w-5 flex-col items-center gap-1.5">
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isMobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isMobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-all duration-300 ${
                isMobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 left-0 border-b border-slate-800/50 bg-[#030712]/95 backdrop-blur-xl md:hidden"
            >
              <ul className="flex flex-col px-6 py-4" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleMobileClick(link.href)}
                      className={`w-full rounded-lg px-4 py-3 text-left text-base font-medium transition-colors ${
                        activeSection === link.href
                          ? "bg-slate-800/50 text-white"
                          : "text-slate-400 hover:bg-slate-800/30 hover:text-slate-200"
                      }`}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li className="mt-2 border-t border-slate-800/50 pt-4">
                  <button
                    onClick={() => handleMobileClick("#contato")}
                    className="w-full rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-center text-base font-medium text-accent transition-all hover:bg-accent/20"
                  >
                    Entrar em contato
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
