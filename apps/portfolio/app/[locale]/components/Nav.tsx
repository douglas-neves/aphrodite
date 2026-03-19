"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Nav() {
  const t = useTranslations("nav");
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const sections = ["overview", "stack", "backend", "career", "education"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e] border-b-2 border-[#ff003c]/20">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        <span className="text-2xl font-black text-[#ff003c] tracking-tighter font-display">
          nevesDouglas
        </span>

        <div className="hidden md:flex items-center gap-8">
          {(["overview", "stack", "backend", "career", "education"] as const).map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className={`font-display font-black uppercase tracking-tighter transition-colors pb-1 ${
                activeSection === key
                  ? "text-[#ff003c] border-b-4 border-[#ff003c]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {t(key)}
            </a>
          ))}
        </div>

        <a
          href="https://www.linkedin.com/in/nevesdouglas/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ff003c] text-white px-6 py-2 font-display font-black uppercase tracking-wider hover:bg-[#00eefc] hover:text-black transition-all duration-75"
        >
          {t("hire")}
        </a>
      </div>
    </nav>
  );
}
