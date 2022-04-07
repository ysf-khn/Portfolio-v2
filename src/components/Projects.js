import ProjectItem from './ProjectItem';

import breakingBadImg from '../assets/breaking_bad.png';
import expenseTrackerImg from '../assets/expense_tracker.png';
import qrCodeImg from '../assets/qrcode.png';

const projectsObj = [
  {
    id: 1,
    name: 'Expense Tracker',
    desc: 'An app that helps you to track your expenses, built using the useReducer hook and Context API.',
    src: expenseTrackerImg,
    githubURL: 'https://github.com/ysf-khn/React-expense-tracker-v1',
    liveURL: 'https://react-expense-tracker-v1.netlify.app/',
    badges: ['ReactJS', 'useReducer', 'ContextAPI'],
  },
  {
    id: 2,
    name: 'Breaking Bad Characters',
    desc: 'A paginated app that fetches all the characters of the legendary TV series Breaking Bad from the Breaking Bad API. Built using useEffect hook and FetchAPI.',
    src: breakingBadImg,
    githubURL: 'https://github.com/ysf-khn/Breaking-Bad-Characters',
    liveURL: 'https://breaking-react-bad.netlify.app/',
    badges: ['ReactJS', 'useEffect'],
  },
  {
    id: 3,
    name: 'QR Code Generator',
    desc: 'Generates QR codes for text based on input provided by user.',
    src: qrCodeImg,
    githubURL: 'https://github.com/ysf-khn/QR-Code-Generator',
    liveURL: 'https://qrcode-generator-react.netlify.app/',
    badges: ['ReactJS', 'useEffect', 'API'],
  },
];

export const Projects = () => {
  return (
    <section id='projects' className='p-8 pt-16 text-xl border border-b-black'>
      <h1 className='text-center font-extrabold text-5xl mb-8'>
        Project<span className='text-orange-600'>s.</span>
      </h1>

      <ul className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 place-items-center'>
        {projectsObj.map((project) => (
          <ProjectItem
            key={project.id}
            projectName={project.name}
            desc={project.desc}
            src={project.src}
            github={project.githubURL}
            live={project.liveURL}
            badges={project.badges}
          />
        ))}
      </ul>
    </section>
  );
};
