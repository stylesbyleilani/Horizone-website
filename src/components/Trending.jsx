import { Star } from 'lucide-react'
import React from 'react'
import { CiStar } from "react-icons/ci";

const Trending = () => {
  return (
    <div className='bg-white p-5 text-gray-950' id='rooms'>
    <h1 className='text-3xl'>Deluxe Rooms</h1>
    <p className='text-gray-500'>Explore our deluxe environs to help our clients be comfortable </p>
   
    <div className="div grid grid-cols-1 mt-4 md:gap-2 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
     
     <div className="div-1">
  <img src="/m16.jpg" alt="" className=' rounded-lg w-full   h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2'>Majesty room</p>
  <div className="div flex gap-1 text-sm  text-gray-600 items-center ">
    <CiStar className='text-xl ' />
    <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $330</p>

     </div>

     <div className="div-1">
  <img src="/m9.jpg" alt="" className=' w-full rounded-lg  h-[200px] object-cover ' />
  <p className='font-medium text-xl mt-2 '>Deluxe Standard</p>
  <div className="div flex gap-1 text-sm  text-gray-600 items-center ">
  <CiStar className='text-xl ' />
  <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $330</p>

     </div>

     <div className="div-1">
  <img src="/m10.jpg" alt="" className='w-full rounded-lg  h-[200px] object-cover ' />
  <p  className='font-medium text-xl mt-2 '>Dekuxe Royal Suite</p>
  <div className="div flex gap-1 text-sm text-gray-600 items-center ">
  <CiStar className='text-xl ' />
  <p>4.7</p>
    <p>(245,Reviews)</p>
    </div>   
    <p className='text-gray-900 font-semibold  text-xl'> $290</p>

     </div>

     <div className="div-1">
  <img src="/m13.jpg" alt="" className=' rounded-lg  w-full h-[200px] object-cover ' />
  <p  className='font-medium text-xl mt-2  '>Standard Room</p>
  <div className="div flex gap-1 text-sm text-gray-600 items-center ">
  <CiStar className='text-xl ' />
  <p>4.7</p>
    <p>(245,Reviews)</p>

    </div>   
    <p className='text-gray-900 font-semibold text-xl'> $230</p>

     </div>





</div>




    </div>
  )
}

export default Trending





// import React from 'react';
// import { CiStar } from "react-icons/ci";

// const RoomCard = ({ image, title, rating, reviews, price }) => (
//   <div className="flex flex-col p-2">
//     <div className="relative w-full aspect-[16/9] mb-2">
//       <img 
//         src={image} 
//         alt={title} 
//         className="rounded-lg w-full h-full object-cover"
//       />
//     </div>
//     <h3 className="font-medium text-lg sm:text-xl mt-2">{title}</h3>
//     <div className="flex gap-1 text-sm text-gray-600 items-center mt-1">
//       <CiStar className="text-xl" />
//       <span>{rating}</span>
//       <span>({reviews} Reviews)</span>
//     </div>
//     <p className="text-gray-900 font-semibold text-lg sm:text-xl mt-1">
//       ${price}
//     </p>
//   </div>
// );

// const Trending = () => {
//   const rooms = [
//     {
//       image: "/m16.jpg",
//       title: "Majesty room",
//       rating: "4.7",
//       reviews: "245",
//       price: "330"
//     },
//     {
//       image: "/m9.jpg",
//       title: "Deluxe Standard",
//       rating: "4.7",
//       reviews: "245",
//       price: "330"
//     },
//     {
//       image: "/m10.jpg",
//       title: "Deluxe Royal Suite",
//       rating: "4.7",
//       reviews: "245",
//       price: "290"
//     },
//     {
//       image: "/m13.jpg",
//       title: "Standard Room",
//       rating: "4.7",
//       reviews: "245",
//       price: "230"
//     }
//   ];

//   return (
//     <div className="bg-white p-4 sm:p-5 text-gray-950">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Deluxe Rooms</h1>
//         <p className="text-gray-500 mb-6">
//           Explore our deluxe environs to help our clients be comfortable
//         </p>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
//           {rooms.map((room, index) => (
//             <RoomCard
//               key={index}
//               image={room.image}
//               title={room.title}
//               rating={room.rating}
//               reviews={room.reviews}
//               price={room.price}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trending;