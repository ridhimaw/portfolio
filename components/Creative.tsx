// "Off the Clock" — games, AI experiments and classical dance.
import { arcade, creativeAI } from "@/data/site";
import { Reveal } from "./Reveal";

export function Creative() {
  return (
    <section className="section section--violet" id="creative">
      <Reveal>
        <div className="kicker">Creative practice</div>
        <h2 className="section-title">
          Off the <em>clock.</em>
        </h2>
        <p className="section-intro">
          Different practices, same instinct — play, precision, and expression. One is a new curiosity; the
          other, years in the making.
        </p>
      </Reveal>

      {/* Games */}
      <Reveal>
        <div className="sub-head">
          <div>
            <div className="kicker">With play · Mini Arcade</div>
            <h3>Games I built</h3>
            <p>Small browser games and a daily brain workout, made for fun. Quick to learn, free to play, and they work on phone or desktop.</p>
          </div>
          <a className="btn" href={arcade.url} target="_blank" rel="noopener">
            Visit the Arcade ↗
          </a>
        </div>
      </Reveal>
      <div className="game-grid">
        {arcade.games.map((g, i) => (
          <Reveal key={g.name} delay={i * 80}>
            <a className="game" href={g.url} target="_blank" rel="noopener">
              <span className="game-orb" aria-hidden />
              <strong>{g.name}</strong>
              <span>{g.copy}</span>
              <em>Play {g.name} →</em>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="split split--top">
        {/* AI experiments */}
        <Reveal>
          <div className="kicker">With machines · AI / creative experiments</div>
          <p>
            I explore <b>generative AI and creative technology</b> for visual storytelling, communication, and
            experimentation — videos, images, audio, animation, visualization.
          </p>
          <div className="video">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${creativeAI.videoId}`}
              title={creativeAI.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="kinds">
            {creativeAI.kinds.map((k) => (
              <div key={k.label} className="kind">
                <b>{k.label}</b>
                <span>{k.copy}</span>
              </div>
            ))}
          </div>
          <a className="btn" href={creativeAI.moreUrl} target="_blank" rel="noopener">
            View more samples ↗
          </a>
        </Reveal>

        {/* Dance */}
        <Reveal delay={120}>
          <div className="dance">
            <div className="kicker">With movement · Beyond work</div>
            <h3>Indian Classical Dance</h3>
            <p>
              I have formal training in <b>Kuchipudi</b> and familiarity with <b>Mohiniyattam and Bharatanatyam</b>.
            </p>
            <p>
              I&apos;ve served as a <b>substitute teacher</b> for classical dance classes at a dance institute, and
              assisted with <b>workshops and backstage work</b> — sharing what I&apos;ve learned while continuing
              to explore these traditional art forms.
            </p>
            <div className="tags">
              {["Kuchipudi", "Mohiniyattam", "Bharatanatyam", "Teaching"].map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
