import React from 'react'

const Discover = () => {
  return (
    <div className='bg-white p-5 text-gray-950'>
 <h1 className='text-3xl'>Discover Our Environs</h1>
 <p className='text-gray-500'>Explore our deluxe environs to help our clients be comfortable </p>

<div className="div grid grid-cols-1 mt-4  gap-3 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
<div className="div-1">
  <h1 className='font-semibold text-xl'>Pool</h1>
  <img src="/m1.jpg" alt="" className=' mt-2 rounded-lg object-cover w-full h-[150px]' />
</div>

<div className="div-1">
  <h1 className='font-semibold text-xl'>Lounge</h1>
  <img src="/m2.jpg" alt="" className=' mt-2 rounded-lg object-cover  w-full h-[150px]' />
</div>
<div className="div-1 ">
  <h1 className='font-semibold text-xl'>Resort</h1>
  <img src="/m4.jpg" alt=""  className=' mt-2 object-cover rounded-lg w-full h-[150px]'/>
</div>

<div className="div-1">
  <h1 className='font-semibold text-xl'>Room</h1>
  <img src="/m17.jpg" alt="" className=' mt-2 rounded-lg object-cover w-full h-[150px] ' />
</div>

</div>

    </div>
  )
}

export default Discover