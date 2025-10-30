"use client";
import { useState } from "react";

export default function ChatWidget() {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "💬 Hi! I’m here to help answer any questions about Kiarash’s research, background, and work.",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const newMessages = [...messages, { role: "user", text: query }];
    setMessages(newMessages);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch("/api/ask-kiarash", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      setMessages([
        ...newMessages,
        { role: "assistant", text: data.answer || "Sorry, I don’t have an answer for that yet." },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { role: "assistant", text: "⚠️ Error: Unable to reach AI service." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 bg-white dark:bg-gray-900/90 border border-gray-200 dark:border-gray-700 shadow-xl rounded-2xl overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
        Ask Kiarash’s AI
      </div>

      <div
        id="chat-box"
        className="p-4 h-64 overflow-y-auto text-sm space-y-2 bg-gray-50 dark:bg-gray-800"
      >
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`${
              msg.role === "user"
                ? "text-right text-blue-600"
                : "text-left text-gray-800 dark:text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="text-gray-500 text-xs italic">Thinking...</div>
        )}
      </div>

      <form
        onSubmit={sendMessage}
        className="flex items-center border-t border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-900"
      >
        <input
          type="text"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type a question..."
          className="flex-1 px-2 py-1 text-sm bg-transparent outline-none dark:text-white"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
        >
          Send
        </button>
      </form>
    </div>
  );
}
