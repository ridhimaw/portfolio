"use client";
// ─────────────────────────────────────────────────────────────
//  "Providers" hold information that many parts of the page share:
//   1. Settings  — theme, text size, motion (saved in the browser)
//   2. Basket    — the topics a visitor picked with "+ Add to message"
//  Any component can read them with useSettings() or useBasket().
// ─────────────────────────────────────────────────────────────

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "dark" | "light" | "system";
export type TextSize = "sm" | "md" | "lg";
export type Motion = "lite" | "full";

type Settings = {
  theme: Theme;
  textSize: TextSize;
  motion: Motion;
  setTheme: (t: Theme) => void;
  setTextSize: (s: TextSize) => void;
  setMotion: (m: Motion) => void;
};

type Basket = {
  items: string[];
  toggle: (item: string) => void;
  has: (item: string) => boolean;
  clear: () => void;
};

const SettingsContext = createContext<Settings | null>(null);
const BasketContext = createContext<Basket | null>(null);

// Small helpers so the page never crashes if the browser blocks storage
function load(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}
function save(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    /* ignore */
  }
}

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [textSize, setTextSize] = useState<TextSize>("md");
  const [motion, setMotion] = useState<Motion>("full");
  const [items, setItems] = useState<string[]>([]);
  const [ready, setReady] = useState(false);

  // 1) On first load, read saved settings
  useEffect(() => {
    const t = load("theme") as Theme | null;
    const s = load("textSize") as TextSize | null;
    const m = load("motion") as Motion | null;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (t) setTheme(t);
    if (s) setTextSize(s);
    setMotion(m ?? (reduce ? "lite" : "full"));
    setReady(true);
  }, []);

  // 2) Whenever a setting changes, apply it to <html> and save it
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    const apply = () => {
      const dark =
        theme === "dark" ||
        (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
      root.dataset.theme = dark ? "dark" : "light";
    };
    apply();
    root.dataset.text = textSize;
    root.dataset.motion = motion;
    save("theme", theme);
    save("textSize", textSize);
    save("motion", motion);

    // If "system" is chosen, follow the phone/laptop setting live
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, [theme, textSize, motion, ready]);

  const basket: Basket = {
    items,
    toggle: (item) =>
      setItems((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item])),
    has: (item) => items.includes(item),
    clear: () => setItems([]),
  };

  return (
    <SettingsContext.Provider value={{ theme, textSize, motion, setTheme, setTextSize, setMotion }}>
      <BasketContext.Provider value={basket}>{children}</BasketContext.Provider>
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error("useSettings must be used inside <Providers>");
  return ctx;
}

export function useBasket() {
  const ctx = useContext(BasketContext);
  if (!ctx) throw new Error("useBasket must be used inside <Providers>");
  return ctx;
}
