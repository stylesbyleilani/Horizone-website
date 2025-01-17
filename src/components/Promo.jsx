


import { CircleXIcon } from 'lucide-react'
import React from 'react'

const Promo = () => { 
 return (
   <div className='bg-white p-5 text-gray-950' id='service'>
     <h1 className='text-3xl mb-4'>Get Promo at Cheaper Price</h1>
     <div className="flex gap-4 md:flex-row flex-col">
       <div className="relative">
         <img src="/m18.jpg" alt="" className='w-[900px] md:w-[1100px] h-[220px] rounded-md object-cover' />
         <div className="absolute inset-0 bg-black/60 rounded-md" />
         <div className="absolute inset-0 p-4 flex flex-col justify-between">
           <div className="flex justify-between">
           <div className="div p-1 w-8 h-8 bg-amber-300 rounded-full items-center  text-gray-900"><CircleXIcon className='text-sm'/></div>
           <div className='p-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full'>
               <p>Special Offer - 30% Off</p>
             </div>
           </div>
           <div className="text-start">
             <p className='text-gray-300 text-lg'>
               <span className='block'>Get Extra Discount at</span>
               <span>Horizone Hotel</span>
             </p>
             <h2 className='text-5xl font-medium text-white my-2'>50%</h2>
             <p className='text-gray-300'>With Terms and Condition</p>
           </div>
         </div>
       </div>

       <div className="relative">
         <img src="/m21.jpg" alt="" className='w-[900px] md:w-[1100px] h-[220px] rounded-md object-cover' />
         <div className="absolute inset-0 bg-black/60 rounded-md" />
         <div className="absolute inset-0 p-4 flex flex-col justify-between">
           <div className="flex justify-between">
              <div className="div p-1 w-8 h-8 bg-amber-300 rounded-full items-center  text-gray-900"><CircleXIcon className='text-sm'/></div>
            
             <div className='p-2 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full'>
               <p>Valid only on 20 Dec 2024</p>
             </div>
           </div>
           <div className="text-start">
             <p className='text-gray-300 text-lg'>
               <span className='block'>Exclusive Deals </span>
               <span>Just For You</span>
             </p>
             <h2 className='text-5xl font-medium text-white my-2'>75%</h2>
             <p className='text-gray-300'>With Terms and Condition</p>
           </div>
         </div>
       </div>
     </div>
     <div className='mt-6 p-2 md:text-xl text-sm flex gap-2 justify-between items-center'>
      <h1 className='font-bold text-gray-400'>HELLOSIGN</h1>
      <h1 className='font-bold text-gray-400'>DOORDASH</h1>
      <h1 className='font-bold text-gray-400'>COINBASE</h1>
      <h1 className='font-bold text-gray-400'>AIRTABLE</h1>
      <h1 className='font-bold text-gray-400'>PENDO</h1>
      <h1 className='font-bold text-gray-400'>TREEHOUSE</h1>





     </div>
   </div>
 )
}

export default Promo