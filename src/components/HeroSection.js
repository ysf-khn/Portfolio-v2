import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

import img from '../assets/yusuf.png';

export const HeroSection = () => {
  return (
    <section className='h-screen p-8 grid grid-cols-2 items-center justify-items-center'>
      <div className='left font-bold text-4xl'>
        <h2>I am,</h2>
        <h1 className='text-5xl font-black'>Mohammad Yusuf Khan</h1>
        <h2>Front-end Developer</h2>
        <h2 className='mt-6 text-xl italic'>
          I use code to bring{' '}
          <span className='text-orange-600'>ideas to reality.</span>
        </h2>
        <div className='flex justify-around mt-8'>
          <BsLinkedin />
          <BsGithub />
          <BsTwitter />
        </div>
      </div>
      <div className='right'>
        <img src={img} alt='Me' />
      </div>
    </section>
  );
};
