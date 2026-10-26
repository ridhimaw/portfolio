// ─────────────────────────────────────────────────────────────
//  ALL THE WORDS ON YOUR SITE LIVE HERE.
//  To change text, links or add a new card, edit this file only.
//  The components read from these lists and draw the page.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Ridhima",
  title: "Ridhima — IP · Technology · AI · Biosecurity",
  description:
    "A curious generalist working across intellectual property, technology and innovation, with a growing focus on AI governance, AI security and biosecurity.",
  tagline: "IP · Technology · AI Governance · Biosecurity",
  linkedin: "https://www.linkedin.com/in/ridhimah/",
  linkedinActivity: "https://www.linkedin.com/in/ridhimah/recent-activity/all/",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Writing", href: "#writing" },
  { label: "Creative", href: "#creative" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export type Highlight = {
  big: string;
  title: string;
  sub: string;
  label: string;
  copy: string;
};

export const highlights: Highlight[] = [
  {
    big: "03",
    title: "Tech transfers led end to end",
    sub: "Several others supported",
    label: "03 · END TO END",
    copy:
      "I led the technology transfer process end to end for three technologies in the disaster management domain, from evaluation and IP considerations through to licensing.\n\nI have also supported several other technology transfers and commercialization efforts across domains, including industrial design and engineering.",
  },
  {
    big: "TM",
    title: "Registered Indian Trademark Agent",
    sub: "Professional qualification",
    label: "INDIA · TRADEMARKS",
    copy:
      "A registered Indian Trademark Agent, authorized to file and prosecute trademark applications in India.",
  },
  {
    big: "©",
    title: "Managed copyright assignments",
    sub: "Including film & media",
    label: "COPYRIGHT",
    copy: "Managed copyright assignments, including for a film and media firm.",
  },
  {
    big: "RTTP",
    title: "Candidate RTTP",
    sub: "Registered Technology Transfer Professional",
    label: "PROFESSIONAL DEVELOPMENT",
    copy:
      "Candidate for Registered Technology Transfer Professional (RTTP), an international professional recognition for technology transfer and knowledge exchange practitioners.",
  },
];

export type WorkArea = {
  slug: string; // used in the page address: /work/<slug>
  num: string;
  group: string;
  groupLine: string;
  title: string;
  short: string; // one line shown on the card
  body: string;
  example?: string;
  tags: string[];
};

export const work: WorkArea[] = [
  {
    slug: "ip-management",
    num: "01",
    group: "IP & Technology",
    groupLine: "Understanding, evaluating, and protecting ideas.",
    title: "IP Management & Techno-Commercial Analysis",
    short: "Prior-art searches, IP analytics, NDAs, MoUs and licence agreements.",
    body:
      "Prior-art and patentability searches, IP analytics, and documentation including NDAs, MoUs, term sheets and licence agreements.",
    tags: ["Trademark agent", "IP analytics"],
  },
  {
    slug: "technology-transfer",
    num: "02",
    group: "IP & Technology",
    groupLine: "Taking technologies beyond the laboratory.",
    title: "Technology Transfer & Commercialization",
    short: "Taking technologies from the lab to licensed partners.",
    body:
      "Technology and product evaluation, competition and market analysis, use-case and user mapping, industry partner identification, and technology transfer.",
    example:
      "Led end to end commercialization of three technologies in disaster management, from partner identification through to licensing.",
    tags: ["3 technologies licensed", "Market analysis"],
  },
  {
    slug: "outreach",
    num: "03",
    group: "Business Development & Outreach",
    groupLine: "Connecting ideas with people, markets, and opportunities.",
    title: "Stakeholder Engagement & Outreach",
    short: "Events, partnerships, newsletters and social media.",
    body:
      "Prepare marketing collateral, attend conferences, represent and speak at industry events, organise technology showcase events and seminars, and engage with outside vendors. For the organization: social media accounts, newsletter editing, website updates, email marketing and social media outreach.",
    tags: ["Outreach", "Partnerships", "Content"],
  },
  {
    slug: "startups",
    num: "04",
    group: "Startups & Innovation",
    groupLine: "Helping emerging ideas find direction.",
    title: "Startups & Innovation",
    short: "IP analytics, grants data and funding advisory for startups.",
    body:
      "Exposure across startup and innovation ecosystems: IP analytics, technology transfer, grant data curation and advisory on startup funding.",
    example:
      "Curated startup grants information and funding data for a one-stop grants platform.",
    tags: ["Funding", "Advisory"],
  },
  {
    slug: "ai-governance",
    num: "05",
    group: "AI Governance & Biosecurity",
    groupLine: "Thinking about emerging technology, responsibly.",
    title: "AI Governance & Biosecurity",
    short: "A growing interest in AI ethics, governance and biosecurity.",
    body: "A growing interest in AI, GenAI, AI ethics, AI governance and biosecurity.",
    example:
      "Still early days here: actively reading, learning, and building understanding of AI governance and biosecurity frameworks.",
    tags: ["AI safety", "Biosecurity"],
  },
];

export const pulse = {
  title: "IP & Tech Transfer Pulse",
  url: "https://ridhimaw.github.io/ip-techtransfer-news/",
  copy:
    "A news site I built and curate that updates itself every day. It gathers the latest on patents, licensing, university spin-offs, innovation policy and technology transfer, with a dedicated India section, all from open, non-paywalled sources.",
  tags: ["Patents", "Licensing", "Tech Transfer", "Policy", "India"],
};

export const topics: { name: string; copy: string }[] = [
  { name: "AI", copy: "AI is the centre of my current exploration — particularly how increasingly capable systems are governed, secured, and used responsibly." },
  { name: "AI Governance", copy: "Exploring the frameworks, institutions, incentives, and practical questions involved in governing increasingly capable AI systems." },
  { name: "AI Security", copy: "Learning about how AI systems can be secured, where they can fail, and how security thinking changes as AI capabilities grow." },
  { name: "Biosecurity", copy: "Exploring biosecurity and biosafety through the lens of risk, emerging technology, and the life sciences." },
  { name: "Science", copy: "A continuing curiosity about how scientific ideas become technologies, products, and real-world applications." },
  { name: "Technology", copy: "Understanding technologies deeply enough to connect technical possibilities with users, markets, IP, and impact." },
  { name: "Intellectual Property", copy: "Exploring how IP can help ideas move from research and invention toward protection, partnerships, and commercialization." },
  { name: "Innovation", copy: "Interested in the systems and people that help promising ideas move from possibility to adoption." },
  { name: "Healthcare", copy: "Curious about technologies and innovations that can improve health, care, and the systems around them." },
  { name: "Creative Technology", copy: "Experimenting with generative AI and creative tools for visual storytelling, communication, and making." },
];

export const arcade = {
  url: "https://ridhimaw.github.io/arcade/",
  games: [
    { name: "Orbit Hop", url: "https://ridhimaw.github.io/arcade/orbit-hop/", copy: "Circle around two rings. Tap to switch rings, grab the stars and dodge the red blocks." },
    { name: "Skyline Stack", url: "https://ridhimaw.github.io/arcade/skyline-stack/", copy: "Drop each sliding floor on top of the last one. Whatever hangs over gets cut off. How high can you build?" },
    { name: "Neon Dash", url: "https://ridhimaw.github.io/arcade/neon-dash/", copy: "An endless runner. Jump the blocks, tap twice to double-jump and collect coins for bonus points." },
    { name: "Brain Gym", url: "https://ridhimaw.github.io/arcade/brain-gym/", copy: "A 5-minute daily workout for speed, memory, focus and flexibility. Every exercise adapts to your level." },
  ],
};

export const creativeAI = {
  videoId: "3T4tpL3WqEI",
  videoTitle: "Google Gemini AI Sample",
  moreUrl: "https://drive.google.com/drive/folders/1puZtk_IqCG0vqqHsVqZJKwTmVBKayh9Q?usp=share_link",
  kinds: [
    { label: "Video", copy: "AI-assisted video & cinematic storytelling" },
    { label: "Image", copy: "Generative images, visual concepts & compositions" },
    { label: "Audio", copy: "AI-assisted audio and sound experiments" },
    { label: "Animation", copy: "Animated sequences and motion-based content" },
  ],
};

// Google Form that receives the contact messages
export const contactForm = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLScHAxB90uLHUVNyo3rsdCfZsLDUTK46352olCRCZDLwSVe_wA/formResponse?embedded=true",
  fields: {
    name: "entry.2005620554",
    email: "entry.1045781291",
    phone: "entry.1166974658",
    purpose: "entry.839337160",
    other: "entry.839337160.other_option_response",
  },
  purposes: ["My CV/Resume", "My Contact"],
};
