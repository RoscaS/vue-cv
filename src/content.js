export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Senior Full-Stack Engineer',
  basic: 'Python/Django · Vue/TypeScript<br>Les Breuleux (JU), Switzerland<br>Permit C<br>078 403 29 49<br>sol.rosca@protonmail.com',

  sidebar: {
    contactSection: {
      title: 'contact info',
      entries: [],
    },
    blocks: [
      {
        name: 'Backend',
        icon: '',
        entries: [
          { value: 'Python, Django', complement: 'DRF, Django Ninja, Celery' },
          { value: 'Databases:', complement: 'PostgreSQL, Elasticsearch' },
          { value: 'pytest / TDD', complement: '' },
        ],
      },
      {
        name: 'Frontend',
        icon: '',
        entries: [
          { value: 'Vue 2 & 3, TypeScript', complement: 'Nuxt, Quasar, Pinia, TanStack Query' },
          { value: 'Vite, SCSS, Tailwind', complement: '' },
          { value: 'jQuery, legacy JS', complement: '' },
        ],
      },
      {
        name: 'Platform',
        icon: '',
        entries: [
          { value: 'GitLab CI/CD, Docker', complement: '' },
          { value: 'Poetry, uv, Ruff, pnpm', complement: '' },
          { value: 'Sentry, private registries', complement: '' },
        ],
      },
      {
        name: 'Also',
        icon: '',
        entries: [
          { value: 'Design systems', complement: '' },
          { value: 'API design, typed clients', complement: '' },
          { value: 'Auth:', complement: 'JWT, OIDC, SAML, Azure AD' },
          { value: 'i18n, Weblate', complement: '' },
          { value: 'AI coding agents', complement: 'harnesses, workflow design' },
        ],
      },
      {
        name: 'Refreshing',
        icon: '',
        entries: [
          { value: 'Java, C#, Unity', complement: 'engine work 2019–20' },
        ],
      },
      {
        name: 'Languages',
        icon: '',
        entries: [
          { value: 'French:', complement: 'Native' },
          { value: 'Romanian:', complement: 'Native' },
          { value: 'English:', complement: 'B2' },
          { value: 'Dutch:', complement: 'Basic' },
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
          place: 'Full-stack engineer, frontend referent',
          url: 'arcanite.ch',
          fromDate: '2026',
          toDate: '2021',
          description: "Swiss software firm in Puidoux (VD), ~45 people; 80% remote from 2024. Frontend referent: led the frontend side of most projects and participated in their architecture, ran code review across teams, represented frontend in client meetings, helped design the frontend technical interview. Nine products in five years, from greenfield SPAs to a decade-old Django monolith.",
          tasks: [
            "<b>Agentic engineering task force (2026)</b> — internal group working out how the company should use AI coding agents: which tasks they suit, how to structure prompts and harnesses, where human review stays necessary. Daily practitioner on production code.",
            "<b>AbaHost — private-cloud hosting for Abacus ERP (2022–2026).</b> Arcanite's own product: 600+ servers for 500+ Swiss companies through 20+ resellers, under a 99.7% SLA. Frontend owner and top human contributor for the final two years.",
            "Architect of the control plane's UI rewrite: removed the vendored legacy theme (−8,600 lines), decomposed a 1,000-line base template, rebuilt every list, detail and edit screen across 20 of 21 Django apps.",
            "Built the settings application, now in production: a greenfield Vue 3 + TypeScript vertical inside the monolith, Django Ninja API, OpenAPI-driven typed client generation, one server-side navigation tree serving two frontends.",
            "Owned the modernisation toolchain — Vite, Tailwind, pnpm workspace, vue-tsc, a CI gate failing on stale build output, automated translation sync.",
            "Fixed stored XSS, a privilege-escalation path in user impersonation, and unmasked API keys in logs.",
            "<b>Compliance platform for Wecan, Geneva fintech (2023–2025).</b> Shared KYC/KYB network for private banks and independent asset managers, reported by the vendor as used by 100+ financial institutions including Pictet, Lombard Odier and UBP; built under the FinIA/FinSA regime.",
            "Founding frontend engineer: created the codebase, chose the stack (Vue 3, Quasar, Vite, TypeScript, Pinia, TanStack Query), owned the platform layer for the application's entire two-year life.",
            "Built transparent JWT refresh via HTTP interceptors, OIDC SSO, client-side OpenPGP key management, and a reusable answer vault so a KYC datum is entered once and shared across counterparties.",
            "Set the quality strategy with no test framework in place: zero-warning lint gate, type checking in CI, i18n-key completeness gate, Sentry with CI source maps.",
            "<b>Design system and shared libraries (2022–2026).</b> Founded the company's design system (Bootstrap 5 re-skinned to IBM Carbon) and owned its release engineering for 3.5 years: ~49 versions to a private registry through a gated CI pipeline.",
            "Built per-branch living documentation — a demo site published automatically for every branch, garbage-collected on merge.",
            "Sole author of a DataTables wrapper used across ~100 call sites. Later wrote the proposal to retire it: capability comparison, call-site inventory, migration costed at 16 developer-days, risk register.",
            "<b>Medical-coding platform for SwissCoding Group (2021–2022).</b> Search and annotation over Switzerland's official ICD-10-GM and CHOP classifications. Bootstrapped the frontend from an empty repository and wrote ~three-quarters of it over the following year.",
            "Designed a cross-stack component-injection pattern: the Django API wraps code references in custom tags the Vue client compiles at runtime, so rich previews are opt-in per client.",
            "<b>Also:</b> maritime emissions analytics for Daphne Technology; PolyTicket, Arcanite's ticketing platform used for 100+ Swiss events; billing back-office for Abacus DeepCloud; four internal services as sole author.",
            "<b class='accent'>Python, Django, Vue 2/3, TypeScript, jQuery, GitLab CI, Docker</b>",
          ],
        },
        {
          title: 'Generic Website',
          place: 'Founder / Independent',
          url: 'generic-website.ch',
          fromDate: '2021',
          toDate: '2020',
          tasks: [
            'Generator for content-managed brochure sites, for people without the time to learn Wix',
            'Several production instances: fromageriesa.ch, jura-coiffure.ch',
            "<b class='accent'>Nuxt.js, Node, Django</b>",
          ],
        },
        {
          title: 'Association Neuchâteloise des Ergothérapeutes',
          place: 'Independent',
          url: 'snase.ch',
          fromDate: '2019',
          toDate: '',
          tasks: [
            'Website with a custom CMS built to make administration as simple as possible',
            "<b class='accent'>Nuxt.js, Django</b>",
          ],
        },
      ],
    },
    {
      name: 'Earlier projects',
      icon: 'fa-folder-open',
      entries: [
        {
          title: 'Two RTS game engines',
          place: 'HE-Arc — sole author of both engines',
          fromDate: '2020',
          toDate: '2019',
          description: 'Built a year apart, each with a ~50-page technical report. Every commit in both repositories is mine.',
          tasks: [
            "<b>YARTS (2019)</b> — Java 8, LibGDX, Ashley ECS, Box2D · 137 classes, ~11,200 lines. Entity-component architecture chosen by benchmarking three candidate designs from 50 to 10,000 entities. A* pathfinding behind a runtime toggle with a guaranteed fallback. F1–F12 in-game debug suite.",
            "<b>YAARTS (2020)</b> — Unity, C#, URP · ~7,600 lines. A deliberate rebuild of the same game in a different engine to correct the first version's architecture. Evaluated Unity DOTS in depth and rejected it as too volatile in preview.",
          ],
        },
      ],
    },
    {
      name: 'Education',
      icon: 'fa-graduation-cap',
      entries: [
        {
          title: 'BSc Computer Science & Engineering',
          place: 'HE-Arc Ingénierie',
          location: 'Neuchâtel',
          fromDate: '2020',
          toDate: '2016',
          description: 'Swiss HES engineering degree, software development and multimedia',
          tasks: [],
        },
        {
          title: 'CESS (general secondary)',
          place: 'IFC Jonfosse',
          location: 'Liège (BE)',
          fromDate: '2013',
          toDate: '2010',
          tasks: [],
        },
      ],
    },
  ],
};
