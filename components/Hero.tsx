"use client";
// ─────────────────────────────────────────────────────────────
//  THE "DIVE INTO THE i" HERO
//  How it works:
//   • The hero section is extra tall (see .dive in globals.css).
//   • Inside it, a "sticky" box stays on screen while you scroll.
//   • We measure how far you've scrolled through the section (0 → 1)
//     and use that number to zoom the name towards the "i".
//   • At the end the gold "i" fills the screen and the welcome
//     panel fades in.
//  In "Lite" motion mode the zoom is switched off.
// ─────────────────────────────────────────────────────────────
import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav, site } from "@/data/site";
import { useSettings } from "./Providers";

export function Hero() {
  const { motion } = useSettings();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const iRef = useRef<HTMLSpanElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const letter = iRef.current;
    if (!section || !title || !letter) return;

    // Lite mode: reset everything and stop
    if (motion === "lite") {
      title.style.transform = "";
      section.style.removeProperty("--p");
      return;
    }

    let maxScale = 60;
    let frame = 0;

    // Aim the zoom at the stem of the "i" (a bit below its middle)
    const measure = () => {
      const x = letter.offsetLeft + letter.offsetWidth / 2;
      const y = letter.offsetTop + letter.offsetHeight * 0.62;
      title.style.transformOrigin = `${x}px ${y}px`;
      // The stem is roughly 1/10 of the letter height wide; zoom until it covers the screen
      const stem = Math.max(letter.offsetHeight * 0.08, 4);
      maxScale = (Math.max(window.innerWidth, window.innerHeight) * 1.6) / stem;
    };

    const update = () => {
      frame = 0;
      const rect = section.getBoundingClientRect();
      const total = section.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / total, 0), 1); // progress 0 → 1

      // Zoom grows slowly at first, then rushes in (feels like diving)
      const zoom = Math.pow(maxScale, Math.pow(p, 1.4) * 0.92);
      title.style.transform = `scale(${zoom})`;

      // CSS reads --p to fade the text out and the welcome panel in
      section.style.setProperty("--p", p.toFixed(4));
      welcomeRef.current?.classList.toggle("is-live", p > 0.85);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      title.style.transform = "";
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    // Fonts load a moment later and change the letter size — re-measure then
    document.fonts?.ready.then(onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [motion]);

  return (
    <section ref={sectionRef} id="home" className={motion === "full" ? "dive" : "dive dive--lite"}>
      <div className="dive-sticky">
        <div className="hero-glow" aria-hidden />

        <div className="hero-inner">
          <div className="hero-fade">
            <div className="kicker">{site.tagline}</div>
            <p className="hero-hi">Hi!</p>
          </div>

          <h1 ref={titleRef} className="hero-title">
            I am R<span ref={iRef} className="the-i">i</span>dhima.
          </h1>

          <div className="hero-fade">
            <p className="hero-lead">
              A curious generalist working across intellectual property, technology, and innovation —
              with a growing focus on AI governance, AI security, and biosecurity.
            </p>
            <div className="hero-ctas">
              <Link href="/#work" className="btn btn--primary">
                Explore my work ↓
              </Link>
              <Link href="/#contact" className="btn">
                Get in touch →
              </Link>
            </div>
          </div>
        </div>

        {motion === "full" && (
          <div className="scroll-hint">
            ↕ Scroll to dive into the <em>i</em>
          </div>
        )}

        {/* Appears once you've "dived" into the i */}
        <div ref={welcomeRef} className={`welcome ${motion === "lite" ? "welcome--static" : ""}`}>
          <p className="welcome-small">You just dived into the i.</p>
          <p className="welcome-big">
            Welcome to my <em>world.</em>
          </p>
          <ul className="welcome-links">
            {nav.slice(1).map((l, i) => (
              <li key={l.href}>
                <Link href={`/${l.href}`}>
                  <b>0{i + 1}</b> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
