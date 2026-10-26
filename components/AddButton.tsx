"use client";
// "+ Add to message" — puts a topic into the basket, which pre-fills the contact form.
import { useBasket } from "./Providers";

export function AddButton({ item }: { item: string }) {
  const basket = useBasket();
  const added = basket.has(item);
  return (
    <button
      type="button"
      className={`add-btn ${added ? "is-added" : ""}`}
      aria-pressed={added}
      onClick={(e) => {
        e.preventDefault(); // don't follow the card's link
        e.stopPropagation();
        basket.toggle(item);
      }}
    >
      {added ? "✓ Added" : "+ Add to message"}
    </button>
  );
}
