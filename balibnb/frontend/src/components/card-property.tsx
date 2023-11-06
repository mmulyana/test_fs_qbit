import { Property } from '../model/property-model'
import { Link } from 'react-router-dom'
import { FaBed } from 'react-icons/fa'
import { BiSolidBath } from 'react-icons/bi'
import { StarIcon } from '@heroicons/react/24/outline'
import { changeToRupiah } from '../utils'

export default function CardProperty({ data }: { data: Property }) {
  return (
    <div>
      <div className='h-56 w-full rounded-xl overflow-hidden'>
        <img
          src={data.images.split(',')[0]}
          alt='thumbnail'
          className='h-full w-full object-cover'
        />
      </div>
      <div className='flex items-center justify-between mt-3'>
        <Link to='/' className='text-lg font-medium text-slate-800'>
          {data.name}
        </Link>
        <div className='flex items-center gap-1'>
          <StarIcon className='text-amber-500 w-4 h-4' />
          <span className='text-slate-400 text-sm'>{data.rating}</span>
        </div>
      </div>
      <div className='mt-2 flex gap-3 items-center'>
        <div className='flex items-center gap-2 border border-slate-300 rounded-full px-3.5 py-1.5'>
          <span className='text-slate-500'>
            <FaBed />
          </span>
          <span className='text-slate-400 text-sm'>{data.room}</span>
        </div>
        <div className='flex items-center gap-2 border border-slate-300 rounded-full px-3.5 py-1.5'>
          <span className='text-slate-500'>
            <BiSolidBath />
          </span>
          <span className='text-slate-400 text-sm'>{data.bathroom}</span>
        </div>
      </div>
      <div className='mt-2 flex justify-between items-center'>
        <p className='text-slate-800 text-xl font-medium'>
          {changeToRupiah(data.price)}{' '}
          <span className='text-slate-400 text-sm font-normal'>/ night</span>
        </p>
        <Link
          to={`/detail/${data.slug}`}
          target='_blank'
          className='bg-slate-800 hover:bg-teal-600 text-sm text-white px-3 py-1.5 rounded-full'
        >
          View Detail
        </Link>
      </div>
    </div>
  )
}
