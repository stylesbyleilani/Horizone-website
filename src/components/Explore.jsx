// import { CircleXIcon } from 'lucide-react'
// import { RiGlobalLine } from "react-icons/ri";

// import React from 'react'

// const Explore = () => {
//   return (
// <div className="di  bg-white p-5 flex gap-2 items-center">
//   <div className="div1   flex flex-col gap-2">

//            <div className="relative">
//              <img src="/m19.jpg" alt="" className='w-[500px] h-[220px] rounded-md object-cover' />
//              <div className="absolute inset-0 bg-black/70 backdrop-blur-md rounded-md" />
//              <div className="absolute inset-0 p-4 flex flex-col justify-between">
//                <div className="flex justify-between">
//                <div className='p-2 bg-white/20 backdrop-blur-sm text-gray-300 rounded-md'>

//                  <RiGlobalLine className="text-white" />
//                  </div>

//                </div>
//                <div className="text-start flex flex-col gap-3">
//                  <p className='text-gray-100 text-2xl'>
//                    <span className='block'>Explore more to get your </span>
//                    <span>comfort zone</span>
//                  </p>
//                  <p className='text-gray-100 text-sm'>Book your perfect stay with us</p>
//                   <button className='bg-white font-semibold w-[150px] py-2 px-5 rounded-sm text-gray-900'>Book Now !</button>
//                </div>
//              </div>
//            </div>

//                   <div className="relative">
//                     <img src="/m11.jpg" alt="" className='w-[500px] h-[220px] rounded-md object-cover' />
//                     <div className="absolute inset-0 bg-black/60 rounded-md" />
//                     <div className="absolute inset-0 p-4 flex flex-col justify-between">

//                       <div className="text-start flex justify-start mt-32 items-start flex-col">
//                         <p className='text-gray-100 text-lg'>
//                           <span className='block'>Rooms Available</span>
//                         </p>
//                         <h2 className='text-2xl font-medium text-white my-2'>76</h2>
//                       </div>
//                     </div>
//                   </div>

//   </div>
//   <div className="div2 ">

//   <div className="relative">
//                     <img src="/m16.jpg" alt="" className='w-[1100px] h-[450px] rounded-md object-cover' />
//                     <div className="absolute inset-0 bg-black/60 rounded-md" />
//                     <div className="absolute inset-0 p-4  flex justify-center">

//                       {/* <div className="flex justify-center items-center mt-26 "> */}

//                         <h2 className='text-4xl font-medium text-center mt-28 text-gray-50 my-2'>
//                           <span className='block'>Beyond accomodation, creating</span>
//                           <span>memories of a lifetime</span>
//                         </h2>
//                       {/* </div> */}
//                     </div>
//                   </div>


//   </div>

// </div>

    
//   )
// }

// export default Explore


import { CircleXIcon } from 'lucide-react';
import { RiGlobalLine } from "react-icons/ri";
import React from 'react';

const Explore = () => {
  return (
    <div className="bg-white p-4 lg:p-5">
      <div className="flex flex-col lg:flex-row gap-4 items-start">
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <div className="relative w-full lg:w-[500px]">
            <img 
              src="/m19.jpg" 
              alt="" 
              className="w-full h-[220px] rounded-md object-cover" 
            />
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md rounded-md" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="flex justify-between">
                <div className="p-2 bg-white/20 backdrop-blur-sm text-gray-300 rounded-md">
                  <RiGlobalLine className="text-white" />
                </div>
              </div>
              <div className="text-start flex flex-col gap-3">
                <p className="text-gray-100 text-xl sm:text-2xl">
                  <span className="block">Explore more to get your </span>
                  <span>comfort zone</span>
                </p>
                <p className="text-gray-100 text-sm">Book your perfect stay with us</p>
                <button className="bg-white font-semibold w-[150px] py-2 px-5 rounded-sm text-gray-900">
                  Book Now !
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full lg:w-[500px]">
            <img 
              src="/m11.jpg" 
              alt="" 
              className="w-full h-[220px] rounded-md object-cover" 
            />
            <div className="absolute inset-0 bg-black/60 rounded-md" />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div className="text-start flex justify-start mt-32 items-start flex-col">
                <p className="text-gray-100 text-lg">
                  <span className="block">Rooms Available</span>
                </p>
                <h2 className="text-2xl font-medium text-white my-2">76</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex-1">
          <div className="relative w-full h-full">
            <img 
              src="/m16.jpg" 
              alt="" 
              className="w-full h-[300px] lg:h-[450px] rounded-md object-cover" 
            />
            <div className="absolute inset-0 bg-black/60 rounded-md" />
            <div className="absolute inset-0 p-4 flex justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-center mt-16 lg:mt-28 text-gray-50 my-2">
                <span className="block">Beyond accommodation, creating</span>
                <span>memories of a lifetime</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;

