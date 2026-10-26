"use client";
// "Currently curious about..." — tap a topic chip to read about it.
import { useState } from "react";
import { topics, pulse } from "@/data/site";
import { Reveal } from "./Reveal";

export function Curiosity() {
  const [active, setActive] = useState(0);
  const topic = topics[active];

  return (
    <section className="section section--alt" id="curious">
      <div className="split">
        <Reveal>
          <div className="pulse">
            <div className="kicker">Something I built · Live project</div>
            <h3>{pulse.title}</h3>
            <p>{pulse.copy}</p>
            <div className="tags">
              {pulse.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            <a className="btn btn--primary" href={pulse.url} target="_blank" rel="noopener">
              Read today&apos;s Pulse ↗
            </a>
            <div className="ticker" aria-hidden>
              <div className="ticker-track">
                {[...pulse.tags, "Daily digest", "Auto-updated", ...pulse.tags, "Daily digest", "Auto-updated"].map(
                  (t, i) => (
                    <span key={i}>{t} ·</span>
                  )
                )}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="kicker">What I&apos;m exploring now</div>
          <h2 className="section-title">
            Currently <em>curious about…</em>
          </h2>
          <div className="chips" role="tablist" aria-label="Topics">
            {topics.map((t, i) => (
              <button
                key={t.name}
                role="tab"
                aria-selected={i === active}
                className={`chip ${i === active ? "on" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
              >
                {t.name}
              </button>
            ))}
          </div>
          {/* key={...} makes React re-create this box, which re-plays the fade animation */}
          <div key={topic.name} className="topic-card" role="tabpanel">
            <strong>{topic.name}</strong>
            <p>{topic.copy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
