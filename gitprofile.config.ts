const CONFIG = {
  github: {
    username: 'SlytherSavior', // Your GitHub username
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'manual',
      manual: {
        projects: [
          'SlytherSavior/MCQ_QUIZZ',
          'SlytherSavior/Weatheria-',
          'SlytherSavior/Encourage-bot-',
        ],
      },
    },
    external: {
      header: 'Personal Projects',
      projects: [
        {
          title: 'A Levels Insights Plus',
          description:
            'Educational YouTube channel focused on A Levels mathematics and SAT preparation.',
          imageUrl: 'https://img.youtube.com/vi/some-video-id/hqdefault.jpg',
          link: 'https://www.youtube.com/@ALevelsInsightsPlus',
        },
      ],
    },
  },
  seo: {
    title: 'Shrijan Poudel | Portfolio',
    description:'Aspiring Full-Stack Developer, Tech Enthusiast, and Passionate Learner.',
    imageURL: 'https://avatars.githubusercontent.com/u/12345678?v=4', // Replace with your avatar URL if desired
  },
  social: {
    linkedin: 'slyther',
    twitter: 'SlytherShrijan',
    website: 'https://shrijanpoudel.com.np',
    email: 'shrijan5414@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/your_resume_id/view?usp=sharing', // Replace with a link to your actual resume
  },
  skills: [
    'JavaScript',
    'React',
    'Node.js',
    'Angular',
    'Python',
    'TypeScript',
    'SQL',
    'MongoDB',
    'Spring Boot',
    'Express.js',
    'HTML',
    'CSS',
    'Bootstrap',
    'jQuery',
  ],
  experiences: [
    {
      company: 'Vistas SXC Loyola',
      position: 'Designer',
      from: 'August 2022',
      to: 'April 2023',
      companyLink: 'https://sxc.edu.np',
    },
    {
      company: 'Junior JCI Budanilkantha',
      position: 'Graphics Designer',
      from: 'May 2021',
      to: 'August 2022',
      companyLink: 'https://www.jcibudanilkantha.org.np',
    },
  ],
  certifications: [
    {
      name: 'Introduction to Machine Learning',
      body: 'Coursera',
      year: 'April 2024',
      link: 'https://coursera.org/some-cert-link',
    },
  ],
  educations: [
    {
      institution: "St. Xavier's College, Maitighar",
      degree: 'A Levels',
      from: '2023',
      to: '2025',
    },
    {
      institution: "St. Xavier's School, Jawalakhel",
      degree: 'Secondary Education Examination (SEE)',
      from: '2018',
      to: '2022',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
