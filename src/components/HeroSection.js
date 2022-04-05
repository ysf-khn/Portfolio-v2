import img from '../assets/yusuf.png';

export const HeroSection = () => {
  return (
    <section className='h-screen p-8 grid lg:grid-cols-2 items-center justify-items-center border border-b-black'>
      <div className='left font-bold text-4xl '>
        <h2>I am,</h2>
        <h1 className='text-5xl font-black'>
          Mohammad{' '}
          <span className='underline underline-offset-2 decoration-4 decoration-orange-600 font-bold'>
            Yusuf
          </span>{' '}
          Khan
        </h1>
        <h2>Front-end Developer</h2>
        <h2 className='mt-6 text-xl italic'>
          I use code to bring{' '}
          <span className='text-orange-600'>ideas to reality.</span>
        </h2>

        <button className='bg-orange-600 px-4 py-2 mt-6 text-base font-bold rounded-3xl hover:bg-orange-500 transition ease-in-out delay-150 hover:scale-105 duration-300 shadow-lg'>
          Get in touch!
        </button>
      </div>
      <div className='right'>
        <img
          src={img}
          alt='Me'
          className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full'
        />
      </div>
    </section>
  );
};
