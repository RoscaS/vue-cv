export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Ingénieur full-stack senior',
  basic: '39 ans, permis C',

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
          { label: 'Néerlandais', items: 'Notions' },
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
          { label: 'Outils', items: 'Poetry, uv, npm, pnpm, Ruff, Pre-commit, Sentry, Figma' },
          { label: 'Paiement', items: 'Chargebee, Stripe' },
          { label: 'Architecture', items: "Design systems, conception d'API et clients typés, authentification (JWT, Keycloak, SAML, Azure AD), i18n" },
          { label: 'IA', items: "Agents de codage sur du code de production, harnais, conception de workflows d'agents" },
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
          description: "Société suisse de génie logiciel, ~45 collaborateurs, fondée en 2016 par des diplômés de l'EPFL, autofinancée. Sur site jusqu'en 2024, puis 80 % en télétravail. Neuf produits en cinq ans, dans des équipes de deux à six personnes, du SPA au monolithe Django vieux de dix ans. J'ai travaillé principalement sur le front-end mais régulièrement sur le back-end, et je suis resté assez longtemps sur la plupart de ces produits pour les maintenir en production pendant des années. Comme référent front-end, j'ai relu le travail de l'équipe, participé activement aux discussions de conception et d'architecture, répondu aux questions sur l'ensemble des projets et travaillé sur les guidelines front-end de l'entreprise.",
          stack: 'Python, Django, Vue 2/3, TypeScript, jQuery, GitLab CI, Docker',
          subEntries: [
            {
              title: 'AbaHost',
              subtitle: "hébergement cloud privé pour l'ERP Abacus",
              date: '2022–2026',
              description: "Produit principal d'Arcanite : plus de 600 serveurs hébergés pour plus de 500 entreprises suisses, sous un SLA contractuel de 99,7 %. Principal contributeur front-end ces quatre dernières années, et régulièrement côté Django.",
              tasks: [
                "Maintenance quotidienne du projet : corrections de bugs et rapports Sentry, travail de performance et de scalabilité, documentation, guidelines, coordination avec l'équipe Hosting.",
                "Réalisation du design v2 : suppression du thème historique embarqué, conception et implémentation de la logique de templating, des éléments et systèmes d'interface, reprise des vues sur 20 des 21 applications Django.",
                "Conception et réalisation de l'application de paramétrage des serveurs Abacus : une application Vue 3 / TypeScript moderne au sein du monolithe, sur une API Django Ninja typée et documentée en OpenAPI.",
              ],
            },
            {
              title: 'Plateforme de conformité pour Wecan',
              subtitle: 'fintech genevoise',
              date: '2023–2025',
              description: "Réseau KYC/KYB partagé pour les banques privées suisses et les gérants de fortune indépendants, utilisé par de nombreux établissements financiers dont Pictet, Lombard Odier et l'UBP.",
              tasks: [
                "Participation aux décisions de conception et d'architecture.",
                "Choix de la stack (Vue 3, Quasar, Vite, Pinia, TanStack Query) et démarrage du développement front-end : routing, stores et logique de layout, puis réalisation de la majeure partie du front-end, sous de fortes contraintes de design et avec la complexité que les processus de conformité imposaient à l'interface.",
              ],
            },
            {
              title: 'Design system et bibliothèques partagées',
              date: '2022–2026',
              tasks: [
                "Supervision et conduite de l'intégration du design system interne (Bootstrap 5 retravaillé aux couleurs d'IBM Carbon) et maintenance de sa chaîne de publication pendant trois ans et demi (une cinquantaine de versions sur un registre privé, avec documentation publiée automatiquement par branche).",
                "Écriture et maintenance d'une bibliothèque d'encapsulation de DataTables utilisée sur environ 100 points d'appel, puis évaluation et chiffrage d'une proposition de retrait.",
              ],
            },
            {
              title: 'Autres projets chez Arcanite',
              tasks: [
                "Développeur front-end principal sur une plateforme de recherche en codage médical pour SwissCoding, un outil de recherche et d'annotation sur les classifications officielles suisses ICD-10-GM et CHOP dont dépend le remboursement hospitalier.",
                "Conduite et réalisation du front-end d'un tableau de bord d'émissions maritimes pour Daphne Technology : navires par numéro IMO, séries temporelles par gaz depuis InfluxDB, carte de flotte Mapbox.",
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
                "Application de gestion de tournois de padel, publiée sur Android et iOS depuis une seule base de code",
              ],
            },
            {
              title: 'Generic Website',
              subtitle: 'générateur de landing pages',
              url: 'generic-website.com',
              tasks: [
                'Générateur de landing pages avec une gestion de contenu extrêmement simple',
                'Facturation par abonnement pour le service',
                'Plusieurs instances en production : fromageriesa.ch, jura-coiffure.ch',
              ],
            },
            {
              title: 'Association suisse des ergothérapeutes',
              url: 'snase.ch',
              tasks: [
                'Site web avec CMS sur mesure, avec une administration complète mais extrêmement simple',
              ],
            },
          ],
          stack: 'Nuxt.js, Node, Django, Capacitor, Cordova, Firebase, Stripe, Chargebee, Digital Ocean',
        },
      ],
    },
    {
      name: "Projets d'ingénierie",
      icon: 'fa-folder-open',
      entries: [
        {
          title: "Projets d'ingénierie",
          place: 'HE-Arc — auteur unique',
          fromDate: '2020',
          toDate: '2019',
          description: "Réalisés pendant mes études d'ingénieur, chacun accompagné de son rapport technique.",
          tasks: [
            "<b>YARTS (2019)</b> — moteur de jeu de stratégie temps réel en Java et LibGDX, avec une architecture entité-composant choisie après comparaison de trois conceptions candidates.",
            "<b>YAARTS (2020)</b> — Unity et C# : reconstruction délibérée du même jeu dans un autre moteur pour corriger l'architecture que j'avais mal conçue la première fois.",
            "<b>Linor (2020)</b> — détection de voie en temps réel en Python et OpenCV.",
          ],
          stack: 'Java, LibGDX, Unity, C#, Python, OpenCV',
        },
      ],
    },
    {
      name: 'Formation',
      icon: 'fa-graduation-cap',
      entries: [
        {
          title: 'Bachelor en informatique et systèmes de communication',
          place: 'HE-Arc Ingénierie',
          location: 'Neuchâtel',
          fromDate: '2020',
          toDate: '2016',
          description: 'Ingénieur HES, développement logiciel et multimédia',
          tasks: [],
        },
        {
          title: 'CESS (humanités générales)',
          place: 'IFC Jonfosse',
          location: 'Liège (BE)',
          fromDate: '2013',
          toDate: '2010',
          tasks: [],
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
