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
    <section className='lg:h-screen sm:h-full md:h-full p-8 text-xl  border border-b-black'>
      <h1 className='text-center font-extrabold text-5xl my-4'>
        About <span className='text-orange-600'>Me.</span>
      </h1>
      <p>
        I am currently a{' '}
        <span className='underline underline-offset-4 decoration-2 decoration-orange-600 font-bold'>
          3rd year IT undergrad at Manipal Institute of Technology.
        </span>{' '}
        When I'm not busy doing college assignments and tests, I use my time to
        improve my web development skills in order to become a better developer.
        I love making{' '}
        <span className='underline underline-offset-4 decoration-2 decoration-orange-600 font-bold'>
          beautiful, clean and minimalistic UIs
        </span>{' '}
        for my apps so that you get those aesthetics on your app,{' '}
        <span className='underline underline-offset-4 decoration-2 decoration-orange-600 font-bold'>
          without compromising the quality and the complex functionalities of
          the code.
        </span>
      </p>
      <p className='text-center md:mt-5 lg:mt-3  font-semibold '>
        My tech
        <span className='text-orange-500'> stack.</span>
      </p>
      <div className='flex align-middle justify-center mt-6'>
        <IconContext.Provider value={{ style: { fontSize: '60px' } }}>
          <div className='grid grid-cols-3 gap-14 '>
            <SiHtml5 className='hover:text-orange-600 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiCss3 className='hover:text-blue-500 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiJavascript className='hover:text-yellow-500 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiReact className='hover:text-blue-600 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiGit className='hover:text-red-600 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiGithub className='hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiTailwindcss className='hover:text-blue-600 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiRedux className='hover:text-purple-500 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
            <SiReactrouter className='hover:text-red-500 hover:drop-shadow-lg transition ease-in-out delay-150 hover:scale-105 duration-500' />
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};
