// <br>


export default {
  firstname: "Sol",
  lastname: "Rosca",
  title: "Software Engineer",
  basic: "Belge, 33 ans<br>Permis de conduire B (CH)<br>2340 Le Noirmont, Jura<br><br>078 403 29 49<br>sol.rosca@protonmail.com<br>github.com/roscas",

  sidebar: {
    contactSection: {
      title: "contact info",
      entries: [
        // Si vide, n'affiche pas la section
        // {
        //   icon: "fa-globe",
        //   value: "roscas.ch",
        // },
        // {
        //   icon: "fa-github",
        //   value: "/roscas",
        // },
        // {
        //   icon: "fa-phone",
        //   value: "078 403 29 49",
        // },
        // {
        //   icon: "fa-envelope",
        //   value: "sol.rosca@gmail.com",
        // },

      ],
    },
    blocks: [
      // {
      //   name: "Qualités",
      //   icon: '',
      //   entries: [
      //     {
      //       value: 'Passionné',
      //       complement: '',
      //     },
      //     {
      //       value: 'Persévérant',
      //       complement: '',
      //     },
      //     {
      //       value: 'Soucis du détail',
      //       complement: '',
      //     },
      //   ],
      // },
      {
        name: "Langues",
        icon: '',
        entries: [
          {
            value: 'Français:',
            complement: 'Langue maternelle bis',
          },
          {
            value: 'Anglais:',
            complement: 'Niveau B2<br><span style="margin-left: 2px">3 ans en immersion (au)</span>',
          },
          {
            value: 'Néerlandais:',
            complement: 'Notions',
          },
          {
            value: 'Roumain:',
            complement: 'Langue maternelle',
          },
        ]
      },
      {
        name: "Bonnes notions",
        icon: '',
        entries: [
          {
            value: 'Git',
            complement: "",
          },
          {
            value: 'Docker/compose',
            complement: "",
          },
          {
            value: 'Linux (Os principale)',
            complement: '',
          },
          {
            value: 'OWASP',
            complement: '',
          },
          {
            value: 'Android Studio (Jetbrain)',
            complement: '',
          },
          {
            value: 'API Android',
            complement: '',
          },
          {
             value: 'Material design (Vuetify)',
             complement: '',
           },
           {
             value: 'Préprocesseurs:',
             complement: 'Sass, Stylus, Pug (Jade)',
           },
        ],
      },
      {
        name: "Loisirs",
        icon: '',
        entries: [
          {
            value: 'Plongée',
            complement: 'Dive Master certifié SSI',
          },
          {
            value: 'Voyages',
            complement: "Avant les années 2020...",
          },
          {
            value: 'Lecture',
            complement: 'Essais, philosophie, politique, <span style="margin-left: 2px">histoire</span>, informatique, tech<br>',
          },
        ],
      },
    ]
  },

  // SECTIONS DU CORP DU CV

  blocks: [
    {
      name: "formation",
      icon: "fa-graduation-cap",
      entries: [
        {
          title: "Bachelor en sciences informatiques",
          place: "HE-Arc Ingénerie",
          location: "Neuchâtel",
          fromDate: "2020",
          toDate: "2016",
          description: "Ingénieur HES en développement logiciel et multimédia",
          tasks: [
          ],
        },
        {
          title: "Humanités générales (CESS)",
          place: "IFC Jonfosse",
          location: "Liège (BE)",
          fromDate: "2013",
          toDate: "2010",
          description: "CESS de promotion sociale",
          concise: false,
          tasks: [

          ],
        },
      ],
    },
    {
      name: "Expérience",
      icon: "fa-suitcase",
      entries: [
        {
          title: "Site web de l'association Neuchâteloise des ergothérapeutes",
          place: "Indépendant",
          url: "https://snase.ch",
          fromDate: "2019",
          toDate: "",
          tasks: [
            "Site web avec CMS sur mesure visant à rendre l'administration aussi simple que possible.",
            "Éditeur d'articles hybride (WYSIWYG/Markdown) avec aperçu \"<i>as it will look when it's posted</i>\".",
            "Back office d'administration avancée des membres, institutions et cabinets.",
            "Editeur de newsletters (contenu riche + fallback) avec système d'archivage et mailing lists.",
            "<b class='accent'>Nuxt.js + Django DRF</b>",
          ],
        },
        {
          title: "Vue-write",
          place: "Indépendant",
          location: "",
          fromDate: "2018",
          toDate: "",
          concise: false,
          tasks: [
            "Alternative à Pandoc pour la génération rapports PDF écrits en markdown.",
            "Solutionne le problème de numérotation des pages et de table des matières des projets similaires.",
            "Des abstractions permettent à l'utilisateur d'étendre la syntaxe markdown via components Vue.js.",
            "Actuellement en phase de refactoring et documentation en vue d'une première release.",
            "<b class='accent'>Node.js & Vue.js</b>",
          ],
        },
        {
          title: "Generic Website for All",
          place: "Indépendant (v1.0), Travail de Bachelor (v2.0)",
          url: "https://roscas.ch (staging)",
          fromDate: "",
          toDate: "2017",
          tasks: [
            "Générateur de sites web vitrine au contenu dynamique ultra simple à administrer.",
            "Produit visant les personnes n'ayant pas le temps/envie d'apprendre à utiliser Wix. ",
            "La v2.0 est architecturée de façon à pouvoir évoluer vers une distribution sous forme de SAAS.",
            "La v1.0 du projet possède plusieurs instances en production.",
            "<b class='accent'>Nuxt.js + Django DRF</b>",
          ],
        },
        {
          title: "DJ professionnel",
          place: "Indépendant",
          location: "Belgique, Autralie, Thaïlande",
          fromDate: "2016",
          toDate: "2005",
          description: "",
          concise: false,
          tasks: [
            "Multiples résidences",
            "Évènements privés (mariages, anniversaires, ...)",
            "Prestations à l'étranger",
          ],
        },
        {
          title: "Peintre en bâtiment",
          place: "Painting WA",
          location: "Margaret River (AU)",
          fromDate: "2015",
          toDate: "2013",
          tasks: [
          ],
        },
        {
          title: "Délégué commercial & professeur en techniques de mix",
          place: "Academix DJ School",
          location: "Bruxelles (BE)",
          fromDate: "2009",
          toDate: "2008",
          tasks: [
            "Recherche de sponsors et négociations.",
            "Recherche d'établissements pour l'insertion professionnelle d'élèves en fin de cursus.",
            "Encadrement des élèves lors de leur insertion professionnelle.",
            "2 cours de 2h par semaine pour des groupes de 4 à 8 élèves + cours particuliers",
          ],
        },
      ],
    },
    {
      name: "Projets",
      icon: "fa-folder-open",
      break: true,
      entries: [
        {
          title: "Blogs",
          place: "Personnel",
          url: "roscas.github.io, intra.jrosk.ch",
          fromDate: "2020",
          toDate: "2017",
          description: "Principalement utilisés pour la mise au propre des notes de cours. <span class='accent'>Jekyll, Vuepress</span>",

        },
        {
          title: "Projets pertinents",
          place: "HE-Arc & Personnel",
          // concise: true,
          location: "",
          fromDate: "2020",
          toDate: "2016",
          description: "",
          tasks: [
            "RTS en 2D utilisant une architecture ECS. <b class='accent'>Java, Kotlin + LibGDX</b>.",
            "Prototype de RTS en 3D retenu pour la capsule vidéo  <br> promotionnelle 2021 de la section DLM de la HE-Arc. <b class='accent'>C# + Unity3D</b>",
            "Système robuste de détection de bandes pour voitures autonomes. <b class='accent'>OpenCV, Python</b>",
            "Écriture d'un package Python dédiée à la vision stéréoscopique. <b class='accent'>OpenCV, Python</b>",
            "Framework backend MVC from scratch. <b class='accent'>PHP</b>",
            "Simulation gravitationnelle à n corps (Testable en ligne: nbody.jrosk.ch). <b class='accent'>Javascript</b>",
            "IA Othello gagnante du tournoi interclasse (HE-Arc, janvier 2020). <b class='accent'>C#</b>"
          ],
        },

      ],
    },
  ],
};
