// About me + a little "code card" (like pankaj.ts on the reference site).
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="split">
        <Reveal>
          <div className="kicker">About me</div>
          <h2 className="section-title">
            Curiosity, with a <em>scientific temperament.</em>
          </h2>
          <p>
            I am a versatile generalist with a curiosity-driven approach and cross-functional experience spanning{" "}
            <b>intellectual property, technology transfer, innovation, and business development.</b>
          </p>
          <p>
            With a <b>Master&apos;s degree in Biochemistry</b>, I have a strong foundation in the life sciences and a
            natural interest in how science and technology translate into real-world applications — spanning
            healthcare, biotechnology, and emerging technologies.
          </p>
          <p>
            I have worked with <b>researchers, startups, academic institutions, industry partners, MSMEs, and
            incubators</b> across the innovation ecosystem — on IP assessment and analytics, prior-art and
            patentability searches, market and competition analysis, technology transfer, licensing, and business
            development.
          </p>
          <p>
            More recently, my interest has grown toward <b>AI, AI security, and AI governance</b> — I&apos;m still
            new to this space and actively building my understanding of how these systems are built, secured, and
            regulated — as well as <b>biosecurity</b>, where my biochemistry background meets questions of safety
            and risk in the life sciences.
          </p>
          <p>
            At the heart of it, I enjoy figuring things out — especially problems that sit between disciplines and
            don&apos;t have an obvious, predefined answer.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="code-card" aria-label="A playful summary in code">
            <div className="code-bar">
              <i />
              <i />
              <i />
              <span>ridhima.ts</span>
            </div>
            <pre>
              <code>
                <span className="c-k">const</span> ridhima = {"{\n"}
                {"  "}role: <span className="c-s">&quot;IP &amp; Technology Transfer&quot;</span>,{"\n"}
                {"  "}background: <span className="c-s">&quot;M.Sc. Biochemistry&quot;</span>,{"\n"}
                {"  "}credentials: [<span className="c-s">&quot;Trademark Agent&quot;</span>,{" "}
                <span className="c-s">&quot;RTTP (cand.)&quot;</span>],{"\n"}
                {"  "}curiousAbout: [<span className="c-s">&quot;AI governance&quot;</span>,{" "}
                <span className="c-s">&quot;biosecurity&quot;</span>],{"\n"}
                {"  "}dances: <span className="c-s">&quot;Kuchipudi&quot;</span>,{"\n"}
                {"  "}openToTalk: <span className="c-k">true</span>,{"\n"}
                {"};\n\n"}
                ridhima.connect(yourIdea); <span className="c-c">{"// → let's explore it"}</span>
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
