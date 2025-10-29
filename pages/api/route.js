import OpenAI from "openai";

export async function POST(req) {
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const { query } = await req.json();

  const context = `
Kiarash Naghavi Khanghah is a Ph.D. candidate in Mechanical Engineering at the University of Connecticut.
He also pursues an M.Sc. in Computer Science and Engineering. His research bridges AI and manufacturing design,
especially focusing on large language models (LLMs), retrieval-augmented generation (RAG), and multimodal
reasoning frameworks for manufacturing, design rule interpretation, and anomaly detection.

Key projects:
- Built an RAG–iterative framework achieving 35–40% higher extrapolative accuracy than traditional ML
  across machining, deformation, and additive processes.
- Developed a physics-aware LLM framework integrating domain priors to improve prediction accuracy.
- Created a multimodal RAG-driven anomaly detection system for additive manufacturing,
  improving defect classification by 12%.
- Designed a generative model coupling dual-decoder VGAE and LLMs for porous metamaterial reconstruction.

Education:
- Ph.D. in Mechanical Engineering, University of Connecticut (2027 expected)
- M.Sc. in Computer Science and Engineering, University of Connecticut (2026 expected)
- M.Sc. in Mechanical Engineering, University of Connecticut (2025)
- B.Sc. in Aerospace Engineering, Sharif University of Technology (2022)

Awards:
- 1st Place – ASME Hackathon 2025
- Graduate Fellowship – Pratt & Whitney 2024 & 2025
- Best Paper Award – ASME IDETC/CIE 2025
- Travel Award – USNCCM18 2025

Roles:
- Graduate Research Assistant, Computational Engineering and Design Lab
- President, Mechanical Engineering Graduate Student Association (MEGSA)
- Reviewer for SAE International, ASME JCISE, and Springer Nature journals.

Links:
- LinkedIn: https://linkedin.com/in/kiarash-naghavi
- Google Scholar: https://scholar.google.com/citations?user=5Z3tnvgAAAAJ&hl=en
- Email: nagahvikkiarash@gmail.com

When answering, speak in the first person as “Kiarash’s AI assistant,” referring to verified details above
before using general reasoning. Keep responses professional, short, and specific to his background.
`;

  const response = await client.responses.create({
    model: "gpt-5",
    input: `You are Kiarash’s AI assistant. Use this context: ${context}. Question: ${query}`,
  });

  return new Response(JSON.stringify({ answer: response.output_text }), {
    headers: { "Content-Type": "application/json" },
  });
}
