const ProjectItem = ({ projectName, desc, src, github, live, badges }) => {
  return (
    <>
      <div className='card-1 bg-white rounded-md max-w-xs mb-4 shadow-2xl transition ease-in-out delay-150 hover:scale-105 duration-700'>
        <img src={src} alt='Expense Tracker App' className='rounded-md' />
        <div className='p-4'>
          <p className='font-bold mb-2'>{projectName}</p>
          <p className='text-sm text-slate-500 mb-3'>{desc}</p>
          <div className='actions grid grid-cols-2 my-3 gap-3 '>
            <a
              href={github}
              className='border border-green-300 rounded-md text-center hover:bg-green-300 hover:text-white'
              target='_blank'
              rel='noreferrer'
            >
              Github Link
            </a>
            <a
              href={live}
              className='border border-green-300 rounded-md text-center hover:bg-green-300 hover:text-white'
              target='_blank'
              rel='noreferrer'
            >
              Live Project
            </a>
          </div>
          <div className='grid grid-cols-3 place-items-center gap-1'>
            {badges.map((badge) => (
              <span className='bg-green-300 p-1 text-sm rounded-md w-full text-center'>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
