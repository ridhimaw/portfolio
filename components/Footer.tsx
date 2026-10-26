import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <span className="brand-mark">R</span> © {new Date().getFullYear()} {site.name}
      </div>
      <div>
        This webpage was created by me · built with Next.js ·{" "}
        <Link href="/#home" className="link">
          Stay curious ↑
        </Link>
      </div>
    </footer>
  );
}
