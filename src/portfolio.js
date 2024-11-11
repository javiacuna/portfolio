const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://javiacuna.github.io/portfolio',
  title: 'JA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Javier Emiliano Acuña',
  role: 'Software Engineer',
  description:
    ' I am Javier, a passionate software developer in my final year of Software Engineering. With a strong programming foundation and a focus on problem-solving, I constantly seek to improve my skills and knowledge in the field of software engineering. My commitment to excellence and my ability to work collaboratively have allowed me to make meaningful contributions in agile development teams. I am eager to take on new challenges and continue growing professionally in this exciting industry.',
  social: {
    linkedin: 'https://www.linkedin.com/in/javiereacuna/',
    github: 'https://github.com/javiacuna',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Harriague + Asociados - Claro',
    description:
      'PL/SQL Developer',
    stack: ['PL/SQL', 'Data Analysis'],
  },
  {
    name: 'DXC Technology - Arcos Dorados',
    description:
      'Level 2 Support',
    stack: ['PL/SQL', 'Data Analysis', 'Oracle Forms'],
  },
  {
    name: 'AR Consultores - Claro',
    description:
      'Network Performance Engineer',
    stack: ['PL/SQL', 'Java', 'Pentaho','NoSQL'],
  },
  {
    name: 'Mercado Libre - Mercado Credito',
    description:
      'Ssr Software Engineer',
    stack: ['Golang', 'Java', 'MySQL','NoSQL', 'UML'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Java',
  'Golang',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'javi.emiliano@gmail.com',
}

export { header, about, projects, skills, contact }
