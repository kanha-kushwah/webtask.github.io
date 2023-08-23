const resume = {
  firstName: 'Kanha',
  lastName: 'Kushwah',
  jobTitle: 'Frontend Developer, Web Devloper',
  photo: '',
  city: 'Indore',
  postalCode: '452002',
  country: 'India',
  phone: `+919575032608`,
  email: 'Kanhakushwah64@gmail.com',
  education: [
    {
      school: 'Davv, indore',
      degree: 'Bachelor of Commerce + Computer',
      graduationDate: '2021',
      // description: 'Chemical Engineering'
    }
  ],
  links: [
    {
      label: 'GitHub',
      link: 'https://github.com/kanha-kushwah'
    },
    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/kanhaiya-kushwah-39a09'
    },
    {
      label: 'Website',
      link: 'https://bold.pro/my/kanhaiya-kushwah/572'
    }
  ],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Scss',
    'Angular',
    'Wordpress'
  ],
  languages: ['English', 'Hindi'],
  professionalSummary: `Front-end developer with 2 years of experience, I have a background in web development using technologies such as HTML5, CSS3, JavaScript, (Angular), and version control systems such as Git/GitHub . In addition to my technical skills, I am a team-oriented and organized individual with a passion for continuous learning and the development of optimal solutions.`,
  employmentHistory: [
      {
      jobTitle: 'Web developer',
      startDate: 'Jun 2021',
      endDate: 'Present',
      employer: 'Control F5',
      city: 'Indore , India',
      achievements: [
        `Develop responsive, Web layouts and ensure accessibility`,
        `Implement user-facing features using front-end technologies and frameworks, such as HTML, CSS, JavaScript, and Angular`,
        `Provided maintenance to the old web applications`,
        `Stay up-to-date with emerging technologies and industry trends, and continually improve your skills and knowledge`,
        `Participate in agile development methodologies, including stand-ups, sprint planning, and code reviews`,
        `Communicate effectively with team members and stakeholders to discuss project progress and requirements.`,

      ]
    },
    {
      // jobTitle: 'Web Developer',
      // startDate: 'Oct 2019',
      // endDate: 'Oct 2020',
      // employer: 'InLabs',
      // city: 'Remote',
      achievements: [
        `Web Developer Consummate WordPress Developer with extensive knowledge and professional background in building WordPress CMS websites using de-facto standard plugins. Over 2 years of programming, CSS and Javascript experience. Talented with inbuilt WordPress functions, creating custom post types and developing widgets to conform with Wordpress coding standards.
        Logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives. Judicious and creative when crafting effective websites, apps and platforms to propel competitive advantage and revenue growth. Technically proficient and analytical problem solver with calm and focused demeanor.
        `
      ]
    },
//     {
//       jobTitle: 'Freelancer - Front-End Developer',
//       startDate: 'Mar 2019',
//       endDate: 'Apr 2019',
//       employer: 'Crowdswap',
//       city: 'Remote',
//       achievements: [
//         `I redesigned the new responsive website for Crowdswap using React with Gatsby for
// static pages generation.`
//       ]
//     },
    // {
    //   jobTitle: 'Research and Development Engineer',
    //   startDate: 'Feb 2017',
    //   endDate: 'Aug 2018',
    //   employer: 'Senco Colombiana',
    //   city: 'Medellín',
    //   achievements: [
    //     'Evaluate the quality of raw materials and product in production line.',
    //     'Study of different materials and its possible inclusion to the process as raw materials or as additives.'
    //   ]
    // }
  ]
}

const formatResume = (r) => ({
  ...r,
  address: [
    r.country,
    r.city,
    r.postalCode
  ].filter(Boolean).join(', ')
})

new Vue({
  el: "#app",
  data: formatResume(resume),
  methods: {
    print () {
      window.print()
    }
  }
});