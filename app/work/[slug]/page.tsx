// ─────────────────────────────────────────────────────────────
//  ONE TEMPLATE → MANY PAGES
//  This single file makes a page for every item in `work` (data/site.ts):
//    /work/ip-management/, /work/technology-transfer/, ...
//  Add a new item to the list and a new page appears automatically.
// ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { site, work } from "@/data/site";
import { AddButton } from "@/components/AddButton";
import { Footer } from "@/components/Footer";

type Params = { slug: string };

// Tells Next.js which pages to build ahead of time
export function generateStaticParams(): Params[] {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  return { title: item ? `${item.title} — ${site.name}` : site.title };
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const index = work.findIndex((w) => w.slug === slug);
  if (index === -1) notFound();

  const item = work[index];
  const next = work[(index + 1) % work.length];

  return (
    <main className="detail">
      <section className="section detail-hero">
        <Link href="/#work" className="link back">
          ← All work
        </Link>
        <div className="kicker">
          {item.num} · {item.group}
        </div>
        <h1 className="section-title detail-title">{item.title}</h1>
        <p className="detail-line">{item.groupLine}</p>
      </section>

      <section className="section detail-body">
        <div className="split">
          <div>
            <h2 className="mini-head">What this involves</h2>
            <p>{item.body}</p>
            {item.example && (
              <>
                <h2 className="mini-head">An example</h2>
                <blockquote className="example">{item.example}</blockquote>
              </>
            )}
            <div className="tags">
              {item.tags.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <aside className="detail-cta">
            <strong>Want to talk about this?</strong>
            <p>Add it to your message, then send a quick note from the contact form.</p>
            <AddButton item={item.title} />
            <Link href="/#contact" className="btn btn--primary btn--wide">
              Go to contact →
            </Link>
          </aside>
        </div>
      </section>

      <section className="section">
        <Link href={`/work/${next.slug}/`} className="next-card">
          <span className="kicker">Next</span>
          <span className="next-title">{next.title} →</span>
        </Link>
      </section>
      <Footer />
    </main>
  );
}
