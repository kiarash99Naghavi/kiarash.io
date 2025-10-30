"use client";
import { useState, useEffect } from "react";

if (typeof window !== "undefined") {
  // Prevent mismatch between server-render and client-render
  if (
    localStorage.getItem("theme") === "dark" ||
    (!localStorage.getItem("theme") &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme based on saved preference or system setting
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (savedMode === "dark" || (!savedMode && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Smooth scroll to a section by ID
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1
          className="text-lg font-semibold cursor-pointer text-gray-800 dark:text-white"
          onClick={() => scrollToSection("hero")}
        >
          Kiarash Naghavi Khanghah
        </h1>

        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 text-sm">
          {[
            "About",
            "Research",
            "Publications",
            "Awards",
            "Skills",
            "Leadership",
            "Contact",
          ].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section.toLowerCase())}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {section}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
