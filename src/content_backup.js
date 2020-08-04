// <br>


export default {
  firstname: "Sol",
  lastname: "Rosca",
  title: "Software Engineer",
  basic: "Belge, 33 ans<br>2340 Le Noirmont<br>Jura-Suisse<br><br>078 403 29 49<br>sol.rosca@protonmail.com<br>github.com/roscas",

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
      {
        name: "Qualités",
        icon: '',
        entries: [
          {
            value: 'Passionné',
            complement: '',
          },
          {
            value: 'Persévérant',
            complement: '',
          },
          {
            value: 'Soucis du détail',
            complement: '',
          },
          {
            value: 'Diplomate',
            complement: '',
          },
        ],
      },
      {
        name: "Langues",
        icon: '',
        entries: [
          {
            value: 'Français',
            complement: 'Langue maternelle bis',
          },
          {
            value: 'Anglais',
            complement: 'Niveau B2<br><span style="margin-left: 2px">3 ans en immersion (Au)</span>',
          },
          {
            value: 'Néerlandais',
            complement: 'Notions',
          },
          {
            value: 'Roumain',
            complement: 'Langue maternelle',
          },
        ]
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
            complement: 'Essais, philosophie, politique, <span style="margin-left: 2px">histoire</span>, informatique, techs<br>',
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
          title: "Bachelor of science en informatique",
          place: "He-Arc Ingénerie",
          location: "Neuchâtel",
          fromDate: "2016",
          toDate: "2020",
          tasks: [
            "Ingénieur en développement logiciel et multimédia",
          ],
        },
        {
          title: "Humanité générales (CESS)",
          place: "IFC Jonfosse",
          location: "Liège (be)",
          fromDate: "2010",
          toDate: "2013",
          description: "",
          concise: false,
          tasks: [
            "CESS de promotion sociale",
          ],
        },
      ],
    },
    {
      name: "Expérience",
      icon: "fa-suitcase",
      entries: [
        {
          title: "DJ professionnel",
          place: "Indépendant",
          location: "Belgique, Autralie, Thailande",
          fromDate: "2005",
          toDate: "2016",
          description: "",
          concise: false,
          tasks: [
            "Multiples résidences",
            "Évènement privés (mariages, anniversaires, ...)",
            "Prestations à l'étranger",
          ],
        },
        {
          title: "Délégué commercial",
          place: "Academix DJ school",
          location: "Bruxelles (be)",
          fromDate: "2007",
          toDate: "2008",
          tasks: [
            "Recherche de sponsors et négociations.",
            "Recherche d'établissements pour y placer des élèves en fin de formation.",
            "Participation active à l'évolution du programme de certain cours.",
          ],
        },
        {
          title: "Professeur en techniques de mix",
          place: "Academix DJ School",
          location: "Bruxelles (be)",
          fromDate: "2008",
          toDate: "2009",
          tasks: [
            "3 cours de 4h par semaine pour des groupes de 4 à 8 élèves",
            "Cours particuliers ponctuels",
            "Accompagnement des élèves sur leurs premières prestations professionnelles",
          ],
        },
        {
          title: "Peintre en bâtiment",
          place: "Painting WA",
          location: "Margaret River (Au)",
          fromDate: "2013",
          toDate: "2015",
          tasks: [
          ],
        },
        {
          title: "Vue-write",
          place: "Indépendant",
          location: "",
          fromDate: "2019",
          toDate: "",
          tasks: [
            "Client permettant la rédaction de rapports avec les technologies du web.",
            "Offre des fonctionnalités essentielles n'étant pas offertes par des projets similaires.",
            "Actuellement en phase de conception du modèle de distribution.",
            "Node.js & Vue.js",
          ],
        },
        {
          title: "Site web de l'association Neuchâteloise des ergothérapeutes",
          place: "Indépendant",
          url: "https://snase.ch",
          fromDate: "été 2019",
          toDate: "",
          tasks: [
            "Site web + CMS sur mesure ultra simple à administrer",
            "Nuxt.js + Django DRF",
          ],
        },
        {
          title: "Generic Website for All (v2)",
          place: "Travail de bachelor",
          url: "https://roscas.ch (staging)",
          fromDate: "été 2020",
          toDate: "",
          tasks: [
            "Générateur de Site web personnel ayant pour vocation d'être distribué sous forme de SAAS.",
            "La V1 (2017) du projet possède plusieurs instances en production.",
            "Nuxt.js + Django DRF",
          ],
        }
      ],
    },
    {
      name: "projects",
      icon: "fa-folder-open",
      entries: [
        {
          title: "Blogs",
          place: "Personnel",
          url: "roscas.github.io, intra.jrosk.ch",
          fromDate: "2017",
          toDate: "",
          description: ""
        },
        {
          title: "Projets d'envergure",
          place: "He-Arc & Personnel",
          concise: true,
          location: "",
          fromDate: "2016",
          toDate: "2020",
          tasks: [
            "Système robuste de détection de bandes pour voiture autonome (OpenCV).",
            "Écriture d'un package Python dédiée à la vision stéréoscopique (OpenCV).",
            "RTS 2D écrit en Java (LibGDX).",
            "RTS 3D avec Unity.",
            "Framework backend MVC <i>from scratch</i> + ORM (PHP).",
            "Simulation gravitationnelle à n corps: nbody.jrosk.ch",
          ],
        },
      ],
    },
  ],
};
