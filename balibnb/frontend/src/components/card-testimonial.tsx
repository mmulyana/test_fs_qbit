import { Testimonial } from '../model/testimonial-model'
import PersonImg from '../assets/img/testimonial-1.jpg'

export default function CardTestimonial({ message, name }: Testimonial) {
  return (
    <div className='py-5 px-7 border border-slate-800 rounded-xl'>
      <p className='text-2xl font-medium text-slate-800 font-sans'>&quot;</p>
      <p className='text-xl font-medium text-slate-800'>{message}</p>
      <div className='mt-3.5 flex items-center gap-2'>
        <div className='w-8 h-8 rounded-full overflow-hidden'>
          <img src={PersonImg} className='w-full h-full object-cover' />
        </div>
        <p className='text-slate-400'>{name}</p>
      </div>
    </div>
  )
}
