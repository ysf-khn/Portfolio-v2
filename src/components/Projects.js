import expenseTrackerImg from '../assets/expense_tracker.png';

export const Projects = () => {
  return (
    <section className='h-screen p-8 text-xl'>
      <h1 className='text-center font-extrabold text-5xl my-4'>Projects.</h1>
      <div>
        <div className='card-1 bg-white rounded-md max-w-xs'>
          <img
            src={expenseTrackerImg}
            alt='Expense Tracker App'
            className='rounded-md'
          />
          <div className='p-4'>
            <p className='font-bold mb-2'>Expense Tracker</p>
            <p className='text-sm text-slate-500 mb-3'>
              An app that helps you to track your expenses, built using the
              useReducer hook and Context API.
            </p>
            <div className='actions grid grid-cols-2 my-3 gap-3 text-slate-500'>
              <button className='border border-slate-500 rounded-md'>
                Github Link
              </button>
              <button
                href='https://react-expense-tracker-v1.netlify.app/'
                className='border border-zinc-900 rounded-md'
              >
                Live Project
              </button>
            </div>
            <div className='badges'>
              <span className='bg-green-300 py-1 px-3 mr-2 text-sm rounded-md'>
                ReactJS
              </span>
              <span className='bg-green-300 py-1 px-3 text-sm rounded-md'>
                Context API
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
