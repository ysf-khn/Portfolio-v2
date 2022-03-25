import logo from '../assets/vector/logo_white.svg';

export const Navbar = () => {
  return (
    <nav className='px-8 py-4 h-14 bg-slate-900 text-white flex justify-between'>
      <img src={logo} alt='Logo' className='h-full' />

      <ul className=' flex justify-between'>
        <li className='px-2'>About Me</li>
        <li className='px-2'>Projects</li>
        <li className='px-2'>Contact</li>
      </ul>
    </nav>
  );
};
