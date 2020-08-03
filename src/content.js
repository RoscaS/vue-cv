export default {
  firstname: 'Sol',
  lastname: 'Rosca',
  title: 'Frontend engineer',
  website: {
    icon: 'fa-globe',
    value: 'roscas.ch',
  },
  email: {
    icon: 'fa-envelope',
    value: 'sol.rosca@gmail.com'
  },
  github: {
    icon: 'fa-github',
    value: 'github.com/RoscaS',
  },
  phone: {
    icon: 'fa-phone',
    value: '801.603.0431',
  },
  skills: [
    'Fighting',
    'Wall climbing',
    'Rescuscitating',
    'Kinging',
  ],
  languages: [
    'French',
    'English',
    'Flamish',
    'Romanian',
  ],
  blocks: [
    {
      name: 'experience',
      icon: 'fa-suitcase',
      entries: [
        {
          title: 'Bastard in Residence',
          place: 'Winterfell Castle',
          location: 'North',
          fromDate: 'Sn 1',
          toDate: '',
          tasks: [
            'Spent time with the rest of the family.',
            'Waited outside on formal occasions.'
          ]
        },
        {
          title: 'Lord Commander',
          place: 'Night Watch',
          location: 'Castle Black',
          fromDate: 'Sn 1',
          toDate: 'Sn 6',
          tasks: [
            'Defended a thousand-years tradition.',
            'Liked the job so much, got stabbed and died and still came back the next SHanged all the rascals.'
          ]
        },
        {
          title: 'King in the North',
          place: 'Winterfell Castle',
          location: 'North',
          fromDate: 'Sn 6',
          toDate: 'Sn 7',
          tasks: [
            'Tightened links with the Mother of Dragons.',
            'Wisely delegated important responsabilities to my sister.'
          ]
        },
      ]
    },
    {
      name: 'projects',
      icon: 'fa-folder-open',
      entries: [
        {
          title: 'Hardhome Rescue',
          place: 'Some Workplace',
          location: null,
          fromDate: 'Sn 6',
          toDate: '',
          tasks: [
            'Came there for the people, stayed for the white walkers.',
            'Brought back a few hundred wildings.'
          ]
        },
        {
          title: 'Wilding Raid Rebutal',
          place: 'Some other Workplace',
          location: null,
          fromDate: 'Sn 5',
          toDate: '',
          tasks: [
            'Fought back one of the largest wilding armies ever.',
            'Stepped up when the commander was down.',
            'Events led to my nomination as Lord Commander.',
          ]
        },
        {
          title: 'White Walker Capture',
          place: 'Some other workplace',
          location: null,
          fromDate: 'Sn 7',
          toDate: '',
          tasks: [
            'Organized and led an elite squadron for the capture of a Walker.',
            'Outcome led to world peace in front of a common ennemy.',
          ]
        },
      ]
    },
    {
      name: 'education',
      icon: 'fa-graduation-cap',
      concise: true,
      entries: [
        {
          title: 'Martial Training',
          place: 'Winterfell Castle',
          location: 'North',
          fromDate: 'Sn 1',
          toDate: '',
          description: 'Relationship of the number with the answer to life, the universe and everything.'

        },
        {
          title: 'Squire Training',
          place: 'Castle Black',
          location: 'North',
          fromDate: 'Sn 1',
          toDate: 'Sn 3',
          description: 'Made the bed, folded the towels, listened a lot.'

        },
        {
          title: 'School of Life',
          place: 'Castle Black',
          location: 'North',
          fromDate: 'Sn 1',
          toDate: 'Sn 3',
          description: 'Generic dialectic life lessons including.',
          list: [
            'Do we ever <i>know</i> anything ?',
            'Is <b>this</b> a trick ?',
            'How to king',
          ]
        }
      ]
    }
  ],
}
