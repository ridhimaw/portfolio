"use client";
// ─────────────────────────────────────────────────────────────
//  CONTACT FORM
//  Sends straight to your Google Form (same as the old site).
//  New: topics added with "+ Add to message" appear here and are
//  sent along in the "Other" answer.
// ─────────────────────────────────────────────────────────────
import { useEffect, useRef, useState } from "react";
import { contactForm, site } from "@/data/site";
import { useBasket } from "./Providers";
import { Reveal } from "./Reveal";

const OTHER = "__other_option__";

export function Contact() {
  const basket = useBasket();
  const [purpose, setPurpose] = useState<string>("");
  const [otherText, setOtherText] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [fbzx, setFbzx] = useState("");
  const sentRef = useRef(false);
  const f = contactForm.fields;

  // Google adds a random token to every form view; we copy that behaviour
  useEffect(() => {
    setFbzx("-" + Math.floor(Math.random() * 9e15).toString());
  }, []);

  // When topics are in the basket, choose "Other" and write them in for the visitor
  useEffect(() => {
    if (basket.items.length) {
      setPurpose(OTHER);
      setOtherText(`I'd like to talk about: ${basket.items.join(", ")}`);
    }
  }, [basket.items]);

  return (
    <section className="section section--contact" id="contact">
      <div className="split">
        <Reveal>
          <div className="kicker">Let&apos;s talk</div>
          <h2 className="section-title">
            Have an idea? <em>Let&apos;s explore it.</em>
          </h2>
          <p className="section-intro">
            Have an idea, a technology, a project, or simply something interesting you&apos;d like to discuss? You
            can find me on LinkedIn, or send a note here.
          </p>
          <a className="btn btn--primary" href={site.linkedin} target="_blank" rel="noopener">
            LinkedIn →
          </a>

          {basket.items.length > 0 && (
            <div className="basket">
              <div className="kicker">Added to your message</div>
              <ul>
                {basket.items.map((item) => (
                  <li key={item}>
                    {item}
                    <button aria-label={`Remove ${item}`} onClick={() => basket.toggle(item)}>
                      ×
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Reveal>

        <Reveal delay={120}>
          {status === "sent" ? (
            <div className="form-done" role="status">
              <span className="form-done-mark">✓</span>
              <h3>Thank you.</h3>
              <p>Your message has been sent — I&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form
              className="form"
              action={contactForm.action}
              method="POST"
              target="hidden_iframe"
              onSubmit={() => {
                sentRef.current = true;
                setStatus("sending");
              }}
            >
              <label>
                Name
                <input type="text" name={f.name} required autoComplete="name" />
              </label>
              <label>
                Email
                <input type="email" name={f.email} required autoComplete="email" />
              </label>
              <label>
                Phone number <small>(optional)</small>
                <input type="tel" name={f.phone} autoComplete="tel" />
              </label>

              <fieldset>
                <legend>What are you reaching out about?</legend>
                <div className="choices">
                  {[...contactForm.purposes, OTHER].map((p) => (
                    <label key={p} className={`choice ${purpose === p ? "on" : ""}`}>
                      <input
                        type="radio"
                        name={f.purpose}
                        value={p}
                        required
                        checked={purpose === p}
                        onChange={() => setPurpose(p)}
                      />
                      {p === OTHER ? "Other" : p}
                    </label>
                  ))}
                </div>
                {purpose === OTHER && (
                  <textarea
                    name={f.other}
                    required
                    rows={3}
                    placeholder="Please specify"
                    value={otherText}
                    onChange={(e) => setOtherText(e.target.value)}
                  />
                )}
              </fieldset>

              {/* Hidden fields Google's own form page sends */}
              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="pageHistory" value="0" />
              <input type="hidden" name="fbzx" value={fbzx} />

              <button className="btn btn--primary btn--wide" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
            </form>
          )}
        </Reveal>
      </div>

      {/* The form posts into this invisible frame, so the page doesn't change */}
      <iframe
        name="hidden_iframe"
        title="form submit target"
        style={{ display: "none" }}
        onLoad={() => {
          if (sentRef.current) {
            setStatus("sent");
            basket.clear();
          }
        }}
      />
    </section>
  );
}
