import { BsFilter } from 'react-icons/bs'
import heroImg from '../assets/img/hero.jpg'
import { Property } from '../model/property-model'
import { useState, useEffect } from 'react'
import { getAllProperties } from '../services/property-service'
import SearchForm from '../components/searchForm'
import CardProperty from '../components/card-property'
import CardTestimonial from '../components/card-testimonial'
import testimonialJson from '../data/testimonial.json'
import { Testimonial } from '../model/testimonial-model'

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([])
  const [testimonials] = useState<Testimonial[]>(testimonialJson)

  useEffect(() => {
    async function getData() {
      const data = await getAllProperties()
      setProperties(data.data as Property[])
    }

    getData()
  }, [])

  return (
    <div className='container mx-auto px-4'>
      <div className='h-[480px] w-full rounded-3xl overflow-hidden relative'>
        <div className='absolute h-full w-full left-0 top-0 bg-black/40 pt-10'>
          <h1 className='text-[72px] text-center leading-tight font-slate-800 max-w-md mx-auto text-white'>
            Find Your Dream Place
          </h1>
          <p className='text-center mt-1.5 text-white text-lg'>
            The best places you will find
          </p>
        </div>

        <img
          src={heroImg}
          className='object-cover w-full h-full object-center z-0'
        />
        <SearchForm />
      </div>
      <div className='mt-8'>
        <div className='flex justify-between items-center'>
          <p className='text-2xl font-medium text-slate-800 max-w-[300px] capitalize'>
            Latest rocommendation for you
          </p>
          <button className='bg-slate-800 text-white px-5 py-2 rounded-full text-sm flex gap-1.5 items-center'>
            <span className='leading-5'>Filters</span>
            <span className='text-lg'>
              <BsFilter />
            </span>
          </button>
        </div>
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10'>
          {properties.length > 0 ? (
            properties.map((property) => (
              <CardProperty data={property} key={property.id} />
            ))
          ) : (
            <p>loading</p>
          )}
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-2xl font-medium text-slate-900'>Whay they say</p>
        <div className='mt-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {testimonials.map((testominal, index) => (
              <CardTestimonial
                name={testominal.name}
                message={testominal.message}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
