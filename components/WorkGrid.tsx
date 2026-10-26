// "Things I've worked on" — a swipeable row of cards.
// Each card opens its own page (/work/<slug>) and can be added to your message.
import Link from "next/link";
import { work } from "@/data/site";
import { AddButton } from "./AddButton";
import { Reveal } from "./Reveal";

export function WorkGrid() {
  return (
    <section className="section" id="work">
      <Reveal>
        <div className="kicker">Things I&apos;ve worked on</div>
        <h2 className="section-title">
          Ideas to protection. <em>Protection to impact.</em>
        </h2>
        <p className="section-intro">
          My work sits at the intersection of <b>IP, technology, and business development</b>. Open a card
          for the details, or add the ones you&apos;d like to talk about to your message.
        </p>
      </Reveal>

      <div className="work-rail">
        {work.map((w) => (
          <article key={w.slug} className="work-card">
            <span className="work-num">{w.num}</span>
            <span className="work-group">{w.group}</span>
            {/* The link stretches over the whole card (see .work-link::after in CSS) */}
            <Link href={`/work/${w.slug}/`} className="work-link">
              <span className="work-title">{w.title}</span>
            </Link>
            <span className="work-short">{w.short}</span>
            <span className="work-foot">
              <span className="work-open">Open →</span>
              <AddButton item={w.title} />
            </span>
          </article>
        ))}
      </div>
      <p className="rail-hint">Swipe to see all →</p>
    </section>
  );
}
