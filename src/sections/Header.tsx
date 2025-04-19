"use client";

import { useEffect, useState } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const sections = ["accueil", "projets", "about", "contact"];
    
    const observerOptions = {
      rootMargin: "-100px 0px -100px 0px",
      threshold: 0.3
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach(sectionId => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a 
          href="#accueil" 
          className={`nav-item ${activeSection === "accueil" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Accueil
        </a>
        <a 
          href="#projets" 
          className={`nav-item ${activeSection === "projets" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Projets
        </a>
        <a 
          href="#about" 
          className={`nav-item ${activeSection === "about" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          A propos
        </a>
        <a 
          href="#contact" 
          className={`nav-item ${activeSection === "contact" ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" : ""}`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

