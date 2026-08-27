// "Light" variant of the English content: trimmed Arcanite entry.
//
// AbaHost and Wecan render as prose (`description`, no `tasks`); the design system and
// other projects keep their bullets. Everything else — sidebar, freelance, education,
// engineering projects, DJ — is identical to `content.js`.
//
// Editorial source: `~/Documents/Perso/Job/CV/drafts/cv-en-light.md`, itself the English
// counterpart of `cv-fr-light.md`. Cuts made on one side are made on the other.
//
//   VUE_APP_LANG=en-light npm run pdf cv-en-light.pdf
//
// Pagination: no `fillPage` on Arcanite and no `breakBefore` on the freelance entry, so the
// whole Experience section holds page 1; `fillPage` moves to the freelance entry, which now
// closes that page; `break: true` on the Education block, because it breaks with its section
// heading — `breakBefore` would strand the heading at the foot of page 1. Chrome ignores
// `break-after: avoid` when printing, so there is no CSS route to this.
export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Senior Full-Stack Engineer',
  basic: '39 years old, B permit, married, two children',

  sidebar: {
    contactSection: {
      title: 'contact info',
      entries: [
        { icon: 'fa-map-marker', value: 'Les Breuleux (JU)' },
        { icon: 'fa-phone', value: '078 403 29 49' },
        { icon: 'fa-envelope', value: 'sol.rosca@gmail.com' },
      ],
    },
    blocks: [
      {
        name: 'Languages',
        icon: '',
        entries: [
          { label: 'French, Romanian', items: 'Native' },
          { label: 'English', items: 'B2' },
        ],
      },
      {
        name: 'Tech stack',
        icon: '',
        entries: [
          { label: 'Programming languages', items: 'Python, JavaScript, TypeScript, HTML, CSS/SCSS' },
          { label: 'Back-end', items: 'Django, Django REST, Django Ninja, Flask, Celery, Firebase Cloud Functions, Digital Ocean Functions, pytest' },
          { label: 'Front-end', items: 'Vue 2/3, Nuxt, Quasar, Vuetify, Shadcn, Bootstrap, Tanstack, DataTables, HTMX, jQuery' },
          { label: 'Mobile', items: 'Capacitor, Cordova (Android & iOS)' },
          { label: 'Databases', items: 'PostgreSQL, Elasticsearch, Firebase Realtime Database, Firestore' },
          { label: 'DevOps', items: 'Linux, Shell/Bash, Docker, GitLab CI/CD, GitHub Workflows, Firebase CLI, Digital Ocean Registry' },
          { label: 'Tooling', items: 'Poetry, uv, npm, pnpm, Ruff, Pre-commit, Sentry, Figma' },
          { label: 'Payment systems', items: 'Chargebee, Stripe' },
          { label: 'Architecture', items: 'Design systems, API design and typed clients, auth (JWT, Keycloak, SAML, Azure AD), i18n' },
          { label: 'AI', items: 'Coding agents on production work, harnesses, agent workflow design' },
          { label: 'Refreshing', items: 'Java, C#, Angular, React' },
        ],
      },
    ],
  },

  blocks: [
    {
      name: 'Experience',
      icon: 'fa-suitcase',
      entries: [
        {
          title: 'Arcanite Solutions SA',
          place: 'Developer, frontend referent',
          location: 'Puidoux (VD)',
          url: 'arcanite.ch',
          fromDate: '2026',
          toDate: '2021',
          description: "Swiss software company of around 45 people. Worked on nine products in five years, mainly on the frontend but regularly on the backend as well. From SPAs to a legacy Django monolith, with maintenance in production over several years. Frontend referent: code reviews, design and architecture decisions, evolution of the internal guidelines.",
          stack: 'Python, Django, Vue 2/3, TypeScript, jQuery, GitLab CI, Docker',
          subEntries: [
            // AbaHost and Wecan: prose `description`, no `tasks`. That is the whole point of
            // the light variant — BlockEntry already renders it, no component change needed.
            {
              title: 'AbaHost',
              subtitle: 'private-cloud hosting for Abacus ERP',
              date: '2022–2026',
              description: "Main frontend contributor on Arcanite's flagship product: 600+ hosted servers for 500+ Swiss companies, under a 99.7% contractual SLA. Frontend rework and development of a modern application integrated into the monolith, product maintenance and evolution, performance and scalability.",
            },
            {
              title: 'Compliance platform for Wecan',
              subtitle: 'Geneva fintech',
              date: '2023–2025',
              description: "Stack choice, involvement in design and architecture decisions, then initiated and built most of the frontend of a KYC/KYB platform with particularly complex business workflows, used by many Swiss financial institutions including Pictet, Lombard Odier and UBP.",
            },
            // The two secondary items keep their bullets: they are lists of distinct things,
            // and prose would tie them together artificially.
            {
              title: 'Design system and shared libraries',
              date: '2022–2026',
              tasks: [
                "Owned the internal design system and its release pipeline for three and a half years (49 versions published).",
                "Wrote and maintained a DataTables wrapper library used across ~100 call sites, then evaluated its retirement strategy.",
              ],
            },
            {
              title: 'Other projects at Arcanite',
              tasks: [
                "Main frontend developer on SwissCoding, a search and annotation platform for Swiss medical coding.",
                "Built the frontend of a maritime emissions dashboard for Daphne Technology.",
                "Developed and maintained multiple internal services.",
              ],
            },
          ],
        },
        {
          title: 'Independent developer',
          place: 'Freelance',
          fromDate: '2021',
          toDate: '2018',
          subEntries: [
            {
              title: 'Padel Pro',
              subtitle: 'web, Android & iOS',
              tasks: [
                'App to manage padel tournaments, shipped to Android and iOS from one codebase',
              ],
            },
            {
              title: 'Generic Website',
              subtitle: 'landing-page generator',
              url: 'generic-website.com',
              tasks: [
                'Landing pages generator with an extremely easy way to manage the content',
                'Subscription billing for the service',
                'Several production instances: fromageriesa.ch, jura-coiffure.ch',
              ],
            },
            {
              title: 'Swiss Association of Occupational Therapists',
              url: 'snase.ch',
              tasks: [
                'Website with a custom CMS, with a complete but extremely simple administration',
              ],
            },
          ],
          stack: 'Nuxt.js, Node, Django, Capacitor, Cordova, Firebase, Stripe, Chargebee, Digital Ocean',
          fillPage: true,
        },
      ],
    },
    {
      name: 'Education',
      icon: 'fa-graduation-cap',
      break: true,
      entries: [
        {
          title: 'BSc HES-SO in Computer Science',
          place: 'HE-Arc Ingénierie',
          location: 'Neuchâtel',
          fromDate: '2020',
          toDate: '2016',
          description: 'Major in Software and Multimedia Development · Swiss HES engineering degree',
          tasks: [],
        },
        {
          title: 'CESS (general secondary)',
          place: 'IFC Jonfosse',
          location: 'Liège (BE)',
          fromDate: '2013',
          toDate: '2010',
          description: 'Adult catch-up programme, the Belgian counterpart of the Swiss maturité gymnasiale',
          tasks: [],
        },
      ],
    },
    {
      name: 'Earlier engineering projects',
      icon: 'fa-folder-open',
      entries: [
        {
          title: 'Engineering projects',
          place: 'HE-Arc',
          fromDate: '2020',
          toDate: '2019',
          description: 'Built during my engineering degree, each with its own technical report.',
          tasks: [
            "<b>YARTS (2019)</b> — RTS game engine in Java and LibGDX, with an entity-component architecture chosen by benchmarking three candidate designs.",
            "<b>YAARTS (2020)</b> — Unity and C#: a deliberate rebuild of the same game in a different engine to correct the architecture I had got wrong the first time.",
            "<b>Linor (2020)</b> — real-time lane detection in Python and OpenCV.",
          ],
          stack: 'Java, LibGDX, Unity, C#, Python, OpenCV',
        },
      ],
    },
    {
      name: 'Before software',
      icon: 'fa-music',
      entries: [
        {
          title: 'Professional DJ',
          place: 'Independent',
          fromDate: '2016',
          toDate: '2005',
          tasks: [
            'Residencies in Belgium, Australia and Thailand',
            'Mixing instructor at the first official DJ school in Belgium.',
          ],
        },
      ],
    },
  ],
};
