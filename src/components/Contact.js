import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub, BsTwitter } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact' className='p-8'>
      <h1 className='text-center text-2xl md:text-4xl font-extrabold my-4'>
        Liked my work?
        <span className='text-orange-600'> Let's Talk.</span>
      </h1>
      <div className='grid place-items-center'>
        <p className='text-lg md:text-2xl text-center'>
          Reach out to me at{' '}
          <a
            href='mailto:yusufmohd72@gmail.com'
            className='underline underline-offset-4 decoration-2 decoration-orange-600 font-bold animate-bounce '
          >
            yusufmohd72@gmail.com
          </a>
        </p>
        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
          <div className='grid grid-cols-3 gap-16 mt-6'>
            <a href='https://www.linkedin.com/in/moyusufkhan/'>
              <BsLinkedin className='hover:text-blue-800' />
            </a>
            <a href='https://github.com/ysf-khn'>
              <BsGithub />
            </a>
            <a href='https://twitter.com/ysf_khn_'>
              <BsTwitter className='hover:text-blue-500' />
            </a>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Contact;
