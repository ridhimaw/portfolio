"use client";
// Four highlight tiles. Tap one to open a pop-up with the full story.
import { useEffect, useState } from "react";
import { highlights, type Highlight } from "@/data/site";
import { Reveal } from "./Reveal";

export function Highlights() {
  const [open, setOpen] = useState<Highlight | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="section" id="highlights">
      <Reveal>
        <div className="kicker">Some highlights</div>
      </Reveal>
      <div className="highlight-grid">
        {highlights.map((h, i) => (
          <Reveal key={h.title} delay={i * 90}>
            <button className="highlight" onClick={() => setOpen(h)}>
              <span className="highlight-big">{h.big}</span>
              <span className="highlight-title">{h.title}</span>
              <span className="highlight-sub">{h.sub}</span>
              <span className="highlight-more">View detail →</span>
            </button>
          </Reveal>
        ))}
      </div>

      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={open.title}>
          <div className="modal-backdrop" onClick={() => setOpen(null)} />
          <div className="modal-card">
            <button className="icon-btn modal-close" aria-label="Close" onClick={() => setOpen(null)}>
              ×
            </button>
            <div className="kicker">{open.label}</div>
            <h3>{open.title}</h3>
            {open.copy.split("\n\n").map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
