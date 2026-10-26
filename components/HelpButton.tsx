"use client";
// Floating "?" button in the corner with quick links.
import Link from "next/link";
import { useState } from "react";
import { arcade, pulse, site } from "@/data/site";

export function HelpButton() {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Send a note", sub: "Contact form, no email needed", href: "/#contact", internal: true },
    { label: "LinkedIn", sub: "Connect or message me", href: site.linkedin },
    { label: "IP Pulse", sub: "Today's IP & tech transfer news", href: pulse.url },
    { label: "Mini Arcade", sub: "Take a quick game break", href: arcade.url },
  ];

  return (
    <div className={`help ${open ? "is-open" : ""}`}>
      <div className="help-card" aria-hidden={!open}>
        <strong>Need a hand?</strong>
        <p>Quick ways to reach me or explore.</p>
        {links.map((l) =>
          l.internal ? (
            <Link key={l.label} href={l.href} onClick={() => setOpen(false)}>
              <b>{l.label}</b>
              <span>{l.sub}</span>
            </Link>
          ) : (
            <a key={l.label} href={l.href} target="_blank" rel="noopener">
              <b>{l.label} ↗</b>
              <span>{l.sub}</span>
            </a>
          )
        )}
      </div>
      <button className="help-btn" aria-label="Help and quick links" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "×" : "?"}
      </button>
    </div>
  );
}
