"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/70 shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <h1
          className="text-lg font-semibold cursor-pointer text-gray-800 dark:text-white"
          onClick={() => scrollToSection("hero")}
        >
          Kiarash Naghavi Khanghah
        </h1>

        <div className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200 text-sm">
          {["About", "Research", "Publications", "Awards", "Skills", "Leadership", "Contact"].map(
            (section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section.toLowerCase())}
                className="hover:text-blue-600 transition-colors"
              >
                {section}
              </button>
            )
          )}
        </div>

        <button
          onClick={toggleDarkMode}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}
