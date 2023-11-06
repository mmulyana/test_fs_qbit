export default function SearchForm() {
  return (
    <div className='absolute w-full h-fit left-0 bottom-0 p-5'>
      <div className='w-full h-fit bg-white rounded-xl px-5 pt-3.5 pb-4'>
        <div className='h-fit rounded-full max-w-[400px] mx-auto p-0.5 bg-gray-100 grid grid-cols-4 gap-x-0.5'>
          <div className='rounded-full text-center bg-white pt-1 pb-1.5 cursor-pointer px-2 text-sm border border-teal-500 shadow text-slate-800'>
            All types
          </div>
          <div className='rounded-full text-center pt-1 pb-1.5 cursor-pointer px-2 text-sm hover:bg-white text-slate-600'>
            Villa
          </div>
          <div className='rounded-full text-center pt-1 pb-1.5 cursor-pointer px-2 text-sm hover:bg-white text-slate-600'>
            Hotel
          </div>
          <div className='rounded-full text-center pt-1 pb-1.5 cursor-pointer px-2 text-sm hover:bg-white text-slate-600'>
            Resort
          </div>
        </div>
        <div className='mt-2.5'>
          <form className='grid grid-cols-4 gap-4'>
            <div>
              <label className='text-sm text-slate-800 font-medium'>
                Guests
              </label>
              <input
                className='w-full h-9 px-3 rounded-full border border-gray-200 text-sm focus:outline-teal-600'
                placeholder='total guest'
              />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium'>
                Check In
              </label>
              <input
                className='w-full h-9 px-3 rounded-full border border-gray-200 text-sm focus:outline-teal-600'
                placeholder='Add Date'
              />
            </div>
            <div>
              <label className='text-sm text-slate-800 font-medium'>
                Check Out
              </label>
              <input
                className='w-full h-9 px-3 rounded-full border border-gray-200 text-sm focus:outline-teal-600'
                placeholder='Add Date'
              />
            </div>
            <div className='flex items-end'>
              <button className='bg-teal-600 hover:bg-teal-700 text-white w-full h-9 rounded-full text-sm border border-teal-800'>
                Search Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
