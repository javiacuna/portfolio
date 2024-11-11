const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://javiacuna.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Javier Emiliano Acuña',
  role: 'Software Engineer',
  description:
    ' I am Javier, a passionate software developer in my final year of Software Engineering. With a strong programming foundation and a focus on problem-solving, I constantly seek to improve my skills and knowledge in the field of software engineering. My commitment to excellence and my ability to work collaboratively have allowed me to make meaningful contributions in agile development teams. I am eager to take on new challenges and continue growing professionally in this exciting industry.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/javiereacuna/',
    github: 'https://github.com/javiacuna',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
