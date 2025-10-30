import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <main className="font-[Inter] min-h-screen text-gray-900 dark:text-gray-100 transition-colors duration-700 bg-gradient-to-b from-[#FAFAFA] via-[#F3F7FA] to-[#EAF2FF] dark:from-[#0B0C10] dark:via-[#111827] dark:to-[#1E3A8A]">


      <Navbar />

      {/* ---------- HERO ---------- */}
      <section
        id="hero"
        className="flex flex-col items-center justify-center text-center pt-40 pb-24 px-6 animate-fadeIn"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Kiarash Naghavi Khanghah
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl">
          Researcher in AI-Driven Manufacturing and Design
        </p>
      </section>

      {/* ---------- ABOUT ---------- */}
      <Section id="about" title="About">
        <p>
          I am a Ph.D. candidate in Mechanical Engineering at the University of Connecticut, focusing on
          AI-driven manufacturing and computational design. My research integrates deep learning, generative
          modeling, and process optimization to accelerate advanced manufacturing discovery.
        </p>
      </Section>

      {/* ---------- RESEARCH ---------- */}
      <Section id="research" title="Research">
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Multimodal retrieval and reasoning in large language models for design rule interpretation.
          </li>
          <li>
            Generative and physics-informed modeling of additive manufacturing and plasma-assisted processes.
          </li>
          <li>
            Representation learning for material–process–performance correlation discovery.
          </li>
        </ul>
      </Section>

      {/* ---------- PUBLICATIONS ---------- */}
      <Section id="publications" title="Publications">
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Reconstruction and Generation of Porous Metamaterial Units via Variational Graph Autoencoder and Large Language Model</strong>, 
            ASME IDETC/CIE 2024.
          </li>
          <li>
            <strong>ALFED: Automated LLM Framework for Equation Discovery in Manufacturing</strong>, in review.
          </li>
          <li>
            <strong>Large Language Models for Process-Structure-Property Reasoning</strong>, ongoing research (2025).
          </li>
        </ul>
      </Section>

      {/* ---------- AWARDS ---------- */}
      <Section id="awards" title="Awards">
        <ul className="list-disc ml-6 space-y-2">
          <li>Pratt & Whitney Advanced Systems Engineering Fellowship</li>
          <li>ASME DFMLC Best Paper Award</li>
          <li>ASME Hackathon 1st Place Winner</li>
          <li>John Lof Leadership Academy Fellow (2024–2026)</li>
        </ul>
      </Section>

      {/* ---------- SKILLS ---------- */}
      <Section id="skills" title="Skills">
        <p>
          Deep Learning (PyTorch, TensorFlow), Large Language Models (GPT, Qwen, ColPali),
          Generative Design, Additive Manufacturing, Symbolic Regression, and Data Visualization.
        </p>
      </Section>

      {/* ---------- LEADERSHIP ---------- */}
      <Section id="leadership" title="Leadership">
        <p>
          President of the Mechanical Engineering Graduate Student Association (MEGSA), organizing
          workshops, professional development events, and academic writing series to support graduate students.
        </p>
      </Section>

      {/* ---------- CONTACT ---------- */}
      <Section id="contact" title="Contact">
        <p>
          Feel free to reach out regarding research collaboration, mentoring, or speaking engagements.
        </p>
      </Section>

      <Footer />
      <ChatWidget />
    </main>
  );
}

/* ---------- REUSABLE SECTION COMPONENT ---------- */
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="max-w-4xl mx-auto mb-16 px-6 py-10 bg-white/70 dark:bg-gray-800/60 backdrop-blur-lg rounded-2xl shadow-md animate-fadeIn transition-transform duration-700"
    >
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        {title}
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">{children}</div>
    </section>
  );
}

/* ---------- INLINE ANIMATIONS ---------- */
const styles = `
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 0.8s ease-out;
  }
}
`;
