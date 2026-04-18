// src/components/ChatWidget/index.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { X, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/cn";

interface Message {
  role: "bot" | "user";
  text: string;
  quickReplies?: string[];
}

const OPENING_MESSAGE: Message = {
  role: "bot",
  text: "Hi, I'm Lumen's concierge.\n\nI can help with:\n— Booking a consultation\n— Treatment questions (pricing, what to expect)\n— Our membership\n— Directions and hours\n\nWhat brings you in?",
  quickReplies: ["Book consultation", "Treatment pricing", "Something else"],
};

function getBotResponse(input: string): Message {
  const lower = input.toLowerCase();

  if (lower.includes("book") || lower.includes("appointment") || lower.includes("schedule")) {
    return {
      role: "bot",
      text: "Happy to help. All first visits start with a 45-minute consultation — it's complimentary and you're under no obligation to book treatment that day.\n\nHead to our booking page to see available times.",
      quickReplies: ["See available times", "Learn about treatments"],
    };
  }

  if (lower.includes("botox") || lower.includes("dysport")) {
    return {
      role: "bot",
      text: "Botox at Lumen is $14 per unit. Most clients use between 20 and 40 units per session depending on the areas treated, so a typical appointment lands around $280–$560.\n\nWould you like to book a complimentary consultation?",
      quickReplies: ["Book consultation", "See other treatments"],
    };
  }

  if (lower.includes("filler") || lower.includes("juvederm") || lower.includes("restylane")) {
    return {
      role: "bot",
      text: "Dermal filler at Lumen starts at $850 per syringe. The number of syringes depends entirely on the area and your goals — we'll give you a specific estimate at your consultation.\n\nAll filler is performed by Dr. Elena Reyes or Maya Chen, our nurse practitioner.",
      quickReplies: ["Book consultation", "More treatment info"],
    };
  }

  if (lower.includes("morpheus") || lower.includes("microneedling")) {
    return {
      role: "bot",
      text: "Morpheus8 is our most-requested treatment — radiofrequency microneedling that remodels collagen deep in the dermis. Pricing starts at $1,200 per session, or $3,000 for a package of three.\n\nMost clients see full results at 3–6 months post-treatment.",
      quickReplies: ["Book consultation", "What's the downtime?"],
    };
  }

  if (lower.includes("membership")) {
    return {
      role: "bot",
      text: "The Lumen Membership is $195/month. Members receive:\n— Monthly treatment credit (rolls over up to 3 months)\n— Priority booking\n— Complimentary quarterly skin analysis\n— 15% off all retail\n\nCancel anytime after the first month.",
      quickReplies: ["Enroll in membership", "Book consultation"],
    };
  }

  if (lower.includes("hour") || lower.includes("open") || lower.includes("when")) {
    return {
      role: "bot",
      text: "We're open:\nTuesday – Friday: 10am – 7pm\nSaturday: 10am – 5pm\nSunday – Monday: Closed\n\nWe're located at 412 Bleecker Street, Studio 3, West Village, New York.",
      quickReplies: ["Book consultation", "Get directions"],
    };
  }

  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much")) {
    return {
      role: "bot",
      text: "Here's a quick overview of our pricing:\n\n— Botox/Dysport: from $14/unit\n— Dermal Filler: from $850/syringe\n— Morpheus8: from $1,200/session\n— Hydrafacial: from $275\n— Halo Laser: from $1,500\n— BBL Photofacial: from $650\n\nAll new clients begin with a complimentary 45-minute consultation.",
      quickReplies: ["Book consultation", "Learn more about a treatment"],
    };
  }

  if (lower.includes("blood thinner") || lower.includes("medication") || lower.includes("pregnant") || lower.includes("medical")) {
    return {
      role: "bot",
      text: "That's a question for Dr. Reyes or Maya specifically — we wouldn't want to give you general advice on a medical question.\n\nCan I take your name and email? I'll have one of them reply to you within one business day.",
      quickReplies: ["Yes, message the team", "Book a consultation instead"],
    };
  }

  return {
    role: "bot",
    text: "I want to make sure I give you accurate information. For specifics about your situation, the best next step is a complimentary consultation with Dr. Reyes or Maya — they can answer your questions directly.\n\nIs there anything else I can help with?",
    quickReplies: ["Book consultation", "See treatment pricing"],
  };
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([OPENING_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      setMessages((prev) => [...prev, response]);
      setTyping(false);
    }, 800);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Chat panel */}
      <div
        className={cn(
          "fixed z-50 transition-all duration-300",
          "bottom-0 right-0 md:bottom-6 md:right-6",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Lumen Concierge chat"
      >
        <div className="w-screen md:w-[380px] h-[560px] max-h-[80vh] bg-charcoal border border-white/10 flex flex-col shadow-2xl md:rounded-sm">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <div>
              <p className="text-bone text-sm font-serif">Lumen Concierge</p>
              <p className="text-stone text-[11px] font-sans tracking-wide">
                Typically replies in minutes
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-stone hover:text-bone transition-colors p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex flex-col gap-2", msg.role === "user" && "items-end")}>
                <div
                  className={cn(
                    "max-w-[85%] text-sm font-sans leading-relaxed px-4 py-3 whitespace-pre-wrap",
                    msg.role === "bot"
                      ? "bg-charcoal-soft text-bone-soft"
                      : "bg-champagne text-ink-deep"
                  )}
                >
                  {msg.text}
                </div>
                {msg.quickReplies && msg.role === "bot" && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {msg.quickReplies.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => sendMessage(reply)}
                        className="text-[11px] tracking-wide uppercase font-sans text-champagne border border-champagne/30 px-3 py-1.5 hover:bg-champagne hover:text-ink-deep transition-colors"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex gap-1 px-4 py-3 bg-charcoal-soft w-fit">
                <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce [animation-delay:0ms]" />
                <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce [animation-delay:150ms]" />
                <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce [animation-delay:300ms]" />
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="px-4 py-4 border-t border-white/10 flex gap-3 items-center"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything..."
              className="flex-1 bg-transparent text-bone text-sm font-sans placeholder:text-stone/50 focus:outline-none"
              aria-label="Chat message input"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="text-champagne disabled:text-stone transition-colors"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 bg-charcoal border border-champagne/30 flex items-center justify-center text-champagne hover:bg-charcoal-soft hover:border-champagne/60 transition-all shadow-lg",
          open && "opacity-0 pointer-events-none"
        )}
        aria-label="Open Lumen Concierge chat"
        aria-expanded={open}
      >
        <MessageCircle size={20} />
      </button>
    </>
  );
}
