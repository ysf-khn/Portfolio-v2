import { IconContext } from 'react-icons';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiReactrouter,
  SiGit,
  SiGithub,
  SiTailwindcss,
} from 'react-icons/si';

export const About = () => {
  return (
    <section className='h-screen p-8 text-xl'>
      <h1 className='text-center font-extrabold text-5xl my-4'>About Me.</h1>
      <p>
        I am currently a{' '}
        <span className='font-bold'>
          3rd year IT undergrad at Manipal Institute of Technology.
        </span>{' '}
        When I'm not busy doing college assignments and tests, I use my time to
        improve my web development skills in order to become a better developer.
      </p>
      <p>
        I love making{' '}
        <span className='font-bold'>beautiful, clean and minimalistic UIs</span>{' '}
        for my apps so that you get those aesthetics on your app,{' '}
        <span className='font-bold'>
          without compromising the quality and the complex functionalities of
          the code.
        </span>
      </p>
      <p>My current tech stack:</p>
      <p className='flex align-middle justify-center mt-6'>
        <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
          <div className='grid grid-cols-3 gap-14'>
            <SiHtml5 />
            <SiCss3 />
            <SiJavascript />
            <SiReact />
            <SiGit />
            <SiGithub />
            <SiTailwindcss />
            <SiRedux />
            <SiReactrouter />
          </div>
        </IconContext.Provider>
      </p>
    </section>
  );
};
