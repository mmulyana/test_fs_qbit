import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full h-14 fixed top-0 left-0 bg-white z-10'>
      <div className='h-full flex justify-between items-center container mx-auto px-4'>
        <p className='text-uppercase text-slate-800 font-medium text-lg'>
          Bali<span className='text-teal-600'>Bnb</span>
        </p>
        <nav className='hidden lg:flex items-center gap-5'>
          <Link to='/'>Explore</Link>
          <Link to='/'>About us</Link>
          <Link to='/'>Contact</Link>
        </nav>
        <div className='flex gap-3 items-center'>
          <Link
            className='bg-teal-600 text-white pb-1.5 pt-1 px-3 rounded-full border border-teal-800 leading-5 text-sm hover:bg-teal-700'
            to='/register'
          >
            Login
          </Link>
          <Link
            className='pb-1.5 pt-1 px-3 rounded-full border border-gray-300 text-slate-500 leading-5 text-sm hover:bg-teal-600 hover:text-white hover:border-teal-800'
            to='/register'
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  )
}
