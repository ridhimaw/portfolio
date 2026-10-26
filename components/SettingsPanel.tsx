"use client";
// The ⚙ panel: theme, text size, motion — plus a live FPS (smoothness) check.
import { useEffect, useState } from "react";
import { useSettings, type Motion, type TextSize, type Theme } from "./Providers";

type Props = { open: boolean; onClose: () => void };

function Segmented<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="setting">
      <div className="setting-label">{label}</div>
      <div className="segmented" role="radiogroup" aria-label={label}>
        {options.map((o) => (
          <button
            key={o.value}
            role="radio"
            aria-checked={value === o.value}
            className={value === o.value ? "on" : ""}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// Counts how many frames the browser draws per second while the panel is open
function useFps(active: boolean) {
  const [fps, setFps] = useState<number | null>(null);
  useEffect(() => {
    if (!active) return;
    let frames = 0;
    let start = performance.now();
    let id = 0;
    const tick = (now: number) => {
      frames++;
      if (now - start >= 1000) {
        setFps(Math.round((frames * 1000) / (now - start)));
        frames = 0;
        start = now;
      }
      id = requestAnimationFrame(tick);
    };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [active]);
  return fps;
}

export function SettingsPanel({ open, onClose }: Props) {
  const s = useSettings();
  const fps = useFps(open);

  // Close with the Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const verdict =
    fps === null ? "Measuring…" : fps >= 50 ? "Smooth — full motion is fine" : "A bit slow — try Lite";

  return (
    <>
      <div className={`scrim ${open ? "is-open" : ""}`} onClick={onClose} />
      <aside className={`settings ${open ? "is-open" : ""}`} aria-hidden={!open} aria-label="Settings">
        <div className="settings-head">
          <h2>Settings</h2>
          <button className="icon-btn" aria-label="Close settings" onClick={onClose}>
            ×
          </button>
        </div>

        <Segmented<Theme>
          label="Theme"
          value={s.theme}
          onChange={s.setTheme}
          options={[
            { value: "dark", label: "Dark" },
            { value: "light", label: "Light" },
            { value: "system", label: "System" },
          ]}
        />
        <Segmented<TextSize>
          label="Text size"
          value={s.textSize}
          onChange={s.setTextSize}
          options={[
            { value: "sm", label: "Small" },
            { value: "md", label: "Default" },
            { value: "lg", label: "Large" },
          ]}
        />
        <Segmented<Motion>
          label="Motion"
          value={s.motion}
          onChange={s.setMotion}
          options={[
            { value: "lite", label: "Lite" },
            { value: "full", label: "Full" },
          ]}
        />

        <div className="fps">
          <span className="fps-num">{fps ?? "··"}</span>
          <span>
            fps
            <small>{verdict}</small>
          </span>
        </div>
      </aside>
    </>
  );
}
