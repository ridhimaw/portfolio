// Recent LinkedIn posts, shown with the same SociableKit widget as before.
import Script from "next/script";
import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Writing() {
  return (
    <section className="section" id="writing">
      <Reveal>
        <div className="kicker">Recent writing</div>
        <h2 className="section-title">
          From <em>LinkedIn.</em>
        </h2>
        <p className="section-intro">
          Recent articles and posts — mostly on AI, AI governance, biosecurity, IP and technology transfer.{" "}
          <a className="link" href={site.linkedinActivity} target="_blank" rel="noopener">
            See all activity on LinkedIn →
          </a>
        </p>
      </Reveal>
      <div className="writing-box">
        <div className="sk-ww-linkedin-profile-post" data-embed-id="25712610" />
      </div>
      <Script src="https://widgets.sociablekit.com/linkedin-profile-posts/widget.js" strategy="lazyOnload" />
    </section>
  );
}
