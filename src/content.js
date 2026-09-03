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
          description: "Swiss software vendor, ~45 people, self-financed. Nine products in five years, in teams of two to six, ranging from SPAs to a decade-old Django monolith, and I stayed with most of them long enough to run them in production for years. Mainly frontend, regularly backend. As frontend referent I reviewed the team's code, took part in design and architecture decisions across projects, and helped maintain the company frontend guidelines.",
          stack: 'Python, Django, Vue 2/3, TypeScript, jQuery, GitLab CI, Docker',
          fillPage: true,
          subEntries: [
            {
              title: 'AbaHost',
              subtitle: 'private-cloud hosting for Abacus ERP',
              date: '2022–2026',
              description: "Arcanite's main product: 600+ hosted servers for 500+ Swiss companies, under a 99.7% contractual SLA. Main frontend contributor for the last 4 years, and regularly on the Django side behind it.",
              tasks: [
                "Daily maintenance of the project: bug fixes and Sentry reports, performance/scalability work, documentation, guidelines, coordination with the Hosting team.",
                "Implemented the v2 design: removed the vendored legacy theme, designed and implemented the templating logic, UI elements and systems, reworked the views across 20 of 21 Django apps.",
                "Designed and built the Abacus Server settings app: a modern Vue 3/TypeScript app living in the monolith, with a typed OpenAPI-documented Django Ninja API.",
              ],
            },
            {
              title: 'Compliance platform for Wecan',
              subtitle: 'Geneva fintech',
              date: '2023–2025',
              description: "A shared KYC/KYB network for Swiss private banks and independent asset managers, used by many financial institutions including Pictet, Lombard Odier and UBP.",
              tasks: [
                "Took part in the design and architectural decisions.",
                "Chose the stack (Vue 3, Quasar, Vite, Pinia, TanStack Query) and initiated the frontend development: routing, stores and layouting logic, then implemented most of the app frontend, under demanding design constraints and with the complexity the compliance workflows imposed on the interface.",
              ],
            },
            {
              title: 'Design system and shared libraries',
              date: '2022–2026',
              tasks: [
                "Supervised and led the integration of the internal design system (Bootstrap 5 re-skinned to IBM Carbon) and maintained its release pipeline for three and a half years (~49 versions to a private registry, with documentation published automatically per branch).",
                "Wrote and maintained a DataTables wrapper library used across ~100 call sites, and later evaluated and costed a proposal to retire it.",
              ],
            },
            {
              title: 'Other projects at Arcanite',
              tasks: [
                "Main frontend developer on a medical-coding search platform for SwissCoding, a search and annotation tool over the official Swiss ICD-10-GM and CHOP classifications that hospital reimbursement depends on.",
                "Led and implemented the frontend for a maritime fleet-emissions dashboard for Daphne Technology: vessels by IMO number, per-gas time series from InfluxDB, Mapbox fleet map.",
                "Developed and maintained multiple internal services.",
              ],
            },
          ],
        },
        {
          title: 'Independent developer',
          place: 'Freelance',
          breakBefore: true,
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
        },
      ],
    },
    {
      name: 'Education',
      icon: 'fa-graduation-cap',
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
