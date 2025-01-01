import { Star } from 'lucide-react'
import React from 'react'
import { CiStar } from 'react-icons/ci'

const Visited = () => {
  return (
          <div className='bg-white p-5 text-gray-950'>
    <h1 className='text-3xl'>Exclusive  Rooms</h1>
    <p className='text-gray-500'>Explore our deluxe environs to help our clients be comfortable </p>
   
    <div className="div grid grid-cols-1 mt-4 md:gap-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
     
     <div className="div-1">
  <img src="/m27.jpg" alt="" className=' rounded-lg w-full h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2'>majesty room</p>
  <div className="div flex gap-1  text-sm  text-gray-600 items-center ">
     <CiStar className='text-xl ' />
    <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $930</p>

     </div>

     <div className="div-1">
  <img src="/m22.jpg" alt="" className=' rounded-lg w-full h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2'>majesty room</p>
  <div className="div flex gap-1  text-sm  text-gray-600 items-center ">
   <CiStar className='text-xl ' />
    <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $500</p>

     </div>

     <div className="div-1">
  <img src="/m28.jpg" alt="" className=' rounded-lg w-full h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2'>majesty room</p>
  <div className="div flex gap-1 text-sm  text-gray-600 items-center ">
 <CiStar className='text-xl ' />
    <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $530</p>

     </div>

     <div className="div-1">
  <img src="/m25.jpg" alt="" className=' rounded-lg w-full h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2'>majesty room</p>
  <div className="div flex gap-1  text-sm  text-gray-600 items-center ">
 <CiStar className='text-xl  ' />
    <p>4.7</p>
    <p>(245,Reviews)</p>

    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $630</p>

     </div>
    </div>
    </div>
  )
}

export default Visited