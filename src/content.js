export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Ingénieur HES',
  basic: 'Belge, 36 ans, marié<br>078 403 29 49<br>sol.rosca@protonmail.com<br>Route de Berne 3A<br>1580 Avenches',

  sidebar: {
    contactSection: {
      title: 'contact info',
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
        name: 'Langues',
        icon: '',
        entries: [
          {
            value: 'Français:',
            complement: 'Langue maternelle',
          },
          {
            value: 'Anglais:',
            complement: 'Niveau B2',
          },
          {
            value: 'Néerlandais:',
            complement: 'Notions',
          },
          {
            value: 'Roumain:',
            complement: 'Langue maternelle',
          },
        ],
      },
      // {
      //   name: "Bonnes notions",
      //   icon: '',
      //   entries: [
      //     {
      //       value: 'Git',
      //       complement: "",
      //     },
      //     {
      //       value: 'Docker/compose',
      //       complement: "",
      //     },
      //     {
      //       value: 'Linux (Os principale)',
      //       complement: '',
      //     },
      //     {
      //       value: 'OWASP',
      //       complement: '',
      //     },
      //     {
      //       value: 'Android Studio (Jetbrain)',
      //       complement: '',
      //     },
      //     {
      //       value: 'API Android',
      //       complement: '',
      //     },
      //     {
      //        value: 'Material design (Vuetify)',
      //        complement: '',
      //      },
      //      {
      //        value: 'Préprocesseurs:',
      //        complement: 'Sass, Stylus, Pug (Jade)',
      //      },
      //   ],
      // },
      // {
      //   name: "Loisirs",
      //   icon: '',
      //   entries: [
      //     {
      //       value: 'Plongée',
      //       complement: 'Dive Master certifié SSI',
      //     },
      //     {
      //       value: 'Voyages',
      //       complement: "Avant les années 2020...",
      //     },
      //     {
      //       value: 'Lecture',
      //       complement: 'Essais, philosophie, politique, <span style="margin-left: 2px">histoire</span>, informatique, tech<br>',
      //     },
      //   ],
      // },
    ],
  },

  // SECTIONS DU CORP DU CV

  blocks: [
    {
      name: 'formation',
      icon: 'fa-graduation-cap',
      entries: [
        {
          title: 'Bachelor en sciences informatiques',
          place: 'HE-Arc Ingénerie',
          location: 'Neuchâtel',
          fromDate: '2020',
          toDate: '2016',
          description: 'Ingénieur HES en développement logiciel et multimédia',
          tasks: [],
        },
        {
          title: 'Humanités générales (CESS)',
          place: 'IFC Jonfosse',
          location: 'Liège (BE)',
          fromDate: '2013',
          toDate: '2010',
          description: 'CESS de promotion sociale',
          concise: false,
          tasks: [],
        },
      ],
    },
    {
      name: 'Expérience',
      icon: 'fa-suitcase',
      entries: [
        {
          title: 'Arcanite Solutions',
          place: 'Employé',
          url: 'https://arcanite.ch',
          fromDate: '2024',
          toDate: '2021',
          tasks: [
            'Mise en oeuvre de solutions Web',
            'Définition et application des standards de génie logiciel',
            'Coordination technique et assistance à la gestion de projet',
            'Conduite de revues de code et assurance qualité',
            'Encadrement des junior sur les bonnes pratiques et outils de développement moderne',
          ],
        },
        {
          title: 'Generic Website',
          place: 'Indépendant',
          url: 'https://generic-website.ch',
          fromDate: '2021',
          toDate: '2020',
          tasks: [
            'Générateur de sites web vitrine au contenu dynamique à l\'administration simplifiée',
            'Produit visant les personnes n\'ayant pas le temps/envie d\'apprendre à utiliser Wix',
            'Architecturée de façon à pouvoir évoluer vers une distribution sous forme de SAAS',
            'Multiples instances en production',
          ],
        },
        {
          title: 'Site web de l\'association Neuchâteloise des ergothérapeutes',
          place: 'Indépendant',
          url: 'https://snase.ch',
          fromDate: '2019',
          toDate: '',
          tasks: [
            'Site web avec CMS sur mesure en vue de rendre l\'administration aussi simple que possible',
          ],
        },
        {
          title: 'DJ professionnel',
          place: 'Indépendant',
          location: 'Belgique, Autralie, Thaïlande',
          fromDate: '2016',
          toDate: '2005',
          description: '',
          concise: false,
          tasks: [
            'Multiples résidences',
            'Évènements privés (mariages, anniversaires, ...)',
            'Prestations à l\'étranger',
          ],
        },
        {
          title: 'Peintre en bâtiment',
          place: 'Painting WA',
          location: 'Margaret River (AU)',
          fromDate: '2015',
          toDate: '2013',
          tasks: [],
        },
        {
          title: 'Délégué commercial & professeur en techniques de mix',
          place: 'Academix DJ School',
          location: 'Bruxelles (BE)',
          fromDate: '2010',
          toDate: '2008',
          tasks: [
            'Recherche de sponsors et négociations',
            'Recherche d\'établissements pour l\'insertion professionnelle d\'élèves en fin de cursus',
            'Encadrement des élèves lors de leur insertion professionnelle',
            '2 cours de 2h par semaine pour des groupes de 4 à 8 élèves + cours particuliers',
          ],
        },
      ],
    },


    // {
    //   name: "Projets",
    //   icon: "fa-folder-open",
    //   break: true,
    //   entries: [
    //     {
    //       title: "Blogs",
    //       place: "Personnel",
    //       url: "roscas.github.io, intra.jrosk.ch",
    //       fromDate: "2020",
    //       toDate: "2017",
    //       description: "Principalement utilisés pour la mise au propre des notes de cours. <span class='accent'>Jekyll, Vuepress</span>",
    //
    //     },
    //     {
    //       title: "Projets pertinents",
    //       place: "HE-Arc & Personnel",
    //       // concise: true,
    //       location: "",
    //       fromDate: "2020",
    //       toDate: "2016",
    //       description: "",
    //       tasks: [
    //         "RTS en 2D utilisant une architecture ECS. <b class='accent'>Java, Kotlin + LibGDX</b>.",
    //         "Prototype de RTS en 3D retenu pour la capsule vidéo  <br> promotionnelle 2021 de la section DLM de la HE-Arc. <b class='accent'>C# + Unity3D</b>",
    //         "Système robuste de détection de bandes pour voitures autonomes. <b class='accent'>OpenCV, Python</b>",
    //         "Écriture d'un package Python dédiée à la vision stéréoscopique. <b class='accent'>OpenCV, Python</b>",
    //         "Framework backend MVC from scratch. <b class='accent'>PHP</b>",
    //         "Simulation gravitationnelle à n corps (Testable en ligne: nbody.jrosk.ch). <b class='accent'>Javascript</b>",
    //         "IA Othello gagnante du tournoi interclasse (HE-Arc, janvier 2020). <b class='accent'>C#</b>",
    //         "Application de gestion des scores d'une partie de minigolf <br> avec sync live entre les participants. <b class='accent'>Kotlin app + Spring (Java)</b>",
    //       ],
    //     },
    //
    //   ],
    // },
  ],
};
