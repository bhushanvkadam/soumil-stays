"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import type { Property } from "@/lib/properties";
import { GENERIC_QAS, getPropertyQAs, type QAPair } from "@/lib/faqChatbotData";

interface Message {
  type: "bot" | "user";
  text: string;
}

interface Props {
  property?: Property;
  nearbyItems?: { place: string; distance: string; time: string }[];
}

const INTRO = "Hi! I can answer common questions about stays, bookings, and payments. Tap a question below to get started.";

export default function FAQChatbot({ property, nearbyItems }: Props) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ type: "bot", text: INTRO }]);
  const [answered, setAnswered] = useState<Set<string>>(new Set());
  const threadRef = useRef<HTMLDivElement>(null);

  const propertyQAs: QAPair[] = property ? getPropertyQAs(property, nearbyItems) : [];

  const scrollToBottom = useCallback(() => {
    if (threadRef.current) {
      threadRef.current.scrollTop = threadRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    if (open) scrollToBottom();
  }, [open, messages, scrollToBottom]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function handleQuestion(qa: QAPair) {
    setMessages((prev) => [
      ...prev,
      { type: "user", text: qa.question },
      { type: "bot", text: qa.answer },
    ]);
    setAnswered((prev) => new Set(prev).add(qa.question));
    setTimeout(scrollToBottom, 50);
  }

  const unansweredGeneric = GENERIC_QAS.filter((q) => !answered.has(q.question));
  const unansweredProperty = propertyQAs.filter((q) => !answered.has(q.question));
  const hasMoreQuestions = unansweredGeneric.length > 0 || unansweredProperty.length > 0;

  return (
    <>
      {/* Backdrop — mobile only */}
      {open && (
        <div
          className="fixed inset-0 z-[55] bg-black/20 md:bg-transparent"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Panel */}
      <div
        className={`fixed inset-x-0 bottom-0 z-[56] bg-white shadow-2xl
          md:inset-x-auto md:right-4 md:bottom-[152px] md:w-[360px] md:rounded-2xl
          rounded-t-2xl flex flex-col
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}
        `}
        style={{ maxHeight: "80vh", height: open ? undefined : 0 }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 pt-5 pb-4 border-b border-stone-100 flex-shrink-0">
          <div>
            <p className="font-heading text-base font-semibold text-foreground">Ask us anything</p>
            <p className="text-xs text-gray-400 mt-0.5 font-sans">Quick answers about bookings &amp; stays</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-4 mt-0.5 text-gray-400 hover:text-foreground transition-colors"
            aria-label="Close chat"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Thread */}
        <div ref={threadRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-0">
          {messages.map((msg, i) =>
            msg.type === "bot" ? (
              <div key={i} className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
                  </svg>
                </div>
                <div className="bg-[#F8F9FA] rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-foreground font-sans max-w-[85%] leading-relaxed">
                  {msg.text}
                </div>
              </div>
            ) : (
              <div key={i} className="flex justify-end">
                <div className="bg-forest text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-sans max-w-[85%] leading-relaxed">
                  {msg.text}
                </div>
              </div>
            )
          )}

          {/* Question buttons */}
          {hasMoreQuestions && (
            <div className="pt-1 space-y-2">
              {unansweredGeneric.length > 0 && (
                <div className="space-y-2">
                  {unansweredGeneric.map((qa) => (
                    <button
                      key={qa.question}
                      onClick={() => handleQuestion(qa)}
                      className="w-full text-left border border-forest text-forest rounded-xl px-4 py-2.5 text-sm font-sans hover:bg-forest hover:text-white transition-colors duration-200 leading-snug"
                    >
                      {qa.question}
                    </button>
                  ))}
                </div>
              )}

              {property && unansweredProperty.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[11px] font-medium text-gray-400 uppercase tracking-widest pt-1 pb-0.5 font-sans">
                    About {property.name}
                  </p>
                  {unansweredProperty.map((qa) => (
                    <button
                      key={qa.question}
                      onClick={() => handleQuestion(qa)}
                      className="w-full text-left border border-forest text-forest rounded-xl px-4 py-2.5 text-sm font-sans hover:bg-forest hover:text-white transition-colors duration-200 leading-snug"
                    >
                      {qa.question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {!hasMoreQuestions && (
            <p className="text-xs text-gray-400 text-center font-sans pt-1">
              You&apos;ve covered all the common questions!
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-4 border-t border-stone-100 flex-shrink-0">
          <p className="text-xs text-gray-400 font-sans mb-2">Didn&apos;t find what you&apos;re looking for?</p>
          <a
            href="https://wa.me/918975265295"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center bg-[#25D366] text-white text-sm font-medium rounded-lg py-2.5 hover:bg-[#20bb5a] transition-colors font-sans"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

      {/* Toggle button */}
      <div className="fixed bottom-[84px] right-4 md:right-6 z-[57]">
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-14 h-14 rounded-full bg-forest text-white shadow-lg hover:bg-[#019aaa] transition-colors duration-200 flex items-center justify-center"
          aria-label={open ? "Close FAQ chat" : "Open FAQ chat"}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
