"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [showChat, setShowChat] = useState(false);

  // Simple fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add("opacity-100", "translate-y-0");
        });
      },
      { threshold: 0.2 }
    );
    document.querySelectorAll(".fade").forEach(el => observer.observe(el));
  }, []);

  return (
    <main className="min-h-screen font-sans bg-gradient-to-b from-white via-sky-50 to-blue-100 text-gray-900 selection:bg-blue-200">
      {/* ---------- HERO ---------- */}
      <section className="flex flex-col items-center justify-center text-center h-screen fade opacity-0 translate-y-10 transition-all duration-700">
        <h1 className="text-5xl font-bold mb-4">Kiarash Naghavi Khanghah</h1>
        <h2 className="text-xl text-gray-600 mb-6">
          Researcher in AI-Driven Manufacturing and Design
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-gray-700">
          Ph.D. Candidate at the University of Connecticut bridging large language models,
          computational design, and advanced manufacturing.
        </p>
      </section>

      <Divider />

      {/* ---------- ABOUT ---------- */}
      <section id="about" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          I am a researcher passionate about integrating artificial intelligence with
          physics-based design and manufacturing. My work focuses on retrieval-augmented
          and multimodal large language models that interpret design rules, reason over
          manufacturing data, and generate new engineering insights.
        </p>
      </section>

      <Divider />

      {/* ---------- RESEARCH ---------- */}
      <section id="research" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">Research Highlights</h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Card
            title="RAG-Iterative Framework for Manufacturing Modeling"
            text="Built a retrieval-augmented iterative framework achieving ≈ 40 % higher extrapolative accuracy than conventional ML across machining, deformation, and additive processes."
          />
          <Card
            title="Physics-Aware Machine Learning with LLMs"
            text="Integrated physical priors with LLMs to enhance prediction and generalization in manufacturing systems."
          />
          <Card
            title="Multimodal RAG for Anomaly Detection"
            text="Developed a multimodal RAG-driven framework for laser powder bed fusion, improving defect classification accuracy by ≈ 12 %."
          />
          <Card
            title="Generative Design of Porous Metamaterials"
            text="Coupled a variational graph autoencoder and LLMs to generate porous metamaterial structures with voxel-level fidelity to CAD ground truths."
          />
        </div>
      </section>

      <Divider />

      {/* ---------- PUBLICATIONS ---------- */}
      <section id="publications" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20 bg-white/70">
        <h3 className="text-3xl font-semibold mb-8 text-center">Publications & Preprints</h3>
        <ul className="space-y-5 max-w-3xl mx-auto text-gray-700">
          <li>
            <b>Large Language Models for Extrapolative Modeling of Manufacturing Processes</b> (2025) — 
            <a href="https://arxiv.org/abs/2502.12185" className="text-blue-600 hover:underline">arXiv</a>
          </li>
          <li>
            <b>Multimodal RAG-driven Anomaly Detection and Classification in Laser Powder Bed Fusion using LLMs</b> (2025) — 
            <a href="https://arxiv.org/abs/2505.13828" className="text-blue-600 hover:underline">arXiv</a>
          </li>
          <li>
            <b>Reconstruction and Generation of Porous Metamaterial Units via Variational Graph Autoencoder and LLMs</b> (2024) — 
            <a href="https://asmedigitalcollection.asme.org/computingengineering/article/25/2/021003/1201904/Reconstruction-and-Generation-of-Porous" className="text-blue-600 hover:underline">ASME Journal of Computing and Information Science in Engineering</a>
          </li>
        </ul>
      </section>

      <Divider />

      {/* ---------- AWARDS ---------- */}
      <section id="awards" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">Awards & Honors</h3>
        <ul className="list-disc max-w-2xl mx-auto text-gray-700 space-y-2">
          <li>1st Place – ASME Hackathon 2025</li>
          <li>Graduate Fellowship – Pratt & Whitney Advanced Systems Engineering (2024 & 2025)</li>
          <li>Best Paper Award – ASME IDETC/CIE 2025</li>
          <li>Travel Award – U.S. National Congress on Computational Mechanics 2025</li>
        </ul>
      </section>

      <Divider />

      {/* ---------- SKILLS ---------- */}
      <section id="skills" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20 bg-white/70 text-center">
        <h3 className="text-3xl font-semibold mb-8">Skills & Tools</h3>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          Python • MATLAB • C • SQL • PyTorch • TensorFlow • Keras • scikit-learn • Pandas • NumPy • SciPy • Matplotlib • Seaborn • Git • Linux • AWS (EC2, SageMaker, S3) • Azure (AI Foundry) • Google Cloud
        </p>
      </section>

      <Divider />

      {/* ---------- LEADERSHIP ---------- */}
      <section id="leadership" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20">
        <h3 className="text-3xl font-semibold mb-8 text-center">Leadership & Service</h3>
        <p className="max-w-3xl mx-auto text-gray-700 text-center leading-relaxed">
          President – Mechanical Engineering Graduate Student Association (MEGSA). Reviewer for SAE International, ASME JCISE, and Springer Nature journals.
        </p>
      </section>

      <Divider />

      {/* ---------- CONTACT ---------- */}
      <section id="contact" className="fade opacity-0 translate-y-10 transition-all duration-700 py-20 px-6 md:px-20 text-center">
        <h3 className="text-3xl font-semibold mb-8">Contact Me</h3>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <a href="mailto:nagahvikkiarash@gmail.com" className="btn-contact bg-blue-600 hover:bg-blue-700">Email Me</a>
          <a href="https://linkedin.com/in/kiarash-naghavi" className="btn-contact bg-sky-600 hover:bg-sky-700">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=5Z3tnvgAAAAJ&hl=en" className="btn-contact bg-indigo-600 hover:bg-indigo-700">Google Scholar</a>
        </div>
      </section>

      <Divider />

      {/* ---------- FOOTER ---------- */}
      <footer className="text-center text-gray-500 text-sm py-6">
        © 2025 Kiarash Naghavi Khanghah. All rights reserved.
      </footer>

      {/* ---------- FLOATING AI BUTTON ---------- */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowChat(!showChat)}
          className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-full shadow-lg hover:opacity-90 transition"
        >
          Ask Kiarash’s AI
        </button>
      </div>

      {showChat && (
  <div className="fixed bottom-24 right-6 bg-white shadow-2xl rounded-2xl w-80 h-96 border border-gray-200 flex flex-col">
    <div className="flex-1 overflow-y-auto p-3 space-y-2" id="chat-box"></div>
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const inputEl = form.querySelector("input[name='query']") as HTMLInputElement;
        const input = inputEl?.value.trim() || "";
        const box = document.getElementById("chat-box");
        if (box) {
          box.innerHTML += `<div class='text-right text-sm text-blue-600 mb-2'>${input}</div>`;
        }
        form.reset();
        const res = await fetch("/api/ask-kiarash", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: input }),
        });
        const data = await res.json();
        if (box) {
          box.innerHTML += `<div class='text-left text-sm text-gray-700 mb-2'>${data.answer}</div>`;
          box.scrollTop = box.scrollHeight;
        }
      }}
      className="p-2 border-t border-gray-200 flex"
    >
      <input
        type="text"
        name="query"
        placeholder="Ask something..."
        className="flex-1 text-sm border rounded-l-xl px-3 py-2 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-xl text-sm hover:bg-blue-600"
      >
        Send
      </button>
    </form>
  </div>
)}

    </main>
  );
}

/* ---------- COMPONENTS ---------- */
type CardProps = {
  title: string;
  text: string;
};

function Card({ title, text }: CardProps) {

  return (
    <div className="bg-white/80 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function Divider() {
  return <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent mx-auto w-4/5"></div>;
}

/* ---------- STYLES ---------- */
const style = `
.btn-contact {
  display:inline-block;
  color:white;
  padding:0.75rem 1.5rem;
  border-radius:9999px;
  font-weight:500;
  transition:background-color 0.2s ease, transform 0.2s ease;
}
.btn-contact:hover {
  transform:translateY(-2px);
}
`;
if (typeof document !== "undefined" && !document.getElementById("inline-style")) {
  const s = document.createElement("style");
  s.id = "inline-style";
  s.innerHTML = style;
  document.head.appendChild(s);
}
