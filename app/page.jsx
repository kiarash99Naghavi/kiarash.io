"use client";
import { useState } from "react";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-gray-900">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold mb-4">Kiarash Naghavi Khanghah</h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Researcher in AI-Driven Manufacturing and Design
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed">
          I’m a Ph.D. candidate at the University of Connecticut exploring the intersection
          of large language models, computational design, and advanced manufacturing.
        </p>
      </section>

      {/* Research */}
      <section id="research" className="py-20 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold mb-8 text-center">Research</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold mb-2">
              RAG-Iterative Modeling of Manufacturing Processes
            </h4>
            <p className="text-gray-600">
              Built a retrieval-augmented iterative framework achieving about 35–40 % higher extrapolative
              accuracy than conventional ML across machining, deformation, and additive processes.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold mb-2">
              Physics-Aware Machine Learning with LLMs
            </h4>
            <p className="text-gray-600">
              Integrated physics priors with large language models to enhance generalization in
              manufacturing simulations.
            </p>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" className="py-20 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">Publications</h3>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-700">
          <li>
            K. Naghavi Khanghah, A. Patel, R. Malhorta, H. Xu,
            <em> “Large Language Models for Extrapolative Modeling of Manufacturing Processes,”</em> JIM 2025.
          </li>
          <li>
            K. Naghavi Khanghah, Z. Wang, H. Xu,
            <em> “Generating Porous Metamaterial Designs Using Variational Graph Autoencoder and Large Language Models,”</em> JCISE 2024.
          </li>
        </ul>
      </section>

      {/* Awards */}
      <section id="awards" className="py-20 px-6 md:px-20 bg-white">
        <h3 className="text-3xl font-semibold mb-8 text-center">Awards & Honors</h3>
        <ul className="list-disc max-w-2xl mx-auto text-gray-700 space-y-2">
          <li>1st Place – ASME Hackathon 2025</li>
          <li>Graduate Fellowship – Pratt & Whitney 2024 & 2025</li>
          <li>Best Paper Award – ASME IDETC/CIE 2025</li>
          <li>Travel Award – USNCCM18 2025</li>
        </ul>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-semibold mb-6">Contact</h3>
        <p className="text-gray-700 mb-2">Email: nagahvikkiarash@gmail.com</p>
        <p className="text-gray-700 mb-2">
          LinkedIn: <a href="https://linkedin.com/in/kiarash-naghavi" className="text-blue-600 hover:underline">linkedin.com/in/kiarash-naghavi</a>
        </p>
        <p className="text-gray-700">
          Google Scholar: <a href="https://scholar.google.com/citations?user=5Z3tnvgAAAAJ&hl=en" className="text-blue-600 hover:underline">scholar.google.com</a>
        </p>
      </section>

      {/* Floating AI Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Ask Kiarash’s AI
        </button>
      </div>

      {/* Simple Chat Placeholder */}
      {showChat && (
        <div className="fixed bottom-24 right-6 bg-white shadow-2xl rounded-2xl w-80 h-96 border border-gray-200 flex items-center justify-center text-gray-500">
          (Chat coming soon)
        </div>
      )}
    </main>
  );
}
