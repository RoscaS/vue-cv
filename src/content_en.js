export default {
  firstname: "Sol",
  lastname: "Rosca",
  title: "Software Engineer",
  basic: "Belgian, 33 years old<br>B Driver license (CH)<br>2340 Le Noirmont, Jura<br><br>078 403 29 49<br>sol.rosca@protonmail.com<br>github.com/roscas",

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
        name: "Languages",
        icon: '',
        entries: [
          {
            value: 'French:',
            complement: 'Second mother tongue',
          },
          {
            value: 'English:',
            complement: 'Level B2<br><span style="margin-left: 2px">3 years in full immersion (AU)</span>',
          },
          {
            value: 'Dutch:',
            complement: 'Basic notions',
          },
          {
            value: 'Romanian:',
            complement: 'Mother tongue',
          },
        ]
      },
      {
        name: "Good knowledge",
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
            value: 'Linux (Main OS)',
            complement: '',
          },
          {
            value: 'OWASP',
            complement: '',
          },
          {
            value: 'Jetbrain editors',
            complement: '',
          },
          {
            value: 'Android API',
            complement: '',
          },
          {
             value: 'Material design (Vuetify)',
             complement: '',
           },
           {
             value: 'Preprocessors:',
             complement: 'Sass, Stylus, Pug (Jade)',
           },
        ],
      },
      {
        name: "Hobbies",
        icon: '',
        entries: [
          {
            value: 'Diving',
            complement: 'SSI Dive Master',
          },
          {
            value: 'Travel',
            complement: "Before 2020...",
          },
          {
            value: 'Reading',
            complement: 'Essays, philosophy, politics, <span style="margin-left: 2px">history</span>, it, tech<br>',
          },
        ],
      },
    ]
  },

  // SECTIONS DU CORP DU CV

  blocks: [
    {
      name: "Training",
      icon: "fa-graduation-cap",
      entries: [
        {
          title: "Bachelor in computer science",
          place: "HE-Arc Ingénerie",
          location: "Neuchâtel",
          fromDate: "2020",
          toDate: "2016",
          description: "Ingénieur HES en développement logiciel et multimédia",
          tasks: [
          ],
        },
        {
          title: "Secondary education (CESS)",
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
      name: "Experience",
      icon: "fa-suitcase",
      entries: [
        {
          title: "Neuchâtel's occupational therapists website",
          place: "Freelance",
          url: "https://snase.ch",
          fromDate: "2019",
          toDate: "",
          tasks: [
            "Custom CMS with a deeply simplified administration",
            "Hybrid articles editor (WYSIWYG/Markdown) with \"<i>as it will look when it's posted</i>\" preview",
            "Advanced members/institutions/cabinet administration",
            "Newsletter editor/manager with archiving and mailing list systems",
            "<b class='accent'>Nuxt.js + Django DRF</b>",
          ],
        },
        {
          title: "Vue-write",
          place: "Personal",
          location: "",
          fromDate: "2018",
          toDate: "",
          concise: false,
          tasks: [
            "Pandoc alternative that allows the use of web technologies to write professional and beautiful reports",
            "Brings a solution to the table of content and page numbering issue faced by similar projects",
            "Strong abstractions allows the advanced user easily extend the markdown syntax with Vue.js components",
            "Currently in refactoring and documenting pre release phase",
            "<b class='accent'>Node.js & Vue.js</b>",
          ],
        },
        {
          title: "Generic Website for All",
          place: "Freelance (v1.0), Bachelor thesis (v2.0)",
          url: "https://generic-website.ch (staging)",
          fromDate: "",
          toDate: "2017",
          tasks: [
            "Polyvalent Website generator that virtualy requires 0 knowledge to manage",
            "Target people that doesn't want to take the time to learn how to use Wix",
            "v2.0 is designed with SOLID principles in mind to allow scalling and SAAS distribution",
            "v1.0 have multiples instances in production",
            "<b class='accent'>Nuxt.js + Django DRF</b>",
          ],
        },
        {
          title: "Professional DJ",
          place: "Freelance",
          location: "Belgium, Australia, Thailand",
          fromDate: "2016",
          toDate: "2005",
          description: "",
          concise: false,
          tasks: [
            "Multiple residencies",
            "Private events (weddings, birthdays, ...)",
            "International level events",
          ],
        },
        {
          title: "House Painter",
          place: "Painting WA",
          location: "Margaret River (AU)",
          fromDate: "2015",
          toDate: "2013",
          tasks: [
          ],
        },
        {
          title: "Sales representative & mixing technics teacher",
          place: "Academix DJ School",
          location: "Brussels (BE)",
          fromDate: "2010",
          toDate: "2008",
          tasks: [
            "Search for sponsors and venues for students",
            "Mentoring students on their professional insertion",
            "4 courses of 2 hours per week of mixing technics and private lessons",
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
          place: "Personal",
          url: "roscas.github.io, intra.jrosk.ch",
          fromDate: "2020",
          toDate: "2017",
          description: "Mostly used to organise my class notes. <span class='accent'>Jekyll, Vuepress</span>",

        },
        {
          title: "Relevant projects",
          place: "HE-Arc & Personal",
          // concise: true,
          location: "",
          fromDate: "2020",
          toDate: "2016",
          description: "",
          tasks: [
            "2D Real Time Strategy (RTS) game using a pure ECS architecture. <b class='accent'>Java + LibGDX</b>",
            "3D RTS prototype selected to represent HE-Arc's (Neuchâtel) <br> software engineering branch for its 2021 advertisment spot. <b class='accent'>C# + Unity3D</b>",
            "Robust street lane detection for autonomous cars. <b class='accent'>OpenCV, Python</b>",
            "Revamp of a stereoscopic computer vison package for Python . <b class='accent'>OpenCV, Python</b>",
            "Backend MVC framework from scratch. <b class='accent'>PHP</b>",
            "Online n-body simulation (Test it online: nbody.jrosk.ch). <b class='accent'>Javascript es6</b>",
            "Winner Othello AI of the school contest (HE-Arc, January 2020). <b class='accent'>C#</b>",
            "Minigolf score application with live sync between players. <b class='accent'>Kotlin app + Spring (Java)</b>"
          ],
        },
      ],
    },
  ],
};
