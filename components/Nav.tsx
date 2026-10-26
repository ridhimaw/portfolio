"use client";
// Top bar: logo, links, basket counter, settings button and mobile menu.
import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";
import { useBasket } from "./Providers";
import { SettingsPanel } from "./SettingsPanel";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const basket = useBasket();

  // Give the bar a solid background once you scroll down a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scrolling while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className={`nav ${scrolled ? "nav--solid" : ""}`}>
        <Link href="/#home" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">R</span>
          <span>{site.name}</span>
        </Link>

        <nav className="nav-links" aria-label="Main">
          {nav.map((l) => (
            <Link key={l.href} href={`/${l.href}`}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          {basket.items.length > 0 && (
            <Link href="/#contact" className="basket-pill" title="Topics added to your message">
              ✉ <b>{basket.items.length}</b>
            </Link>
          )}
          <button
            className="icon-btn"
            aria-label="Settings"
            aria-expanded={settingsOpen}
            onClick={() => setSettingsOpen((o) => !o)}
          >
            ⚙
          </button>
          <button
            className={`icon-btn hamburger ${menuOpen ? "is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`drawer ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        {nav.map((l, i) => (
          <Link
            key={l.href}
            href={`/${l.href}`}
            onClick={() => setMenuOpen(false)}
            style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
          >
            <small>0{i + 1}</small>
            {l.label}
          </Link>
        ))}
        <a href={site.linkedin} target="_blank" rel="noopener" className="drawer-cta">
          Connect on LinkedIn →
        </a>
      </div>

      <SettingsPanel open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
}
