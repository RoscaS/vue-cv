// Variante « light » du contenu français : entrée Arcanite allégée.
//
// AbaHost et Wecan y sont rendus en prose (`description` sans `tasks`), le design
// system et les autres projets gardent leurs puces. Tout le reste — sidebar, freelance,
// formation, projets d'ingénierie, DJ — est identique à `content-fr.js`.
//
// Source rédactionnelle : `~/Documents/Perso/Job/CV/drafts/cv-fr-light.md`. Cet en-tête
// dit le format ; le pourquoi de chaque coupe est dans l'en-tête du markdown.
//
//   VUE_APP_LANG=fr-light npm run pdf cv-fr-light.pdf
//
// Toute modification de fond se reporte dans le markdown, et inversement.
export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Ingénieur full-stack senior',
  basic: '39 ans, permis B, marié,<br/> deux enfants',

  sidebar: {
    contactSection: {
      title: 'contact',
      entries: [
        { icon: 'fa-map-marker', value: 'Les Breuleux (JU)' },
        { icon: 'fa-phone', value: '078 403 29 49' },
        { icon: 'fa-envelope', value: 'sol.rosca@gmail.com' },
      ],
    },
    blocks: [
      {
        name: 'Langues',
        icon: '',
        entries: [
          { label: 'Français, roumain', items: 'Langues maternelles' },
          { label: 'Anglais', items: 'B2' },
        ],
      },
      {
        name: 'Compétences techniques',
        icon: '',
        entries: [
          { label: 'Langages', items: 'Python, JavaScript, TypeScript, HTML, CSS/SCSS' },
          { label: 'Back-end', items: 'Django, Django REST, Django Ninja, Flask, Celery, Firebase Cloud Functions, Digital Ocean Functions, pytest' },
          { label: 'Front-end', items: 'Vue 2/3, Nuxt, Quasar, Vuetify, Shadcn, Bootstrap, Tanstack, DataTables, HTMX, jQuery' },
          { label: 'Mobile', items: 'Capacitor, Cordova (Android et iOS)' },
          { label: 'Bases de données', items: 'PostgreSQL, Elasticsearch, Firebase Realtime Database, Firestore' },
          { label: 'DevOps', items: 'Linux, Shell/Bash, Docker, GitLab CI/CD, GitHub Workflows, Firebase CLI, Digital Ocean Registry' },
          { label: 'Tooling', items: 'Poetry, uv, npm, pnpm, Ruff, Pre-commit, Sentry, Figma' },
          { label: 'Paiement', items: 'Chargebee, Stripe' },
          { label: 'Architecture', items: "Design systems, design d'API et clients typés, auth (JWT, Keycloak, SAML, Azure AD), i18n" },
          { label: 'IA', items: "Coding agents sur du code en production, harnesses, design de workflows d'agents" },
          { label: 'À rafraîchir', items: 'Java, C#, Angular, React' },
        ],
      },
    ],
  },

  blocks: [
    {
      name: 'Expérience professionnelle',
      icon: 'fa-suitcase',
      entries: [
        {
          title: 'Arcanite Solutions SA',
          place: 'Développeur, référent front-end',
          location: 'Puidoux (VD)',
          url: 'arcanite.ch',
          fromDate: '2026',
          toDate: '2021',
          description: "Éditeur de logiciels suisse d'environ 45 collaborateurs. En cinq ans, j'ai travaillé sur neuf produits, principalement côté front-end mais aussi régulièrement côté back-end. De la SPA au monolithe Django legacy, avec maintenance en production sur plusieurs années. Référent front-end : code reviews, décisions de design et d'architecture, évolution des guidelines internes.",
          stack: 'Python, Django, Vue 2/3, TypeScript, jQuery, GitLab CI, Docker',
          subEntries: [
            // AbaHost et Wecan : description en prose, pas de `tasks`. C'est le point
            // de la variante light — le composant les rend déjà, rien à changer côté code.
            {
              title: 'AbaHost',
              subtitle: "hébergement cloud privé pour l'ERP Abacus",
              date: '2022–2026',
              description: "Principal contributeur front-end sur le produit phare d'Arcanite : plus de 600 serveurs hébergés pour plus de 500 entreprises suisses, sous un SLA contractuel de 99,7 %. Refonte du front-end et développement d'une application moderne intégrée au monolithe, maintenance et évolution du produit, performance et scalabilité.",
            },
            {
              title: 'Plateforme de conformité pour Wecan',
              subtitle: 'fintech genevoise',
              date: '2023–2025',
              description: "Choix de la stack, participation aux décisions de design et d'architecture, puis lancement et développement de la majeure partie du front-end d'une plateforme KYC/KYB aux workflows métier particulièrement complexes, utilisée par de nombreux établissements financiers suisses, dont Pictet, Lombard Odier et l'UBP.",
            },
            // Les deux items secondaires gardent leurs puces : ce sont des listes de
            // choses distinctes, la prose les lierait artificiellement.
            {
              title: 'Design system et librairies partagées',
              date: '2022–2026',
              tasks: [
                "Responsable du design system interne et de son pipeline de release pendant trois ans et demi (49 versions publiées).",
                "Développement et maintenance d'une librairie wrapper autour de DataTables utilisée à une centaine d'endroits, puis évaluation de sa stratégie de retrait.",
              ],
            },
            {
              title: 'Autres projets chez Arcanite',
              tasks: [
                "Développeur front-end principal sur SwissCoding, plateforme de recherche et d'annotation pour le codage médical suisse.",
                "Développement du front-end d'un dashboard d'émissions maritimes pour Daphne Technology.",
                "Développement et maintenance de plusieurs services internes.",
              ],
            },
          ],
        },
        {
          title: 'Développeur indépendant',
          place: 'Freelance',
          fromDate: '2021',
          toDate: '2018',
          subEntries: [
            {
              title: 'Padel Pro',
              subtitle: 'web, Android et iOS',
              tasks: [
                "App de gestion de tournois de padel, publiée sur Android et iOS depuis une seule codebase",
              ],
            },
            {
              title: 'Generic Website',
              subtitle: 'générateur de landing pages',
              url: 'generic-website.com',
              tasks: [
                'Générateur de landing pages avec une gestion de contenu ultra simple',
                'Facturation par abonnement pour le service',
                'Plusieurs instances en production : fromageriesa.ch, jura-coiffure.ch',
              ],
            },
            {
              title: 'Association suisse des ergothérapeutes',
              url: 'snase.ch',
              tasks: [
                'Site web avec un CMS sur mesure, avec un back-office complet mais ultra simple',
              ],
            },
          ],
          stack: 'Nuxt.js, Node, Django, Capacitor, Cordova, Firebase, Stripe, Chargebee, Digital Ocean',
          fillPage: true,
        },
      ],
    },
    {
      name: 'Formation',
      icon: 'fa-graduation-cap',
      break: true,
      entries: [
        {
          title: 'Bachelor of Science HES-SO en Informatique',
          place: 'HE-Arc Ingénierie',
          location: 'Neuchâtel',
          fromDate: '2020',
          toDate: '2016',
          description: 'Orientation Développement logiciel et multimédia · titre décerné : Ingénieur',
          tasks: [],
        },
        {
          title: 'CESS (humanités générales)',
          place: 'IFC Jonfosse',
          location: 'Liège (BE)',
          fromDate: '2013',
          toDate: '2010',
          description: "Reprise d'études à l'âge adulte, équivalent belge de la maturité gymnasiale",
          tasks: [],
        },
      ],
    },
    {
      name: "Projets d'ingénierie",
      icon: 'fa-folder-open',
      entries: [
        {
          title: "Projets d'ingénierie",
          place: 'HE-Arc',
          fromDate: '2020',
          toDate: '2019',
          description: "Réalisés pendant mes études d'ingénieur, chacun accompagné de son rapport technique.",
          tasks: [
            "<b>YARTS (2019)</b> — moteur de jeu RTS en Java et LibGDX, avec une architecture entité-composant choisie après benchmark de trois designs candidats.",
            "<b>YAARTS (2020)</b> — Unity et C# : rebuild délibéré du même jeu dans un autre moteur pour corriger l'architecture que j'avais ratée la première fois.",
            "<b>Linor (2020)</b> — détection de voie en temps réel en Python et OpenCV.",
          ],
          stack: 'Java, LibGDX, Unity, C#, Python, OpenCV',
        },
      ],
    },
    {
      name: "Avant l'informatique",
      icon: 'fa-music',
      entries: [
        {
          title: 'DJ professionnel',
          place: 'Indépendant',
          fromDate: '2016',
          toDate: '2005',
          tasks: [
            "Résidences en Belgique, en Australie et en Thaïlande",
            "Professeur de mix à la première école officielle de DJ de Belgique",
          ],
        },
      ],
    },
  ],
};
