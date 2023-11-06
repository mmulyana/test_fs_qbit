import { Link, Outlet } from 'react-router-dom'
import Navbar from '../navbar'

export default function DefaultLayout() {
  return (
    <>
      <Navbar />
      <div className='pt-14'>
        <Outlet />
      </div>
      <div className='bg-teal-800 h-28 w-full mt-16'>
        <div className='container mx-auto h-full flex justify-between items-center px-4'>
          <div>
            <p className='text-3xl font-medium text-white'>Subscribe now!</p>
            <p className='text-sm mt-1.5 text-white'>
              Subscribe to our email updates for exclusive offers, exciting
              news, and more.
            </p>
          </div>
          <div className='flex gap-2 items-center'>
            <input
              className='w-full h-9 px-3 rounded-full border border-gray-200 text-sm focus:outline-teal-600'
              placeholder='Email address'
            />
            <button className='bg-slate-900 text-white w-full h-9 rounded-full text-sm'>
              Search Now
            </button>
          </div>
        </div>
      </div>
      <div className='bg-neutral-900 h-fit pb-10 w-full'>
        <div className='mx-auto container px-4 pt-5 grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div>
            <p className='text-white text-lg font-medium'>
              Bali<span className='text-teal-300'>bnb</span>
            </p>
            <p className='mt-1.5 text-white/70 text-sm max-w-[360px]'>
              BaliBnb, where unforgettable moments meet unparalleled comfort.
              Explore the beauty of Bali and experience its vibrant culture
              while staying in handpicked, stunning accommodations.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='flex flex-col gap-2'>
              <p className='font-medium text-white mb-1'>Explore</p>
              <Link to='/' className='text-white/70 hover:text-white'>
                Villa
              </Link>
              <Link to='/' className='text-white/70 hover:text-white'>
                Resort
              </Link>
              <Link to='/' className='text-white/70 hover:text-white'>
                Hotel
              </Link>
            </div>
            <div className='flex flex-col gap-2 mt-4 md:mt-0'>
              <p className='font-medium text-white mb-1'>Company</p>
              <Link to='/' className='text-white/70 hover:text-white'>
                About us
              </Link>
              <Link to='/' className='text-white/70 hover:text-white'>
                Careers
              </Link>
            </div>
            <div className='flex flex-col gap-2 mt-4 md:mt-0'>
              <p className='font-medium text-white mb-1'>Help</p>
              <Link to='/' className='text-white/70 hover:text-white'>
                Support
              </Link>
              <Link to='/' className='text-white/70 hover:text-white'>
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
